// Tools
import { HTMLStructureOrganizer } from "@/utils/client/HTMLStructureOrganizer";

export const SINGLE_TASK_STAGES = {
    CHECKED: "is-checked",
    DELETING: "is-deleting",
    URGENT: "is-urgent",
    IN_EDIT_MODE: "is-in-edit-mode",
};

export const { CSS_REFERENCES, SELECTORS } = new HTMLStructureOrganizer({
    alias: "to-do-list--tasks-list--single-task",
    structure: {
        VIEW_MODE: {
            LABEL: {
                ref_value: "label",
                ref_type: "CSS_CLASS",
            },
            INFORMATION_WITH_ICON: {
                ref_value: "information-with-icon",
                ref_type: "CSS_CLASS",
            },
            DESCRIPTION: {
                ref_value: "description",
                ref_type: "CSS_CLASS",
            },
            LABELS_WRAPPER: {
                ref_value: "labels-wrapper",
                ref_type: "CSS_CLASS",
            },
        },
        // EDIT_MODE:{

        // },
        SMALL_CONTENT_WRAPPER: {
            ref_value: "small-content-wrapper",
            ref_type: "CSS_CLASS",
        },
        COMPLETION_BUTTON: {
            ref_value: "completion-btn",
            ref_type: "CSS_CLASS",
        },
        BACKGROUND: {
            ref_value: "background",
            ref_type: "CSS_CLASS",
        },
    },
});
