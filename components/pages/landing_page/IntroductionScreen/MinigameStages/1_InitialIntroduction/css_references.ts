// Tools
import { HTMLStructureOrganizer } from "@/utils/client/HTMLStructureOrganizer";

export const { CSS_REFERENCES, SELECTORS } = new HTMLStructureOrganizer({
    alias: "introduction-screen",
    structure: {
        MAIN_HEADER: {
            ref_value: "main-header",
        },
        COLORED_SUBHEADER: {
            ref_type: "CSS_CLASS",
            ref_value: "colored-subheader",
        },
        DESCRIPTION: {
            ref_value: "description",
        },
        SCROLL_DOWN_BUTTON: {
            ref_value: "scroll-down-button",
        },
    },
});
