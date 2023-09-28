// Tools
import { HTMLStructureOrganizer } from "@/utils/client/HTMLStructureOrganizer";

export const { CSS_REFERENCES, SELECTORS } = new HTMLStructureOrganizer({
    alias: "landing-page-",
    structure: {
        INTRODUCTION_SCREEN: {
            ref_value: "introduction_screen",
        },
        ABOUT_ME: {
            ref_value: "about-me",
        },
        TO_DO_LIST: {
            ref_value: "to-do-list",
        },
        PROJECTS: {
            ref_value: "projects",
        },
        PICTURES_MATCHING_GAME: {
            ref_value: "pictures-matching-game",
        },
        CONTACT_ME: {
            ref_value: "contact-me",
        },
    },
});
