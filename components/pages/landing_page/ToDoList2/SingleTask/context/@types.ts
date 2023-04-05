// Types
import type { ReactNode } from "react";
import type { Task, TaskWithoutID } from "../../@types";

export type ModifyParams = Omit<TaskWithoutID, "isCompleted" | "urgent">;

export interface SingleTaskContext {
    data: Task;

    stages: {
        isEdit: boolean;
        isDeleting: boolean;
    };

    actions: {
        remove: () => void;
        /** Switches urgency */
        togglePriority: () => void;
        toggleEditMode: () => void;
        modify: (val: ModifyParams) => void;
    };
}

export interface SingleTaskContextProviderProps {
    children: ReactNode;
    data: Task;
    update: (val: Partial<TaskWithoutID>) => void;
    remove: () => void;
}
