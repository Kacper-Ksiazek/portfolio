// Tools
import { HTMLStructureOrganizer } from "@/utils/client/HTMLStructureOrganizer";

export const { CSS_REFERENCES, SELECTORS } = new HTMLStructureOrganizer({
    alias: "to-do-list--footer",
    structure: {
        RESET_BUTTON: {
            ref_value: "reset-button",
        },
        RELEASES_TOGGLER: {
            ref_value: "releases-toggler",
        },
    },
});
