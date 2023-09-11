// Tools
import { useEffect } from "react";
// Types
import type { Task } from "landing_page/ToDoList/2023/@types/Tasks";
import type { TasksFilters, UpdateTasksFilters } from "landing_page/ToDoList/2023/@types/Filters";

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
    updateFilters: UpdateTasksFilters;
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
