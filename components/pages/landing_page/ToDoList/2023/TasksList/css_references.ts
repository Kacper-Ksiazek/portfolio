// Tools
import { HTMLStructureOrganizer } from "@/utils/client/HTMLStructureOrganizer";

export const { CSS_REFERENCES, SELECTORS } = new HTMLStructureOrganizer({
    alias: "to-do-list--tasks-list",
    structure: {
        WRAPPER: {
            ref_value: "wrapper",
        },
    },
});
