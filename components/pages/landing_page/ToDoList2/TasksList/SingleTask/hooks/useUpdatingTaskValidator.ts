// Tools
import { useMemo, } from "react";
import { useEditModeContext } from "./useEditModeContext";
import { useTaskValidator , type UseTaskValidatorOutput} from "landing_page/ToDoList2/validators/useTaskValidator";
// Types
import type { TaskWithoutID } from "landing_page/ToDoList2/@types";

type UseUpdatingTaskValidatorOutput = UseTaskValidatorOutput & {
    someChangesHaveBeenMade: boolean;
};


export function useUpdatingTaskValidator(originalTask:TaskWithoutID): UseUpdatingTaskValidatorOutput {
    const { newState} = useEditModeContext();
    const  propiertiesValidationResult= useTaskValidator(newState);

    const someChangesHaveBeenMade = useMemo<boolean>(() => {
        for (const key in newState) {
            if (newState[key as keyof typeof newState] !== originalTask[key as keyof typeof  originalTask]) {return true;}
            }

        return false;
    }, [newState, originalTask]);


    return {
        ...propiertiesValidationResult,
        someChangesHaveBeenMade,
    };
}