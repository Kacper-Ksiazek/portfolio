// Tools
import { chainAnimations } from "@/utils/client/styled/chainAnimations";
import { SELECTORS } from "../css_references";
// Keyframes
import { scaleToBottom, scaleToLeft, scaleToRight, scaleToTop } from "@/components/keyframes/outro/scale";
import { scaleFromLeft, fadeSimple, scaleFromRight, scaleFromBottom, scaleFromTop } from "@/components/keyframes/intro";
// Types
import type { SxPropsFn } from "@/@types/MUI";

export const introAnimations: SxPropsFn = function (theme) {
    return {
        [SELECTORS._EVERY]: {
            position: "relative",
            "&::after": {
                content: "''",
                ...theme.mixins.absolute_full,
                background: theme.palette.background.darkAnimationBar,
                zIndex: 10,
                borderRadius: "3px",
            },
        },

        [SELECTORS.MAIN_HEADER]: {
            span: {
                animation: `${fadeSimple} .01s .4s linear both`,
            },
            "&::after": {
                animation: chainAnimations([
                    [scaleFromLeft, 0.3], //
                    [scaleToTop, 0.24, 0.2],
                ]),
            },
        },

        [SELECTORS.DESCRIPTION]: {
            span: {
                animation: `${fadeSimple} .01s .5s linear both`,
            },
            "&::after": {
                animation: chainAnimations([
                    [scaleFromRight, 0.3, 0.1], //
                    [scaleToBottom, 0.24, 0.2],
                ]),
            },
        },

        [SELECTORS.SUBHEADER.TOP]: {
            span: {
                animation: `${fadeSimple} .01s .9s linear both`,
            },
            "&::after": {
                animation: chainAnimations([
                    [scaleFromBottom, 0.2, 0.7], //
                    [scaleToLeft, 0.24, 0.2],
                ]),
            },
        },

        [SELECTORS.SUBHEADER.BOTTOM]: {
            span: {
                animation: `${fadeSimple} .01s .9s linear both`,
            },
            "&::after": {
                animation: chainAnimations([
                    [scaleFromTop, 0.2, 0.7], //
                    [scaleToBottom, 0.24, 0.2],
                ]),
            },
        },

        [SELECTORS.SCROLL_DOWN_BUTTON]: {
            ">*": {
                animation: `${fadeSimple} .01s 1.4s linear both`,
            },
            "&::after": {
                animation: chainAnimations([
                    [scaleFromTop, 0.2, 1.1], //
                    [scaleToRight, 0.24, 0.2],
                ]),
            },
        },
    };
};
