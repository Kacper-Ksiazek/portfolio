// Tools
import { useMemo } from "react";
import { DEFAULT_TASKS } from "../../context/TasksListContext/default_tasks";
// Types
import type { Task } from "landing_page/ToDoList2/@types";

const PROPERTIES_TO_CHECK: (keyof Omit<Task, "createdAt" | "id" | "isCompleted">)[] = [
    "title", //
    "urgent",
    "dueDate",
    "dueTime",
    "localization",
    "description",
    "labelID",
];

/**
 * Auxiliary function to find a task with a given id in the default tasks
 * @param id Id of the task to find in the default tasks
 * @returns Either the task with the given id in the default tasks or null if it doesn't exist
 */
function _findTaskWithGivenIDInDefaults(id: Task["id"]): Task | null {
    return DEFAULT_TASKS.find((task) => task.id === id) ?? null;
}

/**
 * Custom hook to check if the tasks vary from the default tasks
 * @param tasks List of tasks to check if they vary from the default tasks
 * @returns True if the tasks vary from the default tasks, false otherwise
 */
export const useTasksVaryFromDefault = (tasks: Task[]): boolean => {
    return useMemo<boolean>(() => {
        // If the number of tasks is different than the number of default tasks, then the tasks vary from default
        if (tasks.length !== DEFAULT_TASKS.length) return true;

        for (const task of tasks) {
            const correspondingDefaultTask: Task | null = _findTaskWithGivenIDInDefaults(task.id);

            // If the task is not in the default tasks, then the tasks vary from default
            if (correspondingDefaultTask === null) return true;

            // If any of the properties of the task is different than the corresponding default task, then the tasks vary from default
            for (const property of PROPERTIES_TO_CHECK) {
                if (task[property] !== correspondingDefaultTask[property]) return true;
            }
        }
        return false;
    }, [tasks]);
};
