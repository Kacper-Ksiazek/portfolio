// Tools
import { keyframes } from "@mui/material";
import { scaleFromBottom } from "@/components/keyframes/intro";
import { SELECTORS, VIEW_MODE_SELECTORS } from "../../css_references";
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
    VIEW_MODE_SELECTORS.TITLE + ">h4", //
    VIEW_MODE_SELECTORS.LABEL,
    VIEW_MODE_SELECTORS.DESCRIPTION,
    SELECTORS.COMPLETION_BUTTON,
    VIEW_MODE_SELECTORS.INFORMATION_WITH_ICON,
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
                minHeight: "32px",
                background: isUrgent ? theme.palette.primary.main : theme.palette.background.darkAnimationBar,
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

        [`${VIEW_MODE_SELECTORS.TITLE}>h4::before`]: {
            animation: `${fadeSimpleOUT} .001s .3s both`,
        },

        [SELECTORS.COMPLETION_BUTTON]: {
            "&::after": {
                width: "calc(100% + 4px)",
                height: "calc(100% + 4px)",
                top: "-2px",
                left: "-2px",
            },
        },
    };
};
