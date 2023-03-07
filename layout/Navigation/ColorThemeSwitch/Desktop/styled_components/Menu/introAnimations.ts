// Tools
import { keyframes } from "@mui/material";
import { scaleToLeft, scaleToRight } from "@/components/keyframes/outro";
import { fadeSimple, scaleFromTop, scaleFromLeft } from "@/components/keyframes/intro";
// Types
import type { Styles } from "@/@types/MUI";
import { repeat } from "@/utils/client/styled/repeat";
import { chainAnimations } from "@/utils/client/styled/chainAnimations";

const scaleFromLeftWithTranslateY = keyframes({
    from: {
        transformOrigin: "left",
        transform: "translateY(-50%) scale(0)",
    },
    to: {
        transformOrigin: "left",
        transform: "translateY(-50%) scale(1)",
    },
});

export default {
    ".menu-item": {
        ...repeat(2, (index) => {
            const diff: number = index * 0.2;

            return {
                [`&:nth-of-type(${index + 1})`]: {
                    ".main-root": {
                        "&::before": {
                            animation: `${scaleFromTop} .2s ${0.15 + diff}s both linear`,
                        },
                        ".main-root-edge-dot": {
                            "&.root_start": {
                                animation: `${fadeSimple} .2s ${diff}s both linear`,
                            },
                            "&.root_end": {
                                animation: `${fadeSimple} .2s ${0.4 + diff}s both linear`,
                            },
                        },

                        ".middle-dot": {
                            animation: `${fadeSimple} .2s ${0.3 + diff}s both linear`,
                        },

                        ".link-to-the-element": {
                            animation: `${scaleFromLeftWithTranslateY} .2s ${0.4 + diff}s both linear`,
                            ".link-to-the-element-end-dot": {
                                animation: `${scaleFromLeftWithTranslateY} .2s ${0.6 + diff}s both linear`,
                            },
                        },
                    },
                    ".intro-animation-bar": {
                        animation: chainAnimations([
                            [scaleFromLeft, 0.24, 0.6 + diff],
                            [scaleToLeft, 0.24, 0.1],
                        ]),
                    },
                    ".intro-animation-bar + button": {
                        animation: `${fadeSimple} .001s ${0.9 + diff}s both`,
                    },
                },
            };
        }),
    },
    ".exit-button": {
        "&::after": {
            animation: chainAnimations([
                [scaleFromTop, 0.24, 0.8], //
                [scaleToRight, 0.24, 0.2], //
            ]),
        },
        button: {
            animation: `${fadeSimple} .001s 1.1s both`,
        },
    },
} as Styles;
