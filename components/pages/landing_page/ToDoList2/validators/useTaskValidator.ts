// Tools
import { useMemo } from "react";
import { useLabelsContext } from "landing_page/ToDoList2/hooks";
import { DESCRIPTION_RESTRICTIONS, LOCALIZATION_RESTRICTIONS, TITLE_RESTRICTIONS } from "./length_restrictions";
// Types
import type { Restriction } from "@/@types/Restriction";
import type { NewTaskBody } from "landing_page/ToDoList2/@types";

function _validateString(val: string | null, { min, max }: Restriction): boolean {
    if (val === null) return true; // The absence of value implies its optionality

    const { length } = val;
    return length < max && length > min;
}

interface UseTaskValidatorOutput {
    titleIsInvalid: boolean;
    labelIDIsInvalid: boolean;
    descriptionIsInvalid: boolean;
    localizationIsInvalid: boolean;

    everythingIsValid: boolean;
}

export function useTaskValidator(task: NewTaskBody): UseTaskValidatorOutput {
    const { labels } = useLabelsContext();

    return useMemo<UseTaskValidatorOutput>(() => {
        const titleIsInvalid: boolean = !_validateString(task.title, TITLE_RESTRICTIONS);
        const descriptionIsInvalid: boolean = !_validateString(task.description, DESCRIPTION_RESTRICTIONS);
        const localizationIsInvalid: boolean = !_validateString(task.localization, LOCALIZATION_RESTRICTIONS);
        const labelIDIsInvalid: boolean = !Object.keys(labels).includes(task.labelID);

        return {
            titleIsInvalid,
            labelIDIsInvalid,
            descriptionIsInvalid,
            localizationIsInvalid,

            everythingIsValid: !(titleIsInvalid || labelIDIsInvalid || descriptionIsInvalid || localizationIsInvalid),
        };
    }, [task.title, task.description, task.localization, task.labelID, labels]);
}
