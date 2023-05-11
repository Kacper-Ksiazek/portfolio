// Tools
import { useEffect } from "react";
import { useLabelsContext } from "landing_page/ToDoList2/hooks";
// Types
import type { Color, ValidationResult } from "../@types";
import { useSimpleReducer } from "@/hooks/useSimpleReducer";

/**  */
export function useValidator(newColor: Color): ValidationResult {
    const { labels: _labelsInUse, _colorsInUse } = useLabelsContext();
    const [response, updateResponse] = useSimpleReducer<ValidationResult>({ code: "NONE", field: null });

    useEffect(() => {
        if (_labelsInUse.includes(newColor.name)) {
            updateResponse({
                code: "UNAVAILABLE_LABEL_COLOR",
                field: "color_picker",
            });
        } else if (_colorsInUse.includes(newColor.color)) {
            updateResponse({
                code: "UNAVAILABLE_LABEL_NAME",
                field: "name_input",
            });
        } else if (newColor.name.length < 3) {
            updateResponse({
                code: "NAME_TOO_SHORT",
                field: "name_input",
            });
        } else if (newColor.name.length > 16) {
            updateResponse({
                code: "NAME_TOO_LONG",
                field: "name_input",
            });
        } else {
            updateResponse({
                code: "NONE",
                field: null,
            });
        }
    }, [_colorsInUse, _labelsInUse, newColor.color, newColor.name, updateResponse]);

    return response;
}
