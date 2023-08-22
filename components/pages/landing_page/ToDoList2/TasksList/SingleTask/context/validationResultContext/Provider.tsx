// Tools
import { useMemo } from "react";
import { validationResultContext } from "./index";
import { useTaskValidator } from "landing_page/ToDoList2/validators/useTaskValidator";
import { useEditModeContext } from "landing_page/ToDoList2/TasksList/SingleTask/hooks/useEditModeContext";
// Types
import type { FunctionComponent, ReactNode } from "react";
import type { TaskWithoutID } from "landing_page/ToDoList2/@types";

type ValidationResultContextProviderProps = {
    children: ReactNode;
    taskToBeEdited: TaskWithoutID;
};

const ValidationResultContextProvider: FunctionComponent<ValidationResultContextProviderProps> = (props) => {
    const { taskToBeEdited: originalTask } = props;

    const { newState } = useEditModeContext();
    const propiertiesValidationResult = useTaskValidator(newState);

    const someChangesHaveBeenMade = useMemo<boolean>(() => {
        for (const key in newState) {
            if (newState[key as keyof typeof newState] !== originalTask[key as keyof typeof originalTask]) {
                return true;
            }
        }

        return false;
    }, [newState, originalTask]);

    return (
        <validationResultContext.Provider
            value={{
                ...propiertiesValidationResult,
                someChangesHaveBeenMade,
            }}
        >
            {props.children}
        </validationResultContext.Provider>
    );
};

export default ValidationResultContextProvider;
