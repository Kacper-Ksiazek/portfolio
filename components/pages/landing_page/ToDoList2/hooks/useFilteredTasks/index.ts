// Tools
import { XOR } from "@/utils/XOR";
import { FiltersApplier } from "./FiltersApplier";
import { useState, useEffect, useRef } from "react";
import { useSimpleReducer } from "@/hooks/useSimpleReducer";
// Types
import type { Dispatch } from "react";
import type { Task, TasksFilters } from "../../@types";

interface UseFilteredTasksResult {
    filters: TasksFilters;
    filteredTasks: Task[];
    fadeContentOut: boolean;
    updateFilters: Dispatch<Partial<TasksFilters>>;
}

const DURATION_OF_FADING_OUT: TimeInMS = 240;

export function useFilteredTasks(tasks: Task[]): UseFilteredTasksResult {
    const [filters, updateFilters] = useSimpleReducer<TasksFilters>({
        sort: "NEWEST",
        urgencyFilter: "_DEFAULT",
        completion: "_ALL",
        withParticularLabel: "_ALL",
    });

    const [fadeContentOut, setFadeContentOut] = useState<boolean>(false);
    const [tasksToBeDisplayed, _setTasksToBeDisplayed] = useState<Task[]>(tasks);

    const _amountOfTaskCurrentlyDisplaying = useRef<number>(tasks.length);

    function setTasksToBeDisplayed(tasks: Task[]) {
        _setTasksToBeDisplayed(tasks);
        _amountOfTaskCurrentlyDisplaying.current = tasks.length;
    }

    useEffect(() => {
        const Filter = new FiltersApplier({ filters, tasks });
        const filteredTasks = Filter.result;

        let timeout: ReturnType<typeof setTimeout> | null = null;

        if (XOR(filteredTasks.length === 0, _amountOfTaskCurrentlyDisplaying.current === 0)) {
            if (filters.completion === "_ALL") {
                setFadeContentOut(true);
                timeout = setTimeout(() => {
                    setFadeContentOut(false);
                    setTasksToBeDisplayed(filteredTasks);
                }, DURATION_OF_FADING_OUT);
            }
            //
            else {
                updateFilters({
                    completion: "_ALL",
                });
            }
        } else {
            setTasksToBeDisplayed(filteredTasks);
        }

        return () => {
            if (timeout !== null) {
                clearTimeout(timeout);
                setFadeContentOut(false);
            }
        };
    }, [tasks, filters, updateFilters]);

    return {
        filters,
        fadeContentOut,
        filteredTasks: tasksToBeDisplayed,
        //
        updateFilters,
    };
}
