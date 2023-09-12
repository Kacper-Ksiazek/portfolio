// Tools
import { keyframes } from "@mui/material";
import { repeat } from "@/utils/client/styled/repeat";
import { chainAnimations } from "@/utils/client/styled/chainAnimations";
// Keyframes
import { fadeSimple, scaleFromBottom, scaleFromLeft, scaleFromTop } from "@/components/keyframes/intro";
import { scaleToBottom, scaleToLeft, scaleToRight } from "@/components/keyframes/outro";
// Selectors
import { SELECTORS as ACTIONS_HEADER } from "./css_references";
import { SELECTORS as PROGRESS_TRACKER } from "./Content/ProgressTracker/css_references";
import { SELECTORS as NAVIGATION } from "components/atoms/NavigationBetweenSections/css_references";
// Types
import { SxPropsFn } from "@/@types/MUI";

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
        //
        // 1. ACTIONS_HEADER
        //
        [ACTIONS_HEADER.ACTIONS_HEADER_WRAPPER]: {
            animation: `${scaleFromLeft} .4s .1s both linear`,
            //
            // 1.1 NAVIGATION:
            // This panel: Progress Tracker / Add new task / Edit Labels --- Hide
            //
            [NAVIGATION.STEP_WRAPPER]: {
                ...repeat(3, (index) => ({
                    [`${NAVIGATION.DIVIDER}`]: {
                        animation: `${fadeSimple2} .3s ${1.5 + index * 0.2}s both linear !important`,
                    },
                    [`${NAVIGATION.STEP_BUTTON}`]: {
                        animation: `${backgroundKeptTreansparent} ${0.9 + index * 0.2}s linear`,
                        "&::after": {
                            animation: chainAnimations([
                                [scaleFromLeft, 0.2, 0.6 + index * 0.3],
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
            //
            // 1.2 Progress Tracker:
            //
            [PROGRESS_TRACKER.MAIN_WRAPPER]: {
                [PROGRESS_TRACKER.CONTENT_WRAPPER]: {
                    position: "relative",
                    "&::after": {
                        content: "''",
                        ...theme.mixins.absolute_full,
                        zIndex: 1,
                        background: theme.palette.background.lightAnimationBar,
                    },
                    "&>*": {
                        animation: `${fadeSimple} .00001s 1.2s both`,
                    },
                    ...repeat(2, (index) => {
                        const intro: ReturnType<typeof keyframes> = index === 0 ? scaleFromBottom : scaleFromTop;
                        const outro: ReturnType<typeof keyframes> = index === 0 ? scaleToLeft : scaleToRight;

                        return {
                            "&::after": {
                                animation: chainAnimations([
                                    [intro, 0.3, 0.8],
                                    [outro, 0.4, 0.3],
                                ]),
                            },
                        };
                    }),
                },
            },
        },
    };
};
