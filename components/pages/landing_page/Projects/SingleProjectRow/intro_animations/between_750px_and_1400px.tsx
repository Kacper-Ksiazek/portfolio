// Tools
import { repeat } from "@/utils/client/styled/repeat";
import { getAnimationsBasedOnSide, repeatForEachSelector } from "./utils";
import { SELECTORS, PROJECT_CARD_ELEMENTS_CONTENTS } from "../_css_references";
import { fadeSimple, hidePseudoElement, rectangles, scale } from "./_keyframes";
// Types
import type { Side } from "./@types";
import type { Styles } from "@/@types/MUI";
import type { SxProps } from "@mui/material";

function generateLineAnimations(side: Side): Styles {
    const { content, thumbnail } = getAnimationsBasedOnSide(side);

    return {
        // Thumbnail picture animation
        [`${SELECTORS.THUMBNAIL}::after`]: {
            animation: `${thumbnail.intro} .3s linear both, ${thumbnail.outro} .3s .4s forwards linear`,
        },
        // Text content
        ".single-project-text-content-wrapper": repeatForEachSelector(Object.values(SELECTORS.PROJECT_CARD), (index) => {
            const diff = index * 0.05;
            return {
                "&::after": {
                    animation: `${content.intro} .2s ${0.7 + diff}s linear both, ${content.outro} .4s ${1 + diff}s forwards linear`,
                },
            };
        }),
    };
}

export default {
    "&::after": {
        animation: `${hidePseudoElement} .001s 4.4s both linear`,
    },

    [SELECTORS.YEAR_DIGIT]: repeat(4, (index) => ({
        [`&:nth-of-type(${index + 1})`]: {
            animation: `${fadeSimple} .2s ${0.9 + index * 0.3}s both linear`,
        },
    })),
    "&:not(&.first-row)": {
        "&::after": {
            animation: `${hidePseudoElement} .001s 1.8s both linear`,
        },

        ".project-card": {
            "&::before": {
                animation: `${scale.intro.fromTop} .4s 1.4s both ease-out`,
            },
            // Elements on left side
            "&.even": generateLineAnimations("left"),
            // Elements on right side
            "&.odd": generateLineAnimations("right"),

            ".thumbnail-wrapper": {
                ".direct-img-wrapper, .border-shape": {
                    animation: `${fadeSimple} .001s .35s both`,
                },
            },
            ".single-project-text-content-wrapper": {
                ...repeatForEachSelector(PROJECT_CARD_ELEMENTS_CONTENTS, (index) => ({
                    animation: `${fadeSimple} .001s ${1 + index * 0.05}s both`,
                })),

                [SELECTORS.PROJECT_CARD.REDIRECTIONS]: {
                    a: {
                        animation: `${fadeSimple} .3s ${1.4}s both`,
                    },
                },
            },
        },
    },

    "&.first-row": {
        "&::after": {
            animation: `${hidePseudoElement} .001s 2.8s both linear`,
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
    },
} as SxProps;
