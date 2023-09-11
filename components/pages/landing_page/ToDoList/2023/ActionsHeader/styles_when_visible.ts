// Tools
import { keyframes } from "@mui/material";
import { repeat } from "@/utils/client/styled/repeat";
import { chainAnimations } from "@/utils/client/styled/chainAnimations";
import { fadeSimple, scaleFromLeft } from "@/components/keyframes/intro";
// Selectors
import { SELECTORS as ACTIONS_HEADER } from "./css_references";
import { SELECTORS as NAVIGATION } from "components/atoms/NavigationBetweenSections/css_references";
// Types
import { SxPropsFn } from "@/@types/MUI";
import { scaleToBottom } from "@/components/keyframes/outro";

const fadeSimple2 = keyframes({
    from: {
        transform: "rotate(10deg) scaleX(0)",
    },
    to: {
        transform: "rotate(10deg) scaleX(1)",
    },
});

const backgroundKeptTreansparent = keyframes({
    from: {
        background: "transparent",
    },
    to: {
        background: "transparent",
    },
});

export const stylesWhenVisible: SxPropsFn = function (theme) {
    return {
        [ACTIONS_HEADER.ACTIONS_HEADER_WRAPPER]: {
            // animation: `${scaleFromLeft} .5s .1s ease-in-out both`,
            [NAVIGATION.STEP_WRAPPER]: {
                ...repeat(3, (index) => ({
                    [`${NAVIGATION.DIVIDER}`]: {
                        animation: `${fadeSimple2} .3s ${1.5 + index * 0.2}s both linear !important`,
                    },
                    [`${NAVIGATION.STEP_BUTTON}`]: {
                        animation: `${backgroundKeptTreansparent} ${0.9 + index * 0.2}s linear`,
                        "&::after": {
                            animation: chainAnimations([
                                [scaleFromLeft, 0.3, 0.6 + index * 0.3],
                                [scaleToBottom, 0.3, 0.3],
                            ]),
                        },
                        "&>*": {
                            animation: `${fadeSimple} .00001s ${1 + index * 0.2}s both`,
                        },
                    },
                })),
            },
            [ACTIONS_HEADER.HIDE_BUTTON]: {
                animation: `${fadeSimple} .3s 1.5s both linear`,
            },
            [NAVIGATION.STEP_BUTTON]: {
                position: "relative",
                "&::after": {
                    content: "''",
                    ...theme.mixins.absolute_full,
                    zIndex: 1,
                    background: theme.palette.background.lightAnimationBar,
                },
            },
            // "&>*": {
            //     visibility: "hidden",
            // },
        },
    };
};
