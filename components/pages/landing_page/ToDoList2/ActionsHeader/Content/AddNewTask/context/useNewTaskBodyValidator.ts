// Tools
import { useMemo } from "react";
import { DESCRIPTION_RESTRICTIONS, LOCALIZATION_RESTRICTIONS, TITLE_RESTRICTIONS } from "../validators/length_restrictions";
// Types
import type { Restriction } from "@/@types/Restriction";
import type { NewTaskBody } from "landing_page/ToDoList2/@types";

function _validateString(val: string | null, { min, max }: Restriction): boolean {
    if (val === null) return true; // The absence of value implies its optionality

    const { length } = val;
    return length < max && length > min;
}

/**
 * Returns true if everything is valid
 */
export function useNewTaskBodyValidator(newTaskBody: NewTaskBody): boolean {
    const titleIsValid: boolean = useMemo<boolean>(() => {
        return _validateString(newTaskBody.title, TITLE_RESTRICTIONS);
    }, [newTaskBody.title]);

    const descriptionIsValid: boolean = useMemo<boolean>(() => {
        return _validateString(newTaskBody.description, DESCRIPTION_RESTRICTIONS);
    }, [newTaskBody.description]);

    const localizationIsValid: boolean = useMemo<boolean>(() => {
        return _validateString(newTaskBody.localization, LOCALIZATION_RESTRICTIONS);
    }, [newTaskBody.localization]);

    return titleIsValid && descriptionIsValid && localizationIsValid;
}
