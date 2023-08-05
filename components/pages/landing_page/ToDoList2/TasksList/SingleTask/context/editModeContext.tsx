// Tools
import { useMemo, createContext } from "react";
import { useMobileEditMode } from "./useMobileEditMode";
import { useDelayedState } from "@/hooks/useDelayedState";
import { useSimpleReducer } from "@/hooks/useSimpleReducer";
// Types
import type { FunctionComponent, ReactNode } from "react";
import type { TaskWithoutID, TaskEditCallback } from "landing_page/ToDoList2/@types";

export type UpdatedTask = Omit<TaskWithoutID, "isCompleted" | "createdAt">;

interface I_EditModeContext {
    isOpened: boolean;
    isChanging: boolean;
    newState: UpdatedTask;
    applyMobileEditMode: boolean;
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
    const applyMobileEditMode = useMobileEditMode();
    const isOpened = useDelayedState<boolean>(false, applyMobileEditMode ? 0 : 700);
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
                isChanging: isOpened.isChanging,
                newState,
                applyMobileEditMode,
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
