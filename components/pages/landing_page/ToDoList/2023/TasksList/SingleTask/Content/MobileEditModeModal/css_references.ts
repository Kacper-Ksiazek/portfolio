// Tools
import { HTMLStructureOrganizer } from "@/utils/client/HTMLStructureOrganizer";

export const { CSS_REFERENCES, SELECTORS } = new HTMLStructureOrganizer({
    alias: "to-do-list--single-task--mobile-edit-mode",
    structure: {
        TITLE_INPUT: {
            ref_value: "title-input",
            ref_type: "CSS_CLASS",
        },
        DESCRIPTION_INPUT: {
            ref_value: "description-input",
            ref_type: "CSS_CLASS",
        },
        DATE_PICKER: {
            ref_value: "date-picker",
            ref_type: "CSS_CLASS",
        },
        DUE_TIME_PICKER: {
            ref_value: "time-picker",
            ref_type: "CSS_CLASS",
        },
        URGENCY_SWITCH: {
            ref_value: "urgency-switch",
            ref_type: "CSS_CLASS",
        },
        LABEL_PICKER: {
            ref_value: "label-picker",
            ref_type: "CSS_CLASS",
        },
        LOCALIZATION_PICKER: {
            ref_value: "localization-picker",
            ref_type: "CSS_CLASS",
        },
    },
});
