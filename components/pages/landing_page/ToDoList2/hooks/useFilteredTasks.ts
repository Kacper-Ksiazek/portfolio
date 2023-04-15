// Tools
import { Task } from "../@types";
import { XOR } from "@/utils/XOR";
import { useState, useEffect, useRef } from "react";
import { useSimpleReducer } from "@/hooks/useSimpleReducer";
// Types
import type { Dispatch } from "react";
import type { Filters as I_Filters } from "../@types";

function filterTasks(tasks: Task[], filters: I_Filters): Task[] {
    const { withParticularLabel, completedOnly, urgencyFilter } = filters;

    return tasks.filter((target) => {
        // Apply particular label filter
        if (withParticularLabel !== "_ALL" && withParticularLabel !== target.label) return false;
        // Check completed only
        if (completedOnly && target.isCompleted === false) return false;
        // Check whether it is urgent only
        if (urgencyFilter === "URGENT_ONLY" && target.urgent === false) return false;

        return true;
    });
}

interface UseFilteredTasksResult {
    filters: I_Filters;
    filteredTasks: Task[];
    fadeContentOut: boolean;
    updateFilters: Dispatch<Partial<I_Filters>>;
}

const DURATION_OF_FADING_OUT: TimeInMS = 240;

export function useFilteredTasks(tasks: Task[]): UseFilteredTasksResult {
    const [filters, updateFilters] = useSimpleReducer<I_Filters>({
        sort: "NEWEST",
        urgencyFilter: "_DEFAULT",
        completedOnly: false,
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
        const filteredTasks = filterTasks(tasks, filters);
        let timeout: ReturnType<typeof setTimeout> | null = null;

        if (XOR(filteredTasks.length === 0, _amountOfTaskCurrentlyDisplaying.current === 0)) {
            setFadeContentOut(true);
            timeout = setTimeout(() => {
                setFadeContentOut(false);
                setTasksToBeDisplayed(filteredTasks);
            }, DURATION_OF_FADING_OUT);
        } else {
            setTasksToBeDisplayed(filteredTasks);
        }

        return () => {
            if (timeout !== null) clearTimeout(timeout);
        };
    }, [tasks, filters]);

    return {
        filters,
        fadeContentOut,
        filteredTasks: tasksToBeDisplayed,
        //
        updateFilters,
    };
}
