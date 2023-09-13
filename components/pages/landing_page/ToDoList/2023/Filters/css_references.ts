// Tools
import { HTMLStructureOrganizer } from "@/utils/client/HTMLStructureOrganizer";

export const { CSS_REFERENCES, SELECTORS } = new HTMLStructureOrganizer({
    alias: "to-do-list--filters",
    structure: {
        MAIN_WRAPPER: {
            ref_value: "main-wrapper",
        },
        INTRO_ANIMATION_ELEMENT: {
            ref_value: "intro-animation-element",
            ref_type: "CSS_CLASS",
        },

        AMOUNT_OF_TASKS: {
            ref_value: "amount-of-tasks",
        },
        SELECT: {
            LABEL: {
                ref_value: "select-label",
            },
            URGENCY_FILTER: {
                ref_value: "select-urgency-filter",
            },
            ORDER: {
                ref_value: "select-order",
            },
            COMPLETION_FILTER: {
                ref_value: "select-completion",
            },
        },
    },
});
