// Tools
import { repeat } from "@/utils/client/styled/repeat";
import { getAnimationsBasedOnSide, repeatForEachSelector } from "./utils";
import { SELECTORS, PROJECT_CARD_ELEMENTS_CONTENTS, PROJECT_CARD_ELEMENTS } from "../css_references";
import { fadeSimple, hidePseudoElement, rectangles, scale } from "./_keyframes";
// Types
import type { Side } from "./@types";
import type { Styles } from "@/@types/MUI";
import type { SxProps } from "@mui/material";
import { chainAnimations } from "@/utils/client/styled/chainAnimations";

function generateLineAnimations(side: Side): Styles {
    const { content, thumbnail } = getAnimationsBasedOnSide(side);

    return {
        // Thumbnail picture animation
        [`${SELECTORS.THUMBNAIL.WRAPPER}::after`]: {
            animation: chainAnimations([
                [thumbnail.intro, 0.3, 0],
                [thumbnail.outro, 0.3, 0.1],
            ]),
        },
        // Text content
        [SELECTORS.PROJECT_CARD.TEXT_CONTENT_WRAPPER]: {
            ...repeatForEachSelector(PROJECT_CARD_ELEMENTS, (index) => {
                const diff = index * 0.05;
                return {
                    "&::after": {
                        animation: chainAnimations([
                            [content.intro, 0.2, 0.4 + diff],
                            [content.outro, 0.4, 0.1],
                        ]),
                    },
                };
            }),
            ...repeatForEachSelector(PROJECT_CARD_ELEMENTS_CONTENTS, (index) => ({
                animation: `${fadeSimple} .001s ${0.8 + index * 0.05}s both`,
            })),

            [SELECTORS.PROJECT_CARD.REDIRECTIONS + " a"]: {
                animation: `${fadeSimple} .3s ${0.9}s both`,
            },
        },
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

        // Elements on left side
        "&.even": generateLineAnimations("left"),
        // Elements on right side
        "&.odd": generateLineAnimations("right"),

        [SELECTORS.THUMBNAIL.WRAPPER]: {
            [SELECTORS.THUMBNAIL.CONTENT._EVERY]: {
                animation: `${fadeSimple} .001s .35s both`,
            },
        },

        [SELECTORS.PROJECT_CARD.WRAPPER]: {
            "&::before": {
                animation: `${scale.intro.fromTop} .4s 1.4s both ease-out`,
            },
        },
    },

    "&.first-row": {
        "&::after": {
            animation: `${hidePseudoElement} .001s 2.8s both linear`,
        },

        [SELECTORS.THUMBNAIL.WRAPPER]: {
            "&::after": {
                animation: chainAnimations([
                    [rectangles.intro.leftSide, 0.3, 0.2], //
                    [scale.outro.toLeft, 0.3, 0.1],
                ]),
            },

            [SELECTORS.THUMBNAIL.CONTENT._EVERY]: {
                animation: `${fadeSimple} .001s .55s both`,
            },
        },

        [SELECTORS.PROJECT_CARD.WRAPPER]: {
            "&::before": {
                animation: `${scale.intro.fromTop} .4s 2.8s both ease-out`,
            },

            [SELECTORS.PROJECT_CARD.TEXT_CONTENT_WRAPPER]: {
                ...repeatForEachSelector(PROJECT_CARD_ELEMENTS, (index) => {
                    const diff = index * 0.05;
                    return {
                        "&::after": {
                            animation: chainAnimations([
                                [scale.intro.fromRight, 0.2, 0.4 + diff],
                                [rectangles.outro.leftSide, 0.3, 0.2],
                            ]),
                        },
                    };
                }),
                ...repeatForEachSelector(PROJECT_CARD_ELEMENTS_CONTENTS, (index) => ({
                    animation: `${fadeSimple} .001s ${0.7 + index * 0.05}s both`,
                })),

                [SELECTORS.PROJECT_CARD.REDIRECTIONS]: {
                    "&::after": {
                        animation: chainAnimations([
                            [scale.intro.fromRight, 0.2, 2.7],
                            [rectangles.outro.leftSide, 0.4, 0.2],
                        ]),
                    },
                    a: {
                        animation: `${fadeSimple} .3s ${3}s both`,
                    },
                },
            },
        },
    },
} as SxProps;
