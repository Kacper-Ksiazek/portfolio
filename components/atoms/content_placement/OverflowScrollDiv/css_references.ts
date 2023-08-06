// Tools
import { HTMLStructureOrganizer } from "@/utils/client/HTMLStructureOrganizer";

export const { CSS_REFERENCES, SELECTORS } = new HTMLStructureOrganizer({
    alias: "overflow-scroll",
    structure: {
        GENERAL_WRAPPER: {
            ref_value: "main-wrapper",
            ref_type: "CSS_CLASS",
        },
        CONTENT_WRAPPER: {
            ref_value: "content-wrapper",
            ref_type: "CSS_CLASS",
        },
    },
});
