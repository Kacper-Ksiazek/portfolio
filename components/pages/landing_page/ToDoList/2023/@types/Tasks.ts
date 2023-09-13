import type { LabelID } from "./Labels";

export interface Task {
    id: number;
    title: string;
    urgent: boolean;
    labelID: LabelID;
    isCompleted: boolean;

    // Additional information
    dueDate: string | null;
    dueTime: string | null;
    description: string | null;
    localization: string | null;

    /** Simply Date.now() */
    createdAt: number;
}

export type TaskWithoutID = Omit<Task, "id">;

/**
 * Body of a new task, used in *Add New Task* Panel
 */
export type NewTaskBody = Omit<TaskWithoutID, "createdAt" | "isCompleted">;

/**
 * Function that returns an object with the properties to edit based on the current value
 */
export type TaskEditCallback = (currentValue: TaskWithoutID) => Partial<TaskWithoutID>;

/**
 * Function that edits a task
 * @param cb Callback that returns an object with the properties to edit
 * @param skipSnackbar If true, the snackbar won't be shown
 */
export type EditTask = (cb: TaskEditCallback, skipSnackbar?: boolean) => void;

/**
 * Function that removes a task
 */
export type RemoveTask = () => void;
