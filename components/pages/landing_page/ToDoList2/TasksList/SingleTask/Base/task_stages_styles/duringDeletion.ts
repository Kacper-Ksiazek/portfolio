// Tools
import { keyframes } from "@mui/material";
import { SELECTORS } from "../../css_references";
import { scaleFromBottom } from "@/components/keyframes/intro";
import { chainAnimations } from "@/utils/client/styled/chainAnimations";
import { fadeSimpleOUT, scaleToLeft } from "@/components/keyframes/outro";
// Types
import type { SxProps, Theme } from "@/@types/MUI";

const hideSingleTaskWrapper = keyframes({
    from: {
        maxHeight: "100px",
    },
    to: {
        maxHeight: 0,
        margin: 0,
        padding: 0,
        transform: "scaleX(0)",
    },
});

const ELEMENTS_INVOLVED_IN_ANIMATION: Selector = [
    SELECTORS.DESCRIPTION, //
    SELECTORS.LABELS_WRAPPER,
    SELECTORS.CHECK_ICON,
].join(", ");

export const getStylesDuringDeletion = (theme: Theme, isUrgent: boolean): SxProps => {
    return {
        animation: chainAnimations([
            [scaleToLeft, 0.3, 0.5],
            [hideSingleTaskWrapper, 0.15, 0.1],
        ]),
        [ELEMENTS_INVOLVED_IN_ANIMATION]: {
            position: "relative",
            "&::after": {
                content: "''",
                ...theme.mixins.absolute_full,
                background: isUrgent ? theme.palette.primary.main : theme.palette.background.lightAnimationBar,
                borderRadius: "3px",
                animation: chainAnimations([
                    [scaleFromBottom, 0.2],
                    [scaleToLeft, 0.2, 0.2],
                ]),
            },

            "&>*": {
                animation: `${fadeSimpleOUT} .001s .3s both`,
            },
        },

        [`${SELECTORS.DESCRIPTION}::before`]: {
            animation: `${fadeSimpleOUT} .001s .3s both`,
        },

        [SELECTORS.CHECK_ICON]: {
            "&::after": {
                width: "calc(100% + 4px)",
                height: "calc(100% + 4px)",
                top: "-2px",
                left: "-2px",
            },
        },
    };
};
