// Tools
import { useState, useMemo } from "react";
import { useSimpleReducer } from "@/hooks/useSimpleReducer";
// Types
import type { TaskWithoutID, TaskEditCallback } from "../../@types";

export type UpdatedTask = Omit<TaskWithoutID, "urgent" | "isCompleted">;

export interface UseEditModeResult {
    isOpened: boolean;
    newState: UpdatedTask;
    someChangesHaveBeenMade: boolean;

    saveAndExit: () => void;
    toggleIsOpened: () => void;
    updateNewState: (val: Partial<UpdatedTask>) => void;
}

export function useEditMode(taskToBeEdited: TaskWithoutID, applyChanges: (cb: TaskEditCallback) => void): UseEditModeResult {
    const { isCompleted: _, urgent: __, ...task } = taskToBeEdited;
    //
    const [isOpened, setIsOpened] = useState<boolean>(false);
    const [newState, updateNewState] = useSimpleReducer<UpdatedTask>(task);

    function saveAndExit() {
        applyChanges(() => newState);
        setIsOpened(false);
    }

    const someChangesHaveBeenMade = useMemo<boolean>(() => {
        for (const key in newState) {
            if (newState[key as keyof typeof newState] !== task[key as keyof typeof task]) return true;
        }

        return false;
    }, [newState, task]);

    return {
        isOpened,
        newState,
        saveAndExit,
        someChangesHaveBeenMade,
        toggleIsOpened: () => setIsOpened((val) => !val),
        updateNewState,
    };
}
