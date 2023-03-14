// Tools
import { COLORS } from "@/material";
import { stopRendering } from "./_keyframes/stopRendering";
import { fadeSimple } from "@/components/keyframes/intro";
import {
    introForFirstProject,
    introForLeftSideProjects,
    introForRightSideProjects,
    outroForFirstProject,
    outroForLeftSideProjects,
    outroForRightSideProjects,
} from "./_keyframes/projectCardBackgroundRectangles";
import { timelineConnectionIntro, timelineCoreEntireIntro, timelineCoreHalfIntro } from "./_keyframes/timeline";
import { introScaleXFromLeft, introScaleXFromRight, introScaleYFromTop, outroScaleXToLeft, outroScaleXToRight } from "./_keyframes/scale";
// Types
import type { SxProps } from "@mui/material";

export default {
    "&::after": {
        animation: `${stopRendering} .001s 4.4s both linear`,
    },
    ".year-indicator": {
        ".digit": {
            "&:nth-of-type(1)": {
                animation: `${fadeSimple} .2s .9s both linear`,
            },
            "&:nth-of-type(2)": {
                animation: `${fadeSimple} .2s 1.2s both linear`,
            },
            "&:nth-of-type(3)": {
                animation: `${fadeSimple} .2s 1.5s both linear`,
            },
            "&:nth-of-type(4)": {
                animation: `${fadeSimple} .2s 1.8s both linear`,
            },
        },
    },

    ".project-card": {
        "&::before": {
            animation: `${introScaleYFromTop} .4s 2.4s both ease-out`,
        },
        // Elements on left side
        "&.even": {
            // Thumbnail picture animation
            ".thumbnail-wrapper": {
                "&::before": {
                    animation: `${introForLeftSideProjects} .4s 1.3s linear both, ${outroScaleXToLeft} .2s 1.7s forwards linear`,
                },
            },
            // Text content
            ".single-project-text-content-wrapper": {
                ".technologies-wrapper": {
                    "&::after": {
                        animation: `${introScaleXFromRight} .2s 2.1s linear both, ${outroForLeftSideProjects} .4s 2.4s forwards linear`,
                    },
                },
                h4: {
                    "&::after": {
                        animation: `${introScaleXFromRight} .2s 2.15s linear both, ${outroForLeftSideProjects} .4s 2.45s forwards linear`,
                    },
                },
                ".duration": {
                    "&::after": {
                        animation: `${introScaleXFromRight} .2s 2.2s linear both, ${outroForLeftSideProjects} .4s 2.5s forwards linear`,
                    },
                },
                ".description": {
                    "&::after": {
                        animation: `${introScaleXFromRight} .2s 2.25s linear both, ${outroForLeftSideProjects} .4s 2.55s forwards linear`,
                    },
                },
                ".read-more": {
                    "&::after": {
                        animation: `${introScaleXFromRight} .2s 2.4s linear both, ${outroForLeftSideProjects} .4s 2.6s forwards linear`,
                    },
                },
            },
        },

        // Elements on right side
        "&.odd": {
            // Thumbnail picture animation
            ".thumbnail-wrapper": {
                "&::before": {
                    animation: `${introForRightSideProjects} .4s 1.3s linear both, ${outroScaleXToRight} .2s 1.9s forwards linear`,
                },
            },
            // Text content
            ".single-project-text-content-wrapper": {
                ".technologies-wrapper": {
                    "&::after": {
                        animation: `${introScaleXFromLeft} .2s 2.1s linear both, ${outroForRightSideProjects} .4s 2.4s forwards linear`,
                    },
                },
                h4: {
                    "&::after": {
                        animation: `${introScaleXFromLeft} .2s 2.15s linear both, ${outroForRightSideProjects} .4s 2.45s forwards linear`,
                    },
                },
                ".duration": {
                    "&::after": {
                        animation: `${introScaleXFromLeft} .2s 2.2s linear both, ${outroForRightSideProjects} .4s 2.5s forwards linear`,
                    },
                },
                ".description": {
                    "&::after": {
                        animation: `${introScaleXFromLeft} .2s 2.25s linear both, ${outroForRightSideProjects} .4s 2.55s forwards linear`,
                    },
                },
                ".read-more": {
                    "&::after": {
                        animation: `${introScaleXFromLeft} .2s 2.4s linear both, ${outroForRightSideProjects} .4s 2.6s forwards linear`,
                    },
                },
            },
        },
        ".thumbnail-wrapper": {
            "&::before": {
                background: COLORS.primary,
            },
            ".direct-img-wrapper, .border-shape": {
                animation: `${fadeSimple} .001s 1.8s both`,
            },
        },
        ".single-project-text-content-wrapper": {
            ".technologies-wrapper>*": {
                animation: `${fadeSimple} .001s 2.35s both`,
            },
            "h4>*": {
                animation: `${fadeSimple} .001s 2.4s both`,
            },
            ".duration>*": {
                animation: `${fadeSimple} .001s 2.45s both`,
            },
            ".description>*": {
                animation: `${fadeSimple} .001s 2.5s both`,
            },
            ".read-more a": {
                animation: `${fadeSimple} .001s 2.55s both`,
            },
            h4: {
                "&::after": {
                    height: "calc(100% + 10px)",
                },
            },
        },
    },
} as SxProps;
