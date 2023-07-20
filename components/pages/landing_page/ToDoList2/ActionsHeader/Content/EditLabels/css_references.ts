// Tools
import { HTMLStructureOrganizer } from "@/utils/client/HTMLStructureOrganizer";
import { CSS_REFERENCES as OverflowScrollDivRefs } from "@/components/atoms/content_placement/OverflowScrollDiv/css_references";

export const { CSS_REFERENCES, SELECTORS } = new HTMLStructureOrganizer({
    alias: "to-do-list--actions-header--edit-labels",
    structure: {
        LABELS_LIST: {
            MAIN_WRAPPER: {
                ref_value: "labels-list-wrapper",
            },
            CONTENT_WRAPPER: {
                ref_value: OverflowScrollDivRefs.CONTENT_WRAPPER,
                ref_type: "CSS_CLASS",
                skipAlias: true,
            },
        },
        TABLE: {
            INDEX: {
                ref_value: "table-row-index",
                ref_type: "CSS_CLASS",
            },
            LABEL_NAME: {
                ref_value: "table-row-label-name",
                ref_type: "CSS_CLASS",
            },
            PROGRESS_BAR: {
                ref_value: "table-row-progress-bar",
                ref_type: "CSS_CLASS",
            },
            BUTTONS: {
                WRAPPER: {
                    ref_value: "table-row-buttons-wrapper",
                    ref_type: "CSS_CLASS",
                },
                SINGLE: {
                    TEXT: {
                        ref_value: "table-row-single-button-text",
                        ref_type: "CSS_CLASS",
                    },
                    ICON: {
                        ref_value: "table-row-single-button-icon",
                        ref_type: "CSS_CLASS",
                    },
                },
            },
        },
    },
});
