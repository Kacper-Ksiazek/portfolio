// Tools
import { styled } from "@mui/material";
import { repeat } from "@/utils/client/styled/repeat";
import { numberOfFeatures, thumbnail } from "./keyframes";
import { fadeSimple, fadeFromLeft, fadeFromTop } from "@/components/keyframes/intro";
// Selectors
import { SELECTORS as THUMBNAIL } from "components/atoms/single_project/Thumbnail/css_references";
import { SELECTORS as TECHNOLOGIES_LIST } from "components/atoms/TechnologiesList/css_references";
import { SELECTORS } from "components/pages/projects/single/RecommendedProjects/SingleRecommendedProject/css_references";

// Styled components
export default styled("div")(({ theme }) => {
    return {
        height: "100%",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",

        [THUMBNAIL.WRAPPER]: {
            "&::before, &::after": {
                content: "''",
                zIndex: 5,
                ...theme.mixins.absolute_full,
            },

            "&::after": {
                background: theme.palette.primary.main,
            },
            "&::before": {
                background: theme.palette.secondary.main,
            },
        },
        //
        //* Intro animations
        //
        visibility: "hidden",
        "&.active, &.initial-active": {
            visibility: "visible",

            [SELECTORS.DIVIDER]: {
                animation: `${fadeSimple} .5s 1.5s both`,
            },

            [SELECTORS.DURATION]: {
                animation: `${fadeFromLeft} .3s .9s both`,
            },

            [SELECTORS.TITLE]: {
                animation: `${fadeFromLeft} .3s 1.1s both`,
            },

            [TECHNOLOGIES_LIST.WRAPPER]: {
                [TECHNOLOGIES_LIST.SINGLE_TECHNOLOGY]: {
                    ...repeat(6, (index) => ({
                        [`&:nth-of-type(${index + 1})`]: {
                            animation: `${fadeSimple} .2s ${1.3 + index * 0.1}s both`,
                        },
                    })),
                },
                [TECHNOLOGIES_LIST.NO_MORE_TECHNOLOGIES_THREE_DOTS]: {
                    animation: `${fadeSimple} .2s 1.8s both`,
                },
            },

            [SELECTORS.DESCRIPTION]: {
                animation: `${fadeFromTop} .3s 1.3s both`,
            },

            ".read-more": {
                animation: `${fadeFromLeft} .3s 1.7s both`,
            },

            [THUMBNAIL.WRAPPER]: {
                [`img, ${THUMBNAIL.CONTENT.BORDER_SHAPE}`]: {
                    animation: `${fadeSimple} .01s .9s both`,
                },
                "&::after": {
                    animation: `${thumbnail.fast} 1.1s .3s both linear`,
                },
                "&::before": {
                    animation: `${thumbnail.slow} 1.4s .2s both linear`,
                },

                [SELECTORS.NUMBER_OF_FEATURES]: {
                    "&::before": {
                        animation: `${fadeSimple} .001s 2.3s both`,
                    },
                    "&::after": {
                        animation: `${numberOfFeatures.intro} .6s 2s both linear`,
                    },
                    "span, strong": {
                        animation: `${fadeSimple} .001s 2.3s both linear`,
                    },
                },
            },
        },
    };
});
