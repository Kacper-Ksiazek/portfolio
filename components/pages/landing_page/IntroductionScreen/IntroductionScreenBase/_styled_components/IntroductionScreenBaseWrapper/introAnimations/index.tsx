// Tools
import fadeSimple from "@/components/keyframes/intro/fadeSimple";
import { introAnimationWidthBodyWithBigRadius, introAnimationWideBodyWithRegularRadius, introAnimationShorterWidth } from "./keyframes";
// Types
import type { SxProps } from "@mui/system";

export default {
    "&.display-intro-animations": {
        animation: `${introAnimationWidthBodyWithBigRadius} .2s 5.5s both linear`,
        "#landing-page-picture": {
            animation: `${fadeSimple} 1s 1.6s both linear`,
        },
    },
    "&.skip-intro-animation": {
        borderRadius: "20px 100px 20px 100px",
        maxHeight: "calc(100vh - 40px)",
        width: "calc(100vw - 40px)",
        "#landing-page-picture": {
            animation: `${fadeSimple} 1s 1s both linear`,
        },
    },
    //
    ["@media (max-width:1100px)"]: {
        "&.display-intro-animations": {
            animation: `${introAnimationWideBodyWithRegularRadius} .2s 5.5s both linear`,
        },
    },
    ["@media (max-width:500px)"]: {
        "&.display-intro-animations": {
            animation: `${introAnimationShorterWidth} .2s 5.5s both linear`,
        },
    },
} as SxProps;
