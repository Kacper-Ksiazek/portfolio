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
        const nameHasChanged: boolean = labelToBeEdited !== null && labelToBeEdited.name !== newLabel.name;
        const colorHasChanged: boolean = labelToBeEdited !== null && labelToBeEdited.color !== newLabel.color;

        if (nameHasChanged && _labelNamesInUse.includes(newLabel.name)) {
            updateResponse({
                code: "UNAVAILABLE_LABEL_NAME",
                field: "color_picker",
            });
        } else if (colorHasChanged && _colorsInUse.includes(newLabel.color)) {
            updateResponse({
                code: "UNAVAILABLE_LABEL_COLOR",
                field: "name_input",
            });
        } else if (newLabel.name.length === 0) {
            updateResponse({
                code: "NAME_IS_EMPTY",
                field: "name_input",
            });
        } else if (newLabel.name.length < 3) {
            updateResponse({
                code: "NAME_TOO_SHORT",
                field: "name_input",
            });
        } else if (newLabel.name.length > 16) {
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
