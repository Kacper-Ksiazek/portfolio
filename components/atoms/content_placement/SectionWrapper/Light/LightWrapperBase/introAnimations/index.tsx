// Tools
import * as keyframes from "./keyframes";
import fadeSimple from "@/components/keyframes/intro/fadeSimple";
// Types
import type { SxProps } from "@mui/system";

export default {
    ".light-section-wrapper-label": {
        span: {
            animation: `${fadeSimple} .001s .7s both`,
        },
        "&::after": {
            animation: [
                `${keyframes.label.stageOne} .3s .3s both linear`, //
                `${keyframes.label.stageTwo} .2s 1s forwards linear`,
            ].join(", "),
        },
    },
    ".light-section-wrapper-header": {
        span: {
            animation: `${fadeSimple} .001s 1.2s both`,
        },
        "&::after": {
            animation: [
                `${keyframes.header.stageOne} .3s .8s both linear`, //
                `${keyframes.header.stageTwo} .2s 1.4s forwards linear`,
            ].join(", "),
        },
    },
} as SxProps;
