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
        CONTENT: {
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
            PIECE_OF_CONTENT_WRAPPER: {
                ref_value: "small-content-wrapper",
                ref_type: "CSS_CLASS",
            },
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

export const VIEW_MODE_SELECTORS = SELECTORS.CONTENT.VIEW_MODE;
export const VIEW_MODE_CSS_REFERENCES = CSS_REFERENCES.CONTENT.VIEW_MODE;
