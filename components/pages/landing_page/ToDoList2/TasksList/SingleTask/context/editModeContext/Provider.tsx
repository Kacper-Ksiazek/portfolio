// Tools
import { editModeContext } from ".";
import { useTaskDataContext } from "../../hooks";
import { useDelayedState } from "@/hooks/useDelayedState";
import { useSimpleReducer } from "@/hooks/useSimpleReducer";
import { useMobileEditMode } from "./_hooks/useMobileEditMode";
// Types
import type { FunctionComponent, ReactNode } from "react";
import type { TaskWithoutID } from "landing_page/ToDoList2/@types/Tasks";

export type UpdatedTask = Omit<TaskWithoutID, "isCompleted" | "createdAt">;

interface EditModeContexProviderProps {
    children: ReactNode;
}

const EditModeContextProvider: FunctionComponent<EditModeContexProviderProps> = (props) => {
    const { originalTask, updateTask: applyChanges } = useTaskDataContext();
    //
    const applyMobileEditMode = useMobileEditMode();
    const isOpened = useDelayedState<boolean>(false, applyMobileEditMode ? 0 : 700);
    const [newState, updateNewState] = useSimpleReducer<UpdatedTask>(originalTask);

    function saveAndExit() {
        applyChanges(() => newState);
        isOpened.setValue(false);
    }

    function discardChanges() {
        updateNewState(originalTask);
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
