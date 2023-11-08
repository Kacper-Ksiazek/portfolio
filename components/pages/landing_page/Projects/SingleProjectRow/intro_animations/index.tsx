// Set of animations
import over_1520px from "./over_1520px";
import * as below_750px from "./below_750px";
import between_750px_and_1520px from "./between_750px_and_1520px";
// Keyframes
import { hidePseudoElement } from "@/components/keyframes/outro";
// Selectors
import { SELECTORS, PROJECT_CARD_ELEMENTS } from "../css_references";
// Types
import type { SxPropsFn } from "@/@types/MUI";

const introAnimations = { over_1520px, below_750px, between_750px_and_1520px };

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
            "@media (min-width:1521px)": {
                ...introAnimations.over_1520px,
            },
            "@media (min-width:750px) and (max-width: 1520px)": {
                ...introAnimations.between_750px_and_1520px,
            },
            "@media (max-width: 750px)": {
                ...introAnimations.below_750px.introAnimationsForThumbnail,
            },
        },
    };
};
