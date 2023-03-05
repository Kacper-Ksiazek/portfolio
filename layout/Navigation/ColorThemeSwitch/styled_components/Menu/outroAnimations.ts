// Tools
import { keyframes } from "@mui/material";
import { scaleToLeft, scaleToRight, fadeSimpleOUT, scaleToTop } from "@/components/keyframes/outro";
import { fadeSimple, scaleFromTop, scaleFromLeft, scaleFromRight } from "@/components/keyframes/intro";
// Types
import type { Styles } from "@/@types/MUI";
import { repeat } from "@/utils/client/styled/repeat";
import { chainAnimations } from "@/utils/client/styled/chainAnimations";

const scaleToLeftWithTranslateY = keyframes({
    from: {
        transformOrigin: "left",
        transform: "translateY(-50%) scale(1)",
    },
    to: {
        transformOrigin: "left",
        transform: "translateY(-50%) scale(0)",
    },
});

export default {
    ".menu-item": {
        ".main-root": {
            ".middle-dot": {
                animation: `${fadeSimpleOUT} .2s ${0.9}s both linear`,
            },

            ".link-to-the-element": {
                animation: `${scaleToLeftWithTranslateY} .2s ${0.8}s both linear`,
                ".link-to-the-element-end-dot": {
                    animation: `${fadeSimpleOUT} .2s ${0.6}s both linear`,
                },
            },
        },
        ".intro-animation-bar": {
            animation: chainAnimations([
                [scaleFromLeft, 0.24, 0.1],
                [scaleToLeft, 0.24, 0.1],
            ]),
        },
        ".intro-animation-bar + button": {
            animation: `${fadeSimpleOUT} .001s ${0.3}s both`,
            "&::before": {
                content: "none",
            },
        },

        ...repeat(2, (index) => {
            const diff: number = -index * 0.2;
            return {
                [`&:nth-of-type(${index + 1})`]: {
                    ".main-root": {
                        "&::before": {
                            animation: `${scaleToTop} .2s ${1 + diff}s both linear`,
                        },
                        ".main-root-edge-dot": {
                            "&.root_start": {
                                animation: `${fadeSimpleOUT} .2s ${0.7}s both linear`,
                            },
                            "&.root_end": {
                                animation: `${fadeSimpleOUT} .2s ${0.4}s both linear`,
                            },
                        },
                    },
                },
            };
        }),
    },
    ".exit-button": {
        "&::after": {
            animation: chainAnimations([
                [scaleFromLeft, 0.24, 0], //
                [scaleToTop, 0.24, 0.1], //
            ]),
        },
        button: {
            animation: `${fadeSimpleOUT} .001s .3s both`,
        },
    },
} as Styles;
