// Tools
import * as WrapperIntroAnimations from "./keyframes";
// Types
import type { SxProps } from "@mui/material";

export default {
    "&.skip-intro-animation": {
        borderRadius: "20px 100px 20px 100px",
        maxHeight: "calc(100vh - 40px)",
        width: "calc(100vw - 40px)",
    },
    //
    "@media (min-width:1551px)": {
        "&.display-intro-animations": {
            animation: `${WrapperIntroAnimations.largeDisplay} .2s 5.5s both linear`,
        },
    },
    "@media (max-width:1550px)": {
        "&.display-intro-animations": {
            animation: `${WrapperIntroAnimations.mediumDisplay} .2s 5.5s both linear`,
        },
    },
    "@media (max-width:1100px)": {
        "&.display-intro-animations": {
            animation: `${WrapperIntroAnimations.mediumDisplayWithEqualRadius} .2s 5.5s both linear`,
        },
    },

    ["@media (max-width:500px)"]: {
        "&.skip-intro-animation": {
            top: "-10px",
            width: "100%",
        },
        "&.display-intro-animations": {
            animation: `none`,
            top: "-10px",
        },
    },
} as SxProps;
