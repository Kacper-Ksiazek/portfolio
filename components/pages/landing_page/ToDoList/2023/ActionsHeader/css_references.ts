// Tools
import { HTMLStructureOrganizer } from "@/utils/client/HTMLStructureOrganizer";

export const { CSS_REFERENCES, SELECTORS } = new HTMLStructureOrganizer({
    alias: "to-do-list--actions-header",
    structure: {
        ACTIONS_HEADER_WRAPPER: {
            ref_value: "wrapper",
        },
        HIDE_BUTTON: {
            ref_value: "hide-button",
        },
    },
});
