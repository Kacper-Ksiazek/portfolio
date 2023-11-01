// Tools
import { HTMLStructureOrganizer } from "@/utils/client/HTMLStructureOrganizer";
import { CSS_REFERENCES as TECHNOLOGIES_LIST } from "components/atoms/TechnologiesList/css_references";
// Other structures
import { CSS_REFERENCES as THUMBNAIL_CSS_REFERENCES } from "components/atoms/single_project/Thumbnail/css_references";

export const { CSS_REFERENCES, SELECTORS } = new HTMLStructureOrganizer({
    alias: "single-project-row",
    structure: {
        YEAR_DIGIT: {
            ref_value: "year-indicator-digit",
            ref_type: "CSS_CLASS",
        },
        THUMBNAIL: {
            WRAPPER: {
                ref_value: THUMBNAIL_CSS_REFERENCES.WRAPPER,
                ref_type: "CSS_CLASS",
                skipAlias: true,
            },
            CONTENT: {
                DIRECT_IMG_WRAPPER: {
                    ref_value: THUMBNAIL_CSS_REFERENCES.CONTENT.DIRECT_IMG_WRAPPER,
                    ref_type: "CSS_CLASS",
                    skipAlias: true,
                },
                BORDER_SHAPE: {
                    ref_value: THUMBNAIL_CSS_REFERENCES.CONTENT.BORDER_SHAPE,
                    ref_type: "CSS_CLASS",
                    skipAlias: true,
                },
            },
        },
        PROJECT_CARD: {
            WRAPPER: {
                ref_value: "project-card-wrapper",
                ref_type: "CSS_CLASS",
            },
            TEXT_CONTENT_WRAPPER: {
                ref_value: "text-content-wrapper",
                ref_type: "CSS_CLASS",
            },
            TECHNOLOGIES: {
                ref_value: TECHNOLOGIES_LIST.WRAPPER,
                ref_type: "CSS_CLASS",
                skipAlias: true,
            },
            PROJECT_TYPE: {
                ref_value: "project-type",
                ref_type: "CSS_CLASS",
            },
            TITLE: {
                ref_value: "project-title",
                ref_type: "CSS_CLASS",
            },
            DESCRIPTION: {
                ref_value: "project-description",
                ref_type: "CSS_CLASS",
            },
            DURATION: {
                ref_value: "duration",
                ref_type: "CSS_CLASS",
            },
            REDIRECTIONS: {
                ref_value: "redirections",
                ref_type: "CSS_CLASS",
            },
        },
        INTRO_BAR_ANIMATIONS: {
            PRIMARY: {
                ref_value: "intro-bar-primary",
                ref_type: "CSS_CLASS",
            },
            SECONDARY: {
                ref_value: "intro-bar-secondary",
                ref_type: "CSS_CLASS",
            },
        },
        TIMELINE: {
            CORE: {
                ref_value: "timeline-core",
                ref_type: "CSS_CLASS",
            },
            CONNECTION: {
                ref_value: "timeline-connection",
                ref_type: "CSS_CLASS",
            },
            LEFT_DOT: {
                ref_value: "left-dot",
                ref_type: "CSS_CLASS",
            },
            RIGHT_DOT: {
                ref_value: "right-dot",
                ref_type: "CSS_CLASS",
            },
        },
    },
});

/** Selectors in proper order to match animations sequence */
export const PROJECT_CARD_ELEMENTS_CONTENTS: string[] = [
    `${SELECTORS.PROJECT_CARD.TECHNOLOGIES}>*`,
    `${SELECTORS.PROJECT_CARD.PROJECT_TYPE}>*`,
    `${SELECTORS.PROJECT_CARD.TITLE}>*`,
    `${SELECTORS.PROJECT_CARD.DURATION}>*`,
    `${SELECTORS.PROJECT_CARD.DESCRIPTION}>*`,
];

export const PROJECT_CARD_ELEMENTS: string[] = [
    SELECTORS.PROJECT_CARD.TECHNOLOGIES,
    SELECTORS.PROJECT_CARD.PROJECT_TYPE,
    SELECTORS.PROJECT_CARD.TITLE,
    SELECTORS.PROJECT_CARD.DURATION,
    SELECTORS.PROJECT_CARD.DESCRIPTION,
    SELECTORS.PROJECT_CARD.REDIRECTIONS,
];
