// Tools
import { createContext } from "react";
// Types
import type { TaskWithoutID } from "landing_page/ToDoList2/@types";

export type UpdatedTask = Omit<TaskWithoutID, "isCompleted" | "createdAt">;

interface I_EditModeContext {
    isOpened: boolean;
    isChanging: boolean;
    newState: UpdatedTask;
    applyMobileEditMode: boolean;

    saveAndExit: () => void;
    toggleIsOpened: () => void;
    updateNewState: (val: Partial<UpdatedTask>) => void;
}

export const editModeContext = createContext<I_EditModeContext>({} as any);
