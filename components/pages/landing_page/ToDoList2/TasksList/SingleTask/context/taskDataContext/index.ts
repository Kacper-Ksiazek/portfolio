// Tools
import { createContext } from "react";
// Types
import type { Task, TaskEditCallback } from "landing_page/ToDoList2/@types";

export interface I_TaskDataContext {
    originalTask: Task;

    taskIsBeingRemoved: boolean;

    removeTask: () => void;
    updateTask: (cb: TaskEditCallback, skipSnackbar?: boolean) => void;
}

export const taskDataContext = createContext<I_TaskDataContext>({} as any);
