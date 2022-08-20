// Tools
import { introAnimationShorterWidth, introAnimationWideBodyWithRegularRadius } from "./keyframes";
// Types
import type { SxProps } from "@mui/system";

export default {
    ["@media (max-width:1100px)"]: {
        "&.display-intro-animations": {
            animation: `${introAnimationWideBodyWithRegularRadius} .2s 5.5s both linear`,
        },
        "&.skip-intro-animation": {
            borderRadius: "20px",
            top: "-100px",
            maxHeight: "calc(100vh - 40px)",
            width: "calc(100vw - 40px)",
        },
    },
    ["@media (max-width:500px)"]: {
        "&.display-intro-animations": {
            animation: `${introAnimationShorterWidth} .2s 5.5s both linear`,
        },
        "&.skip-intro-animation": {
            borderRadius: "20px",
            top: "-110px",
            maxHeight: "calc(100vh - 20px)",
            width: "calc(100vw - 20px)",
        },
    },
} as SxProps;
