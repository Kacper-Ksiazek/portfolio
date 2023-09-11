// Tools
import { HTMLStructureOrganizer } from "@/utils/client/HTMLStructureOrganizer";

export const { CSS_REFERENCES, SELECTORS } = new HTMLStructureOrganizer({
    alias: "dark-content-wrapper-header",
    structure: {
        ICON: {
            ref_value: "icon",
            ref_type: "CSS_CLASS",
        },
        DIVIDER: {
            ref_value: "divider",
            ref_type: "CSS_CLASS",
        },
        MAIN_HEADER: {
            ref_value: "main-header",
            ref_type: "CSS_CLASS",
        },
        SUB_HEADER: {
            ref_value: "sub-header",
            ref_type: "CSS_CLASS",
        },
        DESCRIPTION: {
            ref_value: "description",
            ref_type: "CSS_CLASS",
        },
    },
});
