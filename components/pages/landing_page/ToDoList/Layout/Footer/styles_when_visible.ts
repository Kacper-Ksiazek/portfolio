// Tools
import { chainAnimations } from "@/utils/client/styled/chainAnimations";
// Keyframes
import { fadeSimple, scaleFromTop } from "@/components/keyframes/intro";
import { scaleToRight, scaleToLeft } from "@/components/keyframes/outro";
// Selectors
import { SELECTORS } from "./css_references";
// Types
import { SxPropsFn } from "@/@types/MUI";

export const stylesWhenVisible: SxPropsFn = function (theme) {
    return {
        [SELECTORS._EVERY]: {
            position: "relative",
            "&::after": {
                content: '""',
                ...theme.mixins.absolute_full,
                backgroundColor: theme.palette.background.darkAnimationBar,
                borderRadius: "3px",
                zIndex: 1,
            },

            "&>*": {
                animation: `${fadeSimple} .001s .4s both`,
            },
        },

        [SELECTORS.RELEASES_TOGGLER + "::after"]: {
            animation: chainAnimations([
                [scaleFromTop, 0.2, 0.1],
                [scaleToRight, 0.3, 0.3],
            ]),
        },

        [SELECTORS.RESET_BUTTON + "::after"]: {
            animation: chainAnimations([
                [scaleFromTop, 0.2, 0.1],
                [scaleToLeft, 0.3, 0.3],
            ]),
        },
    };
};
