// Tools
import { repeat } from "@/utils/client/styled/repeat";
import { repeatForEachSelector, getAnimationsBasedOnSide } from "./utils";
import { SELECTORS, PROJECT_CARD_ELEMENTS_CONTENTS } from "../_css_references";
import { fadeSimple, hidePseudoElement, rectangles, scale, timeline } from "./_keyframes";
// Types
import type { Side } from "./@types";
import type { Styles } from "@/@types/MUI";
import type { SxProps } from "@mui/material";

function generateLineAnimations(side: Side): Styles {
    const { content, thumbnail } = getAnimationsBasedOnSide(side);

    return {
        // Thumbnail picture animation
        [`${SELECTORS.THUMBNAIL}::after`]: {
            animation: `${thumbnail.intro} .3s .7s linear both, ${thumbnail.outro} .3s 1.1s forwards linear`,
        },
        // Text content
        ".single-project-text-content-wrapper": repeatForEachSelector(Object.values(SELECTORS.PROJECT_CARD), (index) => {
            const diff = index * 0.05;
            return {
                "&::after": {
                    animation: `${content.intro} .2s ${1.4 + diff}s linear both, ${content.outro} .4s ${1.7 + diff}s forwards linear`,
                },
            };
        }),
    };
}

export default {
    [SELECTORS.YEAR_DIGIT]: repeat(4, (index) => ({
        [`&:nth-of-type(${index + 1})`]: {
            animation: `${fadeSimple} .2s ${0.9 + index * 0.3}s both linear`,
        },
    })),

    "&:not(&.first-row)": {
        "&::after": {
            animation: `${hidePseudoElement} .001s 2.4s both linear`,
        },

        ".project-card": {
            "&::before": {
                animation: `${scale.intro.fromTop} .4s 2s both ease-out`,
            },
            // Elements on left side
            "&.even": generateLineAnimations("left"),
            // Elements on right side
            "&.odd": generateLineAnimations("right"),

            ".thumbnail-wrapper": {
                ".direct-img-wrapper, .border-shape": {
                    animation: `${fadeSimple} .001s 1s both`,
                },
            },
            ".single-project-text-content-wrapper": {
                ...repeatForEachSelector(PROJECT_CARD_ELEMENTS_CONTENTS, (index) => ({
                    animation: `${fadeSimple} .001s ${1.6 + index * 0.05}s both`,
                })),

                [SELECTORS.PROJECT_CARD.REDIRECTIONS]: {
                    a: {
                        animation: `${fadeSimple} .3s ${2}s both`,
                    },
                },
            },
        },

        [SELECTORS.TIMELINE.CORE]: {
            "&::before": {
                animation: `${timeline.coreEntire} .25s both linear`,
            },
            "&.last-project": {
                "&::before": {
                    animation: `${timeline.coreHalf} .25s both linear`,
                },
            },
            [SELECTORS.TIMELINE.CONNECTION]: {
                "&::before": {
                    animation: `${timeline.connection} .2s .25s both linear`,
                },
                "&.even": {
                    [SELECTORS.TIMELINE.LEFT_DOT]: {
                        animation: `${fadeSimple} .2s .65s both linear`,
                    },
                    [SELECTORS.TIMELINE.RIGHT_DOT]: {
                        animation: `${fadeSimple} .2s .45s both linear`,
                    },
                },
                "&.odd": {
                    [SELECTORS.TIMELINE.LEFT_DOT]: {
                        animation: `${fadeSimple} .2s .45s both linear`,
                    },
                    [SELECTORS.TIMELINE.RIGHT_DOT]: {
                        animation: `${fadeSimple} .2s .65s both linear`,
                    },
                },
            },
        },
    },
    "&.first-row": {
        "&::after": {
            animation: `${hidePseudoElement} .001s 3.2s both linear`,
        },

        ".project-card": {
            "&::before": {
                animation: `${scale.intro.fromTop} .4s 2.8s both ease-out`,
            },

            [SELECTORS.INTRO_BAR_ANIMATIONS.SECONDARY]: {
                animation: `${rectangles.intro.firstProject} .5s linear both, ${rectangles.outro.firstProject} .5s 1s linear forwards`,
            },
            [SELECTORS.INTRO_BAR_ANIMATIONS.PRIMARY]: {
                animation: `${rectangles.intro.firstProject} .5s .1s linear both, ${rectangles.outro.firstProject} .5s .9s linear forwards`,
            },

            [`${SELECTORS.THUMBNAIL}::after`]: {
                animation: `${rectangles.intro.leftSide} .3s 1.5s linear both, ${scale.outro.toLeft} .3s 1.9s forwards linear`,
            },
            // Text content
            ".thumbnail-wrapper": {
                ".direct-img-wrapper, .border-shape": {
                    animation: `${fadeSimple} .001s 1.85s both`,
                },
            },
            ".single-project-text-content-wrapper": {
                ...repeatForEachSelector(Object.values(SELECTORS.PROJECT_CARD), (index) => {
                    const diff = index * 0.05;
                    return {
                        "&::after": {
                            animation: `${scale.intro.fromRight} .2s ${2.1 + diff}s linear both, ${rectangles.outro.leftSide} .4s ${2.4 + diff}s forwards linear`,
                        },
                    };
                }),
                ...repeatForEachSelector(PROJECT_CARD_ELEMENTS_CONTENTS, (index) => ({
                    animation: `${fadeSimple} .001s ${2.3 + index * 0.05}s both`,
                })),

                [SELECTORS.PROJECT_CARD.REDIRECTIONS]: {
                    a: {
                        animation: `${fadeSimple} .3s ${2}s both`,
                    },
                },
            },
        },
        [SELECTORS.TIMELINE.CORE]: {
            "&.first-project": {
                "&::before": {
                    top: "50%",
                    animation: `${timeline.coreHalf} .3s 2s both linear`,
                },
            },
            [SELECTORS.TIMELINE.CONNECTION]: {
                "&::before": {
                    right: "auto",
                    left: "0",
                    animation: `${timeline.connection} .2s 1.4s both linear`,
                },
                [SELECTORS.TIMELINE.LEFT_DOT]: {
                    animation: `${fadeSimple} .2s 1.6s both linear !important`,
                },
                [SELECTORS.TIMELINE.RIGHT_DOT]: {
                    animation: `${fadeSimple} .2s 1.8s both linear !important`,
                },
            },
        },
    },

    "&.last-row": {
        [SELECTORS.TIMELINE.CONNECTION]: {
            "&::before": {
                animation: `${timeline.connection} .2s .4s both linear !important`,
            },
            [SELECTORS.TIMELINE.LEFT_DOT]: {
                animation: `${fadeSimple} .2s .6s both linear !important`,
            },
            [SELECTORS.TIMELINE.RIGHT_DOT]: {
                animation: `${fadeSimple} .2s .2s both linear !important`,
            },
        },
    },
} as SxProps;
