// Tools
import { keyframes } from "@mui/system";
import fadeSimple from "@/components/_keyframes/intro/fadeSimple";
//
import * as Redirect from "./keyframes/RedirectAnimations";
import * as Duration from "./keyframes/DurationAnimations";
import * as MainHeader from "./keyframes/MainHeaderAnimations";
import * as Description from "./keyframes/DescriptionAnimations";
import * as Technologies from "./keyframes/TechnologiesAnimations";
// Types
import type { SxProps } from "@mui/system";

const BackgroundBarIntro = keyframes({
    from: {
        transformOrigin: "top",
        transform: "scaleY(0)",
    },
    to: {
        transformOrigin: "top",
        transform: "scaleY(1)",
    },
});

export default {
    "&::before": {
        animation: `${BackgroundBarIntro} 1s both`,
    },
    "#project-thumbnail-preview-wrapper": {
        animation: `${fadeSimple} .3s 3s both linear`,
    },
    ".duration": {
        "&>*": {
            animation: `${fadeSimple} .001s 1.7s both`,
        },
        "&::after": {
            animation: ((): string => {
                return [
                    `${Duration.DurationIntro_StageOne} .2s .9s both linear`, //
                    `${Duration.DurationIntro_StageTwo} .3s 1.3s forwards linear`, //
                    `${Duration.DurationIntro_StageThree} .3s 1.7s forwards linear`, //
                ].join(", ");
            })(),
        },
    },
    "#project-title": {
        "&>*": {
            animation: `${fadeSimple} .001s .4s both`,
        },
        "&::after": {
            animation: ((): string => {
                return [
                    `${MainHeader.MainHeaderIntro_StageOne} .3s forwards linear`, //
                    `${MainHeader.MainHeaderIntro_StageTwo} .3s .5s forwards linear`, //
                    `${MainHeader.MainHeaderIntro_StageThree} .3s 1s forwards linear`, //
                ].join(", ");
            })(),
        },
    },
    ".technologies": {
        "&>*": {
            animation: `${fadeSimple} .001s 2s both`,
        },
        "&::after": {
            animation: ((): string => {
                return [
                    `${Technologies.TechnologiesIntro_StageOne} .2s 1s both linear`, //
                    `${Technologies.TechnologiesIntro_StageTwo} .3s 1.6s forwards linear`, //
                    `${Technologies.TechnologiesIntro_StageThree} .3s 2.3s forwards linear`, //
                ].join(", ");
            })(),
        },
    },
    "#project-description": {
        "&>*": {
            animation: `${fadeSimple} .001s 2.4s both`,
        },
        "&::after": {
            animation: ((): string => {
                return [
                    `${Description.DescriptionIntro_StageOne} .3s 2s both linear`, //
                    `${Description.DescriptionIntro_StageTwo} .2s 2.4s forwards linear`, //
                    `${Description.DescriptionIntro_StageThree} .3s 2.7s forwards linear`, //
                ].join(", ");
            })(),
        },
    },
    ".redirect": [1, 2].map((child, index): SxProps => {
        const DELAY: number = 0.2 * index;

        return {
            [`&:nth-of-type(${child})`]: {
                animation: `${Redirect.RedirectIntro_BackgroundColor} .001s ${2.8 + DELAY}s both`,
                "&>*": {
                    animation: `${fadeSimple} .001s ${2.8 + DELAY}s both`,
                },
                "&::after": {
                    animation: ((): string => {
                        return [
                            `${Redirect.RedirectIntro_StageOne} .3s ${2 + DELAY}s both linear`, //
                            `${Redirect.RedirectIntro_StageTwo} .3s ${2.4 + DELAY}s forwards linear`, //
                            `${Redirect.RedirectIntro_StageThree} .3s ${2.8 + DELAY}s forwards linear`, //
                        ].join(", ");
                    })(),
                },
            },
        } as SxProps;
    }),
} as SxProps;
