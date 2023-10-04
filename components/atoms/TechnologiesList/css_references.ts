// Tools
import { HTMLStructureOrganizer } from "@/utils/client/HTMLStructureOrganizer";

export const { CSS_REFERENCES, SELECTORS } = new HTMLStructureOrganizer({
    alias: "atoms-technologies-list",
    structure: {
        WRAPPER: {
            ref_value: "wrapper",
            ref_type: "CSS_CLASS",
        },
        SINGLE_TECHNOLOGY: {
            ref_value: "single-technology",
            ref_type: "CSS_CLASS",
        },
        NO_MORE_TECHNOLOGIES_THREE_DOTS: {
            ref_value: "no-more-technologies-three-dots",
            ref_type: "CSS_CLASS",
        },
    },
});
