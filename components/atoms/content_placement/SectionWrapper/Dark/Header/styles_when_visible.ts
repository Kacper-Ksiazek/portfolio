// Tools
import { SELECTORS } from "./css_references";
import * as intro from "@/components/keyframes/intro";
import * as outro from "@/components/keyframes/outro";
import { chainAnimations } from "@/utils/client/styled/chainAnimations";
// Types
import type { SxPropsFn } from "@/@types/MUI";

const SELECTORS_TO_ELEMENTS_WITH_LINE_ANIMATIONS: Selector = [
    SELECTORS.MAIN_HEADER, //
    SELECTORS.SUB_HEADER,
    SELECTORS.DESCRIPTION,
].join(", ");

export const stylesWhenVisible: SxPropsFn = function (theme) {
    return {
        dispaly: "none",
        visibility: "visible",

        [SELECTORS.ICON]: {
            animation: `${intro.fadeSimple} 2s .4s both linear`,
        },
        [SELECTORS.DIVIDER]: {
            animation: `${intro.scaleFromRight} .3s 2.1s both linear`,
        },

        [SELECTORS_TO_ELEMENTS_WITH_LINE_ANIMATIONS]: {
            position: "relative",
            "&::after": {
                content: "''",
                ...theme.mixins.absolute_full,
                background: theme.palette.secondary[theme.palette.mode === "light" ? "main" : "dark"],
            },
        },

        [SELECTORS.MAIN_HEADER]: {
            "&::after": {
                animation: chainAnimations([
                    [intro.scaleFromLeft, 0.3, 0.1],
                    [outro.scaleToRight, 0.3, 0.2],
                    [outro.hidePseudoElement, 0.0001],
                ]),
            },
            span: {
                animation: `${intro.fadeSimple} .001s .5s both`,
            },
        },

        [SELECTORS.SUB_HEADER]: {
            "&:nth-of-type(1)::after": {
                animation: chainAnimations([
                    [intro.scaleFromBottom, 0.3, 0.7],
                    [outro.scaleToLeft, 0.3, 0.2],
                    [outro.hidePseudoElement, 0.0001],
                ]),
            },
            "&:nth-of-type(2)::after": {
                animation: chainAnimations([
                    [intro.scaleFromTop, 0.3, 0.7],
                    [outro.scaleToBottom, 0.3, 0.2],
                    [outro.hidePseudoElement, 0.0001],
                ]),
            },
            span: {
                animation: `${intro.fadeSimple} .001s 1.1s both`,
            },
        },

        [SELECTORS.DESCRIPTION]: {
            "&::after": {
                animation: chainAnimations([
                    [intro.scaleFromTop, 0.3, 1.3],
                    [outro.scaleToLeft, 0.3, 0.2],
                    [outro.hidePseudoElement, 0.0001],
                ]),
            },
            span: {
                animation: `${intro.fadeSimple} .001s 1.7s both`,
            },
        },
    };
};
