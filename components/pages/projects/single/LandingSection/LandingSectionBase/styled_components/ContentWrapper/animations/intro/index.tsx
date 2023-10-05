// Tools
import { keyframes } from "@mui/material";
import { fadeSimple } from "@/components/keyframes/intro";
import { SELECTORS as TECHNOLOGIES_LIST } from "components/atoms/TechnologiesList/css_references";
//
import * as Redirect from "./keyframes/RedirectAnimations";
import * as Duration from "./keyframes/DurationAnimations";
import * as MainHeader from "./keyframes/MainHeaderAnimations";
import * as Description from "./keyframes/DescriptionAnimations";
import * as Technologies from "./keyframes/TechnologiesAnimations";
// Types
import type { SxProps } from "@mui/material";

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

export default ((): SxProps => {
    /** General delay applied to ALL following animations. The period of time is expressed in **s** */
    const GENERAL_DELAY = 0.7;
    /** Converts received delay in number (expressed in **s**) into CSS's appropriate syntax which include **s** at the end */
    const makeDelay = (delay: number): string => `${delay + GENERAL_DELAY}s`;

    return {
        "&::before": {
            animation: `${BackgroundBarIntro} 1s ${makeDelay(0)} both`,
        },
        "#project-thumbnail-preview-wrapper": {
            animation: `${fadeSimple} .3s ${makeDelay(3)} both linear`,
        },
        ".duration": {
            "&>*": {
                animation: `${fadeSimple} .001s ${makeDelay(1.75)} both`,
            },
            "&::after": {
                animation: ((): string => {
                    return [
                        `${Duration.DurationIntro_StageOne} .2s ${makeDelay(0.9)} both linear`, //
                        `${Duration.DurationIntro_StageTwo} .3s ${makeDelay(1.3)} forwards linear`, //
                        `${Duration.DurationIntro_StageThree} .3s ${makeDelay(1.7)} forwards linear`, //
                    ].join(", ");
                })(),
            },
        },
        "#project-title": {
            "&>*": {
                animation: `${fadeSimple} .001s  ${makeDelay(0.45)} both`,
            },
            "&::after": {
                animation: ((): string => {
                    return [
                        `${MainHeader.MainHeaderIntro_StageOne} .3s ${makeDelay(0)} both linear`, //
                        `${MainHeader.MainHeaderIntro_StageTwo} .3s ${makeDelay(0.5)} forwards linear`, //
                        `${MainHeader.MainHeaderIntro_StageThree} .3s ${makeDelay(1)} forwards linear`, //
                    ].join(", ");
                })(),
            },
        },
        [TECHNOLOGIES_LIST.WRAPPER]: {
            "&>*": {
                animation: `${fadeSimple} .001s  ${makeDelay(2.05)} both`,
            },
            "&::after": {
                animation: ((): string => {
                    return [
                        `${Technologies.TechnologiesIntro_StageOne} .2s ${makeDelay(1)} both linear`, //
                        `${Technologies.TechnologiesIntro_StageTwo} .3s ${makeDelay(1.6)} forwards linear`, //
                        `${Technologies.TechnologiesIntro_StageThree} .3s ${makeDelay(2.3)} forwards linear`, //
                    ].join(", ");
                })(),
            },
        },
        "#project-description": {
            "&>*": {
                animation: `${fadeSimple} .001s ${makeDelay(2.45)} both`,
            },
            "&::after": {
                animation: ((): string => {
                    return [
                        `${Description.DescriptionIntro_StageOne} .3s ${makeDelay(2)} both linear`, //
                        `${Description.DescriptionIntro_StageTwo} .2s ${makeDelay(2.4)} forwards linear`, //
                        `${Description.DescriptionIntro_StageThree} .3s ${makeDelay(2.7)} forwards linear`, //
                    ].join(", ");
                })(),
            },
        },
        ".redirect": [1, 2].map((child, index): SxProps => {
            const DELAY: number = 0.2 * index;

            return {
                [`&:nth-of-type(${child})`]: {
                    animation: `${Redirect.RedirectIntro_BackgroundColor} .001s ${makeDelay(2.8 + DELAY)} both`,
                    "&>*": {
                        animation: `${fadeSimple} .001s ${makeDelay(2.85 + DELAY)} both`,
                    },
                    "&::after": {
                        animation: ((): string => {
                            return [
                                `${Redirect.RedirectIntro_StageOne} .3s ${makeDelay(2 + DELAY)} both linear`, //
                                `${Redirect.RedirectIntro_StageTwo} .3s ${makeDelay(2.4 + DELAY)} forwards linear`, //
                                `${Redirect.RedirectIntro_StageThree} .3s ${makeDelay(2.8 + DELAY)} forwards linear`, //
                            ].join(", ");
                        })(),
                    },
                },
            } as SxProps;
        }),
    } as SxProps;
})();
