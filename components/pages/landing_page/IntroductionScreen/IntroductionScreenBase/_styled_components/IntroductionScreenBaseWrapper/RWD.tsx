// Tools
import { introAnimationShorterWidth, introAnimationWideBodyWithRegularRadius } from "./keyframes";
// Types
import type { SxProps } from "@mui/system";

export default {
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
