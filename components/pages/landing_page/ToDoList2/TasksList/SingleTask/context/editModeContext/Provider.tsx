// Tools
import { editModeContext } from ".";
import { useDelayedState } from "@/hooks/useDelayedState";
import { useSimpleReducer } from "@/hooks/useSimpleReducer";
import { useMobileEditMode } from "./_hooks/useMobileEditMode";
// Types
import type { FunctionComponent, ReactNode } from "react";
import type { TaskWithoutID, TaskEditCallback } from "landing_page/ToDoList2/@types";

export type UpdatedTask = Omit<TaskWithoutID, "isCompleted" | "createdAt">;

interface EditModeContexProviderProps {
    children: ReactNode;
    taskToBeEdited: TaskWithoutID;

    applyChanges: (cb: TaskEditCallback) => void;
}

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

    function discardChanges() {
        updateNewState(task);
        isOpened.setValue(false);
    }

    function openEditMode() {
        isOpened.setValue(true);
    }

    return (
        <editModeContext.Provider
            value={{
                isOpened: isOpened.value,
                isChanging: isOpened.isChanging,
                newState,
                applyMobileEditMode,
                //
                saveAndExit,
                openEditMode,
                discardChanges,
                updateNewState,
            }}
        >
            {props.children}
        </editModeContext.Provider>
    );
};

export default EditModeContextProvider;
