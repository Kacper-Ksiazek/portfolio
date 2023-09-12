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
        SINGLE_TASK_WRAPPER: {
            ref_value: "single-task-wrapper",
            ref_type: "CSS_CLASS",
        },
        CONTENT: {
            VIEW_MODE: {
                LABELS_WRAPPER: {
                    ref_value: "labels-wrapper",
                    ref_type: "CSS_CLASS",
                },
                LABEL: {
                    ref_value: "label",
                    ref_type: "CSS_CLASS",
                },
                INFORMATION_WITH_ICON: {
                    ref_value: "information-with-icon",
                    ref_type: "CSS_CLASS",
                },
                TITLE: {
                    ref_value: "description",
                    ref_type: "CSS_CLASS",
                },
                DESCRIPTION: {
                    ref_value: "description",
                    ref_type: "CSS_CLASS",
                },
            },
            MAIN_CONTENT_WRAPPER: {
                ref_value: "content-wrapper",
                ref_type: "CSS_CLASS",
            },
        },
        COMPLETION_BUTTON: {
            ref_value: "completion-btn",
            ref_type: "CSS_CLASS",
        },
        COMPLETION_BUTTON_FANCY_SHAPES: {
            ref_value: "completion-btn-fancy-shapes",
            ref_type: "CSS_CLASS",
        },
        MANAGE_BUTTONS_WRAPPER: {
            ref_value: "manage-btns-wrapper",
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
