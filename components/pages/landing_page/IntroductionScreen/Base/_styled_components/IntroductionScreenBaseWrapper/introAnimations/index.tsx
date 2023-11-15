// Tools
import * as WrapperIntroAnimations from "./keyframes";
// Types
import type { Theme, SxProps } from "@/@types/MUI";

export function getIntroAnimationsStyles(theme: Theme, shouldDisplayIntroAnimations: boolean): SxProps {
    // Intro animations are displayed
    if (shouldDisplayIntroAnimations) {
        return {
            "@media (max-width:500px)": {
                top: "-10px",
            },
            "@media (min-width:1551px)": {
                animation: `${WrapperIntroAnimations.largeDisplay} .2s 2.8s both linear`,
            },
            "@media (max-width:1550px)": {
                animation: `${WrapperIntroAnimations.mediumDisplay} .2s 3s both linear`,
            },
            "@media (max-width:1100px)": {
                animation: `${WrapperIntroAnimations.mediumDisplayWithEqualRadius} .2s 2.6s both linear`,
            },
        };
    }

    // Intro animations are NOT displayed
    return {
        borderRadius: "20px 100px 20px 100px",
        maxHeight: "calc(100vh - 40px)",
        width: "calc(100vw - 40px)",
        "@media (max-width:1550px)": {
            top: "-10px",
            maxHeight: "calc(100vh - 20px)",
            width: "calc(100vw - 20px)",
            borderRadius: "20px 64px 20px 64px",
        },
        "@media (max-width:1100px)": {
            borderRadius: "20px",
            top: "-10px",
            maxHeight: "calc(100vh - 20px)",
            width: "calc(100vw - 20px)",
        },
        "@media (max-width:500px)": {
            "&.skip-intro-animation": {
                top: "-10px",
                width: "100%",
            },
            "&.display-intro-animations": {
                animation: `none`,
                top: "-10px",
            },
        },
    };
}
