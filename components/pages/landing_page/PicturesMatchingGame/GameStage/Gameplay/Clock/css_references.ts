// Tools
import { HTMLStructureOrganizer } from "@/utils/client/HTMLStructureOrganizer";

export const { CSS_REFERENCES, SELECTORS } = new HTMLStructureOrganizer({
    alias: "pictures-matching-progress-wrapper-clock",
    structure: {
        WRAPPER: {
            ref_value: "wrapper",
        },
        MOVES_COUNTER: {
            ref_value: "moves-counter",
        },
        TIMER: {
            ref_value: "timer",
        },
        DIFFICULTY: {
            ref_value: "difficulty",
        },
    },
});
