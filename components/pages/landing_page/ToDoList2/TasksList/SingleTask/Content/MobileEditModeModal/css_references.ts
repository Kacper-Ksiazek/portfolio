// Tools
import { HTMLStructureOrganizer } from "@/utils/client/HTMLStructureOrganizer";
import { LABEL_PICKER_ADD_LABEL_BUTTON_CLASS_NAME, LABEL_PICKER_SELECT_CLASS_NAME } from "landing_page/ToDoList2/atoms/modifiers/LabelPicker";

export const { CSS_REFERENCES, SELECTORS } = new HTMLStructureOrganizer({
    alias: "to-do-list--single-task--mobile-edit-mode",
    structure: {
        DESCRIPTION_INPUT: {
            ref_value: "description-input",
            ref_type: "CSS_CLASS",
        },
        DATE_PICKER: {
            ref_value: "date-picker",
            ref_type: "CSS_CLASS",
        },
        URGENCY_SWITCH: {
            ref_value: "urgency-switch",
            ref_type: "CSS_CLASS",
        },
        LABEL_PICKER_SELECT: {
            ref_value: LABEL_PICKER_SELECT_CLASS_NAME,
            ref_type: "CSS_CLASS",
            skipAlias: true,
        },
        LABEL_PICKER_ADD_LABEL_BTN: {
            ref_value: LABEL_PICKER_ADD_LABEL_BUTTON_CLASS_NAME,
            ref_type: "CSS_CLASS",
            skipAlias: true,
        },
    },
});
