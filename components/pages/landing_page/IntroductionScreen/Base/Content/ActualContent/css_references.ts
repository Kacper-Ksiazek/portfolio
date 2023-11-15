// Tools
import { HTMLStructureOrganizer } from "@/utils/client/HTMLStructureOrganizer";

export const { CSS_REFERENCES, SELECTORS } = new HTMLStructureOrganizer({
    alias: "introduction-screen--",
    structure: {
        BIG_CIRCLE: {
            ref_value: "big-circle",
        },
        SMALL_CIRCLE: {
            ref_value: "small-circle",
        },
    },
});
