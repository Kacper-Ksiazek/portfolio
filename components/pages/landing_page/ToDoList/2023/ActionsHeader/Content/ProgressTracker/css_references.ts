// Tools
import { HTMLStructureOrganizer } from "@/utils/client/HTMLStructureOrganizer";

export const { CSS_REFERENCES, SELECTORS } = new HTMLStructureOrganizer({
    alias: "to-do-list--actions-header--progress-tracker",
    structure: {
        MAIN_WRAPPER: {
            ref_value: "main-wrapper",
        },
        CONTENT_WRAPPER: {
            ref_value: "header",
            ref_type: "CSS_CLASS",
        },
    },
});
