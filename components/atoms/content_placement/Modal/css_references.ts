// Tools
import { HTMLStructureOrganizer } from "@/utils/client/HTMLStructureOrganizer";

export const { CSS_REFERENCES, SELECTORS } = new HTMLStructureOrganizer({
    alias: "atoms-modal",
    structure: {
        HEADER: {
            ref_value: "header",
            ref_type: "CSS_CLASS",
        },
        BUTTON: {
            ref_value: "button",
            ref_type: "CSS_CLASS",
        },
    },
});
