// Tools
import { SELECTORS } from "../css_references";
// import { fadeFromTop } from "@/components/keyframes/intro";
// Types
import type { SxPropsFn } from "@/@types/MUI";

const LINES_INTRO_ANIMATIONS_SELECTOR: string = [
    SELECTORS.MAIN_HEADER, //
    SELECTORS.COLORED_SUBHEADER,
    SELECTORS.DESCRIPTION,
].join(", ");

export const introAnimations: SxPropsFn = function (theme) {
    return {
        [LINES_INTRO_ANIMATIONS_SELECTOR]: {
            position: "relative",
            "&::after": {
                content: "''",
                ...theme.mixins.absolute_full,
                background: "red",
            },
        },

        // ".colored-header": {
        //     "&:nth-of-type(1)": {
        //         animation: `${fadeFromTop} .2s linear both`,
        //     },
        //     "&:nth-of-type(2)": {
        //         animation: `${fadeFromTop} .2s .3s linear both`,
        //     },
        // },
        // ".main-header": {
        //     animation: `${fadeFromTop} .2s .1s linear both`,
        // },
        // p: {
        //     animation: `${fadeFromTop} .2s .2s linear both`,
        // },
        // button: {
        //     animation: `${fadeFromTop} .2s .5s linear both`,
        // },
    };
};
