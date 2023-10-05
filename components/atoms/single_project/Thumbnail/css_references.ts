// Tools
import { HTMLStructureOrganizer } from "@/utils/client/HTMLStructureOrganizer";

export const { CSS_REFERENCES, SELECTORS } = new HTMLStructureOrganizer({
    alias: "atom-thumbnail",
    structure: {
        WRAPPER: {
            ref_value: "wrapper",
            ref_type: "CSS_CLASS",
        },
        CONTENT: {
            DIRECT_IMG_WRAPPER: {
                ref_value: "direct-img-wrapper",
                ref_type: "CSS_CLASS",
            },
            BORDER_SHAPE: {
                ref_value: "border-shape",
                ref_type: "CSS_CLASS",
            },
        },
    },
});
