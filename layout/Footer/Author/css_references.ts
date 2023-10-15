// Tools
import { HTMLStructureOrganizer } from "@/utils/client/HTMLStructureOrganizer";

export const { CSS_REFERENCES, SELECTORS } = new HTMLStructureOrganizer({
    alias: "footer-author-details--",
    structure: {
        AUTHOR_NAME: {
            ref_value: "author-name",
        },
        YEARS: {
            ref_value: "years",
        },
    },
});
