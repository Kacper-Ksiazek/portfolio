// Tools
import { HTMLStructureOrganizer } from "@/utils/client/HTMLStructureOrganizer";
import { LABEL_PICKER_SELECT_CLASS_NAME, LABEL_PICKER_ADD_LABEL_BUTTON_CLASS_NAME } from "../../../atoms/modifiers/LabelPicker/css_references";

export const { CSS_REFERENCES, SELECTORS } = new HTMLStructureOrganizer({
    alias: "to-do-list--actions-header--add-new-task",
    structure: {
        URGENCY_SWITCH: {
            ref_value: "urgency-switch",
        },
        TITLE_INPUT: {
            ref_value: "title-input",
        },
        DESCRIPTION_INPUT: {
            ref_value: "description",
        },
        DUE_DATE_PICKER: {
            ref_value: "due-date-picker",
        },
        DUE_TIME_PICKER: {
            ref_value: "due-time-picker",
        },
        LOCALIZATION_INPUT: {
            ref_value: "localization-input",
        },
        LABEL_PICKER: {
            SELECT: {
                ref_type: "CSS_CLASS",
                skipAlias: true,
                ref_value: LABEL_PICKER_SELECT_CLASS_NAME,
            },
            ADD_NEW_TASK_BUTTON: {
                ref_type: "CSS_CLASS",
                skipAlias: true,
                ref_value: LABEL_PICKER_ADD_LABEL_BUTTON_CLASS_NAME,
            },
        },

        ADDITIONAL_INFORMATION_WRAPPER: {
            ref_value: "additional-information-wrapper",
        },

        BUTTONS: {
            WRAPPER: {
                ref_value: "actions-wrapper",
            },

            HIDE_PANEL: {
                ref_value: "hide-panel-switch",
            },
            ADD_NEW_TASK: {
                ref_value: "add-new-task-btn",
            },
        },
    },
});
