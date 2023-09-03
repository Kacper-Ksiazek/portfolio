// Tools
import { HTMLStructureOrganizer } from "@/utils/client/HTMLStructureOrganizer";

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
            ref_value: "label-picker",
        },
        OPTIONAL_PROPERTY_EXPLANATION: {
            ref_value: "optional-property-explanation",
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
