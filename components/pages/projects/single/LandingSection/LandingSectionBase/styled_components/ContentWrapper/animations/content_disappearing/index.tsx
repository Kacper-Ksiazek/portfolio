// Tools
import * as Keyframes from "./keyframes";
import fadeSimpleOUT from "@/components/keyframes/outro/fadeSimpleOUT";
// Types
import type { SxProps } from "@mui/material";

export default {
    "&::before": {
        animation: `${Keyframes.BackgroundBarDisappearing} .3s both`,
    },
    ".duration, #project-title, .technologies-wrapper, #project-description, .redirect": {
        position: "relative",
        "&>*": {
            animation: `${fadeSimpleOUT} .001s .35s both`,
        },
        "&::after": {
            animation: ((): string => {
                return [
                    `${Keyframes.ContentDisappearing_StageOne} .3s both linear`, //
                    `${Keyframes.ContentDisappearing_StageTwo} .3s .4s forwards linear`, //
                ].join(", ");
            })(),
        },
    },
    ".redirect": {
        animation: `${Keyframes.Redirect_BackgroundColor} .001s .35s both`,
    },
} as SxProps;
