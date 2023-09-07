// Tools
import { createContext } from "react";
// Types
import type { TaskWithoutID } from "landing_page/ToDoList/2023/@types/Tasks";

export type UpdatedTask = Omit<TaskWithoutID, "isCompleted" | "createdAt">;

interface I_EditModeContext {
    isOpened: boolean;
    isChanging: boolean;
    newState: UpdatedTask;
    applyMobileEditMode: boolean;

    saveAndExit: () => void;
    openEditMode: () => void;
    discardChanges: () => void;

    updateNewState: (val: Partial<UpdatedTask>) => void;
}

export const editModeContext = createContext<I_EditModeContext>({} as any);
