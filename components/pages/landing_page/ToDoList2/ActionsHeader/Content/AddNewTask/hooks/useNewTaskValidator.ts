// Tools
import { useMemo } from "react";
import { useLabelsContext } from "landing_page/ToDoList2/hooks";
import { useAddNewTaskContext } from "../hooks/useAddNewTaskContext";
import { DESCRIPTION_RESTRICTIONS, LOCALIZATION_RESTRICTIONS, TITLE_RESTRICTIONS } from "../validators/length_restrictions";
// Types
import type { Restriction } from "@/@types/Restriction";

function _validateString(val: string | null, { min, max }: Restriction): boolean {
    if (val === null) return true; // The absence of value implies its optionality

    const { length } = val;
    return length <= max && length >= min;
}

interface UseNewTaskValidatorProps {
    titleIsNotValid: boolean;
    labelIDIsNotValid: boolean;
    descriptionIsNotValid: boolean;
    localizationIsNotValid: boolean;
}

export function useNewTaskValidator(): UseNewTaskValidatorProps {
    const { labels } = useLabelsContext();
    const { newTaskBody } = useAddNewTaskContext();

    const titleIsNotValid: boolean = useMemo<boolean>(() => {
        return !_validateString(newTaskBody.title, TITLE_RESTRICTIONS);
    }, [newTaskBody.title]);

    const descriptionIsNotValid: boolean = useMemo<boolean>(() => {
        return !_validateString(newTaskBody.description, DESCRIPTION_RESTRICTIONS);
    }, [newTaskBody.description]);

    const localizationIsNotValid: boolean = useMemo<boolean>(() => {
        return !_validateString(newTaskBody.localization, LOCALIZATION_RESTRICTIONS);
    }, [newTaskBody.localization]);

    const labelIDIsNotValid: boolean = useMemo<boolean>(() => {
        return !Object.keys(labels).includes(newTaskBody.labelID);
    }, [labels, newTaskBody.labelID]);

    return {
        titleIsNotValid,
        labelIDIsNotValid,
        descriptionIsNotValid,
        localizationIsNotValid,
    };
}
