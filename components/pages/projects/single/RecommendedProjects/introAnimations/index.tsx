// Tools
import { COLORS } from "@/material";
import fadeSimple from "@/components/keyframes/intro/fadeSimple";
import fadeFromTop from "@/components/keyframes/intro/fadeFromTop";
import fadeFromLeft from "@/components/keyframes/intro/fadeFromLeft";
import { thumbnailIntroFast, thumbnailIntroSlow, numberOfFeaturesBarIntro, numberOfFeaturesBackgroundTransform } from "../introAnimations/_keyframes";
// Types
import type { SxProps } from "@mui/system";

export default {
    ".single-recommended-project": {
        "&.active, &.initial-active": {
            visibility: "visible",
            "&::after": {
                animation: `${fadeSimple} .5s 1.5s both`,
            },
            ".duration": {
                animation: `${fadeFromLeft} .3s .9s both`,
            },
            h3: {
                animation: `${fadeFromLeft} .3s 1.1s both`,
            },
            ".technologies-wrapper": {
                ".single-technology": {
                    "&:nth-of-type(1)": {
                        animation: `${fadeSimple} .2s 1.3s both`,
                    },
                    "&:nth-of-type(2)": {
                        animation: `${fadeSimple} .2s 1.4s both`,
                    },
                    "&:nth-of-type(3)": {
                        animation: `${fadeSimple} .2s 1.5s both`,
                    },
                    "&:nth-of-type(4)": {
                        animation: `${fadeSimple} .2s 1.6s both`,
                    },
                    "&:nth-of-type(5)": {
                        animation: `${fadeSimple} .2s 1.7s both`,
                    },
                    "&:nth-of-type(6)": {
                        animation: `${fadeSimple} .2s 1.8s both`,
                    },
                },
                ".there-are-more-technologies": {
                    animation: `${fadeSimple} .2s 1.8s both`,
                },
            },
            p: {
                animation: `${fadeFromTop} .3s 1.3s both`,
            },
            ".read-more": {
                animation: `${fadeFromLeft} .3s 1.7s both`,
            },
            ".thumbnail-wrapper": {
                "img, span.border-shape": {
                    animation: `${fadeSimple} .01s .9s both`,
                },
                "&::after": {
                    background: COLORS.primary,
                    animation: `${thumbnailIntroFast} 1.1s .3s both linear`,
                },
                "&::before": {
                    background: COLORS.secondary,
                    animation: `${thumbnailIntroSlow} 1.4s .2s both linear`,
                },
                ".number-of-features": {
                    animation: `${numberOfFeaturesBackgroundTransform} .001s 2.3s both linear`,
                    "&::after": {
                        background: COLORS.secondary,
                        content: "''",
                        position: "absolute",
                        top: "0%",
                        left: "0",
                        width: "100%",
                        height: "100%",
                        animation: `${numberOfFeaturesBarIntro} .6s 2s both linear`,
                    },
                    "span, strong": {
                        animation: `${fadeSimple} .001s 2.3s both linear`,
                    },
                },
            },
        },
    },
} as SxProps;
