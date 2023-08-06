// Tools
import { HTMLStructureOrganizer } from "@/utils/client/HTMLStructureOrganizer";

export const { CSS_REFERENCES, SELECTORS } = new HTMLStructureOrganizer({
    alias: "to-do-list--filters",
    structure: {
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
