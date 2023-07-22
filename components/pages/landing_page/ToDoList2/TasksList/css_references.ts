// Tools
import { HTMLStructureOrganizer } from "@/utils/client/HTMLStructureOrganizer";

export const SINGLE_TASK_STAGES = {
    CHECKED: "is-checked",
    DELETING: "is-deleting",
    URGENT: "is-urgent",
    IN_EDIT_MODE: "is-in-edit-mode",
};

export const { CSS_REFERENCES, SELECTORS } = new HTMLStructureOrganizer({
    alias: "to-do-list--tasks-list",
    structure: {
        TASK_LIST_WRAPPER: {
            ref_value: "wrapper",
        },
        SINGLE_TASK: {
            LABEL: {
                ref_value: "label",
                ref_type: "CSS_CLASS",
            },
            DUE_DATE: {
                ref_value: "due-date",
                ref_type: "CSS_CLASS",
            },
            DESCRIPTION: {
                ref_value: "description",
                ref_type: "CSS_CLASS",
            },
            CHECK_ICON: {
                ref_value: "check-icon",
                ref_type: "CSS_CLASS",
            },
            BACKGROUND: {
                ref_value: "background",
                ref_type: "CSS_CLASS",
            },
            LABELS_WRAPPER: {
                ref_value: "labels-wrapper",
                ref_type: "CSS_CLASS",
            },
        },
    },
});
