// Tools
import { HTMLStructureOrganizer } from "@/utils/client/HTMLStructureOrganizer";

export const { CSS_REFERENCES, SELECTORS } = new HTMLStructureOrganizer({
    alias: "to-do-list--tasks-list--single-task--edit-mode",
    structure: {
        TITLE: {
            ref_value: "title",
            ref_type: "CSS_CLASS",
        },
        DESCRIPTION: {
            ref_value: "description",
            ref_type: "CSS_CLASS",
        },
        URGENCY_SWITCH: {
            ref_value: "urgency-switch",
            ref_type: "CSS_CLASS",
        },
        DUE_DATE: {
            ref_value: "due-date",
            ref_type: "CSS_CLASS",
        },
        DUE_TIME: {
            ref_value: "due-time",
            ref_type: "CSS_CLASS",
        },
        LABEL_PICKER: {
            ref_value: "label-picker",
            ref_type: "CSS_CLASS",
        },
        LOCALIZATION: {
            ref_value: "localization",
            ref_type: "CSS_CLASS",
        },
    },
});
