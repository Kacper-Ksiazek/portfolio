// Tools
import { useDelayedState } from "@/hooks/useDelayedState";
import { useSimpleReducer } from "@/hooks/useSimpleReducer";
import { useState, useMemo, createContext, ReactNode } from "react";
// Types
import type { FunctionComponent } from "react";
import type { TaskWithoutID, TaskEditCallback } from "landing_page/ToDoList2/@types";

export type UpdatedTask = Omit<TaskWithoutID, "isCompleted" | "createdAt">;

interface I_EditModeContext {
    isOpened: boolean;
    isClosing: boolean;
    newState: UpdatedTask;
    someChangesHaveBeenMade: boolean;

    saveAndExit: () => void;
    toggleIsOpened: () => void;
    updateNewState: (val: Partial<UpdatedTask>) => void;
}

interface EditModeContexProviderProps {
    children: ReactNode;
    taskToBeEdited: TaskWithoutID;
    applyChanges: (cb: TaskEditCallback) => void;
}

export const EditModeContext = createContext<I_EditModeContext>({} as any);

const EditModeContextProvider: FunctionComponent<EditModeContexProviderProps> = (props) => {
    const { isCompleted: _, ...task } = props.taskToBeEdited;
    //
    const isOpened = useDelayedState<boolean>(false, 700);
    // const [isOpened, setIsOpened] = useState<boolean>(false);
    const [newState, updateNewState] = useSimpleReducer<UpdatedTask>(task);

    function saveAndExit() {
        props.applyChanges(() => newState);
        isOpened.setValue(false);
    }

    const someChangesHaveBeenMade = useMemo<boolean>(() => {
        for (const key in newState) {
            if (newState[key as keyof typeof newState] !== task[key as keyof typeof task]) return true;
        }

        return false;
    }, [newState, task]);

    return (
        <EditModeContext.Provider
            value={{
                isOpened: isOpened.value,
                isClosing: isOpened.isChanging,
                newState,
                someChangesHaveBeenMade,
                //
                saveAndExit,
                updateNewState,
                toggleIsOpened: () => isOpened.setValue((val) => !val),
            }}
        >
            {props.children}
        </EditModeContext.Provider>
    );
};

export default EditModeContextProvider;
