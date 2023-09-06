// Tools
import { createContext } from "react";
// Types
import type { Task, EditTask, RemoveTask } from "landing_page/ToDoList2/@types/Tasks";

export interface I_TaskDataContext {
    originalTask: Task;

    taskIsBeingRemoved: boolean;

    removeTask: RemoveTask;
    updateTask: EditTask;
}

export const taskDataContext = createContext<I_TaskDataContext>({} as any);
