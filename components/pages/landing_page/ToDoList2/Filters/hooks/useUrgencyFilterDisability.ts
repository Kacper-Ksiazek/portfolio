// Tools
import { useEffect } from "react";
// Types
import type { Dispatch } from "react";
import type { TasksFilters, Task } from "landing_page/ToDoList2/@types";

/**
 * @param taskList a list of tasks to be checked for urgency
 * @returns true if there is at least one urgent task in the list
 */

function thereIsAnUrgentTask(taskList: Task[]): boolean {
    for (const { urgent } of taskList) {
        if (urgent === true) return true;
    }
    return false;
}

interface UseUrgencyFilterDisabilityParams {
    filteredTasks: Task[]; //
    filters: TasksFilters;
    fadeContentOut: boolean;
    updateFilters: Dispatch<Partial<TasksFilters>>;
}

/**
 * Returns true if urgency filter should be disabled.
 */
export function useUrgencyFilterDisability(params: UseUrgencyFilterDisabilityParams): boolean {
    const { filteredTasks, filters, fadeContentOut, updateFilters } = params;
    const disableUrgencyFilter: boolean = fadeContentOut === true || thereIsAnUrgentTask(filteredTasks) === false;

    // If urgency filter is disabled and it is not set to default, set it to default.
    useEffect(() => {
        if (disableUrgencyFilter === true && filters.urgencyFilter !== "_DEFAULT") {
            updateFilters({ urgencyFilter: "_DEFAULT" });
        }
    }, [disableUrgencyFilter, filters.urgencyFilter, updateFilters]);

    return disableUrgencyFilter;
}
