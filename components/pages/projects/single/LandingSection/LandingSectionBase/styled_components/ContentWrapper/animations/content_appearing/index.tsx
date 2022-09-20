// Tools
import * as Keyframes from "./keyframes";
import fadeSimple from "@/components/keyframes/intro/fadeSimple";
// Types
import type { SxProps } from "@mui/system";

export default {
    "&::before": {
        animation: `${Keyframes.BackgroundBarAppearing} .3s both`,
    },
    ".duration, #project-title, .technologies-wrapper, #project-description, .redirect": {
        position: "relative",
        "&>*": {
            animation: `${fadeSimple} .001s .35s both`,
        },
        "&::after": {
            animation: ((): string => {
                return [
                    `${Keyframes.ContentAppearing_StageOne} .3s both linear`, //
                    `${Keyframes.ContentAppearing_StageTwo} .3s .4s forwards linear`, //
                ].join(", ");
            })(),
        },
    },
    ".redirect": {
        animation: `${Keyframes.Redirect_BackgroundColor} .001s .35s both`,
    },
} as SxProps;
