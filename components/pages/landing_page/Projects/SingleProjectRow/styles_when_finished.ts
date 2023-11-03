// Keyframec
import * as introAnimations from "./intro_animations";
import { hidePseudoElement } from "@/components/keyframes/outro";
// Selectors
import { SELECTORS, PROJECT_CARD_ELEMENTS } from "./css_references";
// Types
import type { SxPropsFn } from "@/@types/MUI";

export const stylesWhenVisible: SxPropsFn = (theme) => {
    return {
        ".single-project-row": {
            "&::after": {
                animation: `${hidePseudoElement} .001s 2.6s both`,
            },
            [SELECTORS.PROJECT_CARD.WRAPPER as any]: {
                [PROJECT_CARD_ELEMENTS.join(", ")]: {
                    position: "relative",
                    "&::after": {
                        content: "''",
                        ...theme.mixins.absolute_full,
                        background: theme.palette.background.lightAnimationBar,
                    },
                },
            },
            "@media (min-width:1401px)": {
                ...introAnimations.over_1400px,
            },
            "@media (min-width:750px) and (max-width: 1400px)": {
                ...introAnimations.between_750px_and_1400px,
            },
            "@media (max-width: 750px)": {
                ...introAnimations.below_750px.introAnimationsForThumbnail,
            },
            "@media (max-width:1000px)": {
                flexDirection: "column",
                "&.year-indicating": {
                    paddingTop: "16px",
                },
            },
        },
    };
};
