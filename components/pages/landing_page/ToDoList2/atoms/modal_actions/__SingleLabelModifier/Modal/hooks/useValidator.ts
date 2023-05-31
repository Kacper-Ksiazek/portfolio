// Tools
import { useEffect } from "react";
import { useSimpleReducer } from "@/hooks/useSimpleReducer";
import { useLabelsContext } from "landing_page/ToDoList2/hooks";
// Types
import type { ValidationResult } from "../@types";
import type { Label } from "landing_page/ToDoList2/@types";

/**  */
export function useValidator(newLabel: Label, labelToBeEdited: Label | null): ValidationResult {
    const { _labelNamesInUse, _colorsInUse } = useLabelsContext();
    const [response, updateResponse] = useSimpleReducer<ValidationResult>({ code: "NONE", field: null });

    useEffect(() => {
        const REGEX = /^[A-Za-z\s]+$/;

        const trimmedLabelName: string = newLabel.name.trim();

        const nameHasChanged: boolean = labelToBeEdited !== null ? labelToBeEdited.name !== newLabel.name : true;
        const colorHasChanged: boolean = labelToBeEdited !== null ? labelToBeEdited.color !== newLabel.color : true;

        if (nameHasChanged && _labelNamesInUse.includes(trimmedLabelName)) {
            updateResponse({
                code: "UNAVAILABLE_LABEL_NAME",
                field: "name_input",
            });
        } else if (nameHasChanged && REGEX.test(trimmedLabelName) === false && trimmedLabelName.length > 0) {
            updateResponse({
                code: "LABEL_NAME_CONTAINS_INVALID_CHARACTER",
                field: "name_input",
            });
        } else if (colorHasChanged && _colorsInUse.includes(newLabel.color)) {
            updateResponse({
                code: "UNAVAILABLE_LABEL_COLOR",
                field: "color_picker",
            });
        } else if (trimmedLabelName.length === 0) {
            updateResponse({
                code: "NAME_IS_EMPTY",
                field: "name_input",
            });
        } else if (trimmedLabelName.length < 3) {
            updateResponse({
                code: "NAME_TOO_SHORT",
                field: "name_input",
            });
        } else if (trimmedLabelName.length > 16) {
            updateResponse({
                code: "NAME_TOO_LONG",
                field: "name_input",
            });
        } else if (labelToBeEdited !== null && labelToBeEdited.name === newLabel.name && labelToBeEdited.color === newLabel.color) {
            updateResponse({
                code: "NOTHNIG_TO_UPDATE",
                field: "general",
            });
        } else {
            updateResponse({
                code: "NONE",
                field: null,
            });
        }
    }, [_colorsInUse, _labelNamesInUse, labelToBeEdited, newLabel.color, newLabel.name, updateResponse]);

    return response;
}
