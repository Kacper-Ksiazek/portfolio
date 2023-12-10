// Tools
import { HTMLStructureOrganizer } from "@/utils/client/HTMLStructureOrganizer";

export const { CSS_REFERENCES, SELECTORS } = new HTMLStructureOrganizer({
    alias: "footer",
    structure: {
        MAIN_FOOTER_WRAPPER: {
            ref_value: "mainwrapper",
        },
        AUTHOR_NAME: {
            ref_value: "author-name",
        },
        YEARS: {
            ref_value: "years",
        },
        SINGLE_REDIRECTION: {
            ref_value: "single-redirection",
            ref_type: "CSS_CLASS",
        },
        REDIRECTIONS_DIVIDER: {
            ref_value: "redirections-divider",
            ref_type: "CSS_CLASS",
        },
        SINGLE_SOCIAL_MEDIAL_ICON: {
            ref_value: "single-social-media-icon",
            ref_type: "CSS_CLASS",
        },
    },
});
