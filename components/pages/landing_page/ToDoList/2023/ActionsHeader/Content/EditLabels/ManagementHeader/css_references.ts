import { HTMLStructureOrganizer } from "@/utils/client/HTMLStructureOrganizer";

export const { CSS_REFERENCES, SELECTORS } = new HTMLStructureOrganizer({
    alias: "to-do-list--actions-header--edit-labels--management-header",
    structure: {
        WRAPPER: {
            ref_value: "wrapper",
        },
        EMPTY_SPACE_FILLER: {
            ref_value: "empty-space-filler",
        },

        FILTERS: {
            PICK_SORTING_ORDER: {
                ref_value: "pick-sorting-order",
            },
            URGENCY_SWITCH: {
                ref_value: "urgency-switch",
            },
            NOT_USED_ONLY_SWITCH: {
                ref_value: "display-not-used-only-switch",
            },
        },

        BUTTONS: {
            ADD_NEW_LABEL_BUTTON: {
                ref_value: "add-new-label-btn",
            },
            DELETE_UNUSED_LABELS_BUTTON: {
                ref_value: "delete-unused-labels-btn",
            },
        },
    },
});
