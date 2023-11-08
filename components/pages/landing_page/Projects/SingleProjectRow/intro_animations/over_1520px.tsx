// Tools
import { repeat } from "@/utils/client/styled/repeat";
import { chainAnimations } from "@/utils/client/styled/chainAnimations";
import { repeatForEachSelector, getAnimationsBasedOnSide } from "./utils";
import { fadeSimple, hidePseudoElement, rectangles, scale, timeline } from "./_keyframes";
import { SELECTORS, PROJECT_CARD_ELEMENTS_CONTENTS, PROJECT_CARD_ELEMENTS } from "../css_references";
// Types
import type { Side } from "./@types";
import type { Styles } from "@/@types/MUI";
import type { SxProps } from "@mui/material";

function generateLineAnimations(side: Side): Styles {
    const { content, thumbnail } = getAnimationsBasedOnSide(side);

    return {
        // Thumbnail picture animation
        [`${SELECTORS.THUMBNAIL.WRAPPER}`]: {
            "&::after": {
                animation: chainAnimations([
                    [thumbnail.intro, 0.3, 0.5],
                    [thumbnail.outro, 0.2, 0.1],
                ]),
            },

            [SELECTORS.THUMBNAIL.CONTENT._EVERY]: {
                animation: `${fadeSimple} .001s .85s both`,
            },
        },
        // Text content
        [SELECTORS.PROJECT_CARD.TEXT_CONTENT_WRAPPER]: {
            // Handle lines animations
            ...repeatForEachSelector(Object.values(PROJECT_CARD_ELEMENTS), (index) => {
                const diff = index * 0.05;
                return {
                    "&::after": {
                        animation: chainAnimations([
                            [content.intro, 0.18, 1 + diff],
                            [content.outro, 0.22, 0.2],
                        ]),
                    },
                };
            }),

            // Change visibility of the actual content
            ...repeatForEachSelector(PROJECT_CARD_ELEMENTS_CONTENTS, (index) => ({
                animation: `${fadeSimple} .001s ${1.3 + index * 0.05}s both`,
            })),

            // Animate redirections separately
            [SELECTORS.PROJECT_CARD.REDIRECTIONS + " a"]: {
                animation: `${fadeSimple} .3s ${1.4}s both`,
            },
        },
    };
}

export default {
    [SELECTORS.YEAR_DIGIT]: repeat(4, (index) => ({
        [`&:nth-of-type(${index + 1})`]: {
            animation: `${fadeSimple} .2s ${0.7 + index * 0.2}s both linear`,
        },
    })),

    "&:not(&.first-row)": {
        "&::after": {
            animation: `${hidePseudoElement} .001s 2s both linear`,
        },

        // Elements on left side
        "&.even": generateLineAnimations("left"),
        // Elements on right side
        "&.odd": generateLineAnimations("right"),

        [SELECTORS.PROJECT_CARD.WRAPPER]: {
            "&::before": {
                animation: `${scale.intro.fromTop} .4s 1.6s both ease-out`,
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
                        animation: `${fadeSimple} .2s .45s both linear`,
                    },
                    [SELECTORS.TIMELINE.RIGHT_DOT]: {
                        animation: `${fadeSimple} .2s .25s both linear`,
                    },
                },
                "&.odd": {
                    [SELECTORS.TIMELINE.LEFT_DOT]: {
                        animation: `${fadeSimple} .2s .25s both linear`,
                    },
                    [SELECTORS.TIMELINE.RIGHT_DOT]: {
                        animation: `${fadeSimple} .2s .45s both linear`,
                    },
                },
            },
        },
    },
    "&.first-row": {
        "&::after": {
            animation: `${hidePseudoElement} .001s 2s both linear`,
        },

        [SELECTORS.THUMBNAIL.WRAPPER]: {
            "&::after": {
                animation: chainAnimations([
                    [rectangles.intro.leftSide, 0.3, 0], //
                    [scale.outro.toLeft, 0.2, 0.2],
                ]),
            },

            [SELECTORS.THUMBNAIL.CONTENT._EVERY]: {
                animation: `${fadeSimple} .001s .4s both`,
            },
        },

        [SELECTORS.PROJECT_CARD.WRAPPER]: {
            "&::before": {
                animation: `${scale.intro.fromTop} .4s 1.4s both ease-out`,
            },

            [SELECTORS.PROJECT_CARD.TEXT_CONTENT_WRAPPER]: {
                ...repeatForEachSelector(PROJECT_CARD_ELEMENTS, (index) => {
                    const diff = index * 0.05;
                    return {
                        "&::after": {
                            animation: chainAnimations([
                                [scale.intro.fromRight, 0.2, 0.6 + diff],
                                [rectangles.outro.leftSide, 0.3, 0.2],
                            ]),
                        },
                    };
                }),
                ...repeatForEachSelector(PROJECT_CARD_ELEMENTS_CONTENTS, (index) => ({
                    animation: `${fadeSimple} .001s ${0.9 + index * 0.05}s both`,
                })),

                // Redirections have to be overriden
                [SELECTORS.PROJECT_CARD.REDIRECTIONS]: {
                    "&::after": {
                        animation: chainAnimations([
                            [scale.intro.fromRight, 0.2, 2],
                            [rectangles.outro.leftSide, 0.4, 0.2],
                        ]),
                    },
                    a: {
                        animation: `${fadeSimple} .001s ${2.3}s both !important`,
                    },
                },
            },
        },

        [SELECTORS.TIMELINE.CORE]: {
            "&.first-project": {
                "&::before": {
                    top: "50%",
                    animation: `${timeline.coreHalf} .3s 1.3s both linear`,
                },
            },
            [SELECTORS.TIMELINE.CONNECTION]: {
                "&::before": {
                    right: "auto",
                    left: "0",
                    animation: `${timeline.connection} .2s 1.1s both linear`,
                },
                [SELECTORS.TIMELINE.LEFT_DOT]: {
                    animation: `${fadeSimple} .2s .9s both linear !important`,
                },
                [SELECTORS.TIMELINE.RIGHT_DOT]: {
                    animation: `${fadeSimple} .2s 1.2s both linear !important`,
                },
            },
        },
    },

    "&.last-row": {
        [SELECTORS.TIMELINE.CONNECTION]: {
            "&::before": {
                animation: `${timeline.connection} .2s .4s both linear !important`,
            },
        },
    },
} as SxProps;
