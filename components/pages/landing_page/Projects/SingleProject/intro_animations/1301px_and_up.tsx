// Tools
import theme from "@/material";
import { stopRendering } from "./_keyframes/stopRendering";
import fadeSimple from "@/components/keyframes/intro/fadeSimple";
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
import type { SxProps } from "@mui/system";

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
            animation: `${introScaleYFromTop} .4s 3.6s both ease-out`,
        },
        // Elements on left side
        "&.even": {
            // Initial animation shapes
            ".intro-bar1": {
                background: theme.palette.secondary.main,
                zIndex: 10,
                animation: `${introForLeftSideProjects} .5s .9s linear both , ${outroForLeftSideProjects} .5s 2s linear forwards `,
            },
            ".intro-bar2": {
                background: theme.palette.primary.main,
                zIndex: 11,
                animation: `${introForLeftSideProjects} .5s 1s linear both , ${outroForLeftSideProjects} .5s 1.9s linear forwards `,
            },
            // Thumbnail picture animation
            ".thumbnail-wrapper": {
                "&::before": {
                    animation: `${introForLeftSideProjects} .4s 2.2s linear both, ${outroScaleXToLeft} .2s 2.8s forwards linear`,
                },
            },
            // Text content
            ".single-project-text-content-wrapper": {
                ".technologies-wrapper": {
                    "&::after": {
                        animation: `${introScaleXFromRight} .2s 3s linear both, ${outroForLeftSideProjects} .4s 3.3s forwards linear`,
                    },
                },
                h4: {
                    "&::after": {
                        animation: `${introScaleXFromRight} .2s 3.05s linear both, ${outroForLeftSideProjects} .4s 3.35s forwards linear`,
                    },
                },
                ".duration": {
                    "&::after": {
                        animation: `${introScaleXFromRight} .2s 3.1s linear both, ${outroForLeftSideProjects} .4s 3.4s forwards linear`,
                    },
                },
                p: {
                    "&::after": {
                        animation: `${introScaleXFromRight} .2s 3.15s linear both, ${outroForLeftSideProjects} .4s 3.45s forwards linear`,
                    },
                },
                ".read-more": {
                    "&::after": {
                        animation: `${introScaleXFromRight} .2s 3.3s linear both, ${outroForLeftSideProjects} .4s 3.5s forwards linear`,
                    },
                },
            },
        },

        // Elements on right side
        "&.odd": {
            // Initial animation shapes
            ".intro-bar1": {
                background: theme.palette.secondary.main,
                zIndex: 10,
                animation: `${introForRightSideProjects} .5s .9s linear both, ${outroForRightSideProjects} .5s 2s linear forwards `,
            },
            ".intro-bar2": {
                background: theme.palette.primary.main,
                zIndex: 11,
                animation: `${introForRightSideProjects} .5s 1s linear both, ${outroForRightSideProjects} .5s 1.9s linear forwards`,
            },
            // Thumbnail picture animation
            ".thumbnail-wrapper": {
                "&::before": {
                    animation: `${introForRightSideProjects} .4s 2.2s linear both, ${outroScaleXToRight} .2s 2.8s forwards linear`,
                },
            },
            // Text content
            ".single-project-text-content-wrapper": {
                ".technologies-wrapper": {
                    "&::after": {
                        animation: `${introScaleXFromLeft} .2s 3s linear both, ${outroForRightSideProjects} .4s 3.3s forwards linear`,
                    },
                },
                h4: {
                    "&::after": {
                        animation: `${introScaleXFromLeft} .2s 3.05s linear both, ${outroForRightSideProjects} .4s 3.35s forwards linear`,
                    },
                },
                ".duration": {
                    "&::after": {
                        animation: `${introScaleXFromLeft} .2s 3.1s linear both, ${outroForRightSideProjects} .4s 3.4s forwards linear`,
                    },
                },
                p: {
                    "&::after": {
                        animation: `${introScaleXFromLeft} .2s 3.15s linear both, ${outroForRightSideProjects} .4s 3.45s forwards linear`,
                    },
                },
                ".read-more": {
                    "&::after": {
                        animation: `${introScaleXFromLeft} .2s 3.3s linear both, ${outroForRightSideProjects} .4s 3.5s forwards linear`,
                    },
                },
            },
        },
        ".thumbnail-wrapper": {
            "&::before": {
                background: theme.palette.primary.main,
            },
            ".direct-img-wrapper, .border-shape": {
                animation: `${fadeSimple} .001s 2.7s both`,
            },
        },
        ".single-project-text-content-wrapper": {
            ".technologies-wrapper, h4, .duration, p, .read-more ": {
                position: "relative",
                "&::after": {
                    content: "''",
                    position: "absolute",
                    background: theme.palette.background.lightAnimationBar,
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0,
                },
            },
            ".technologies-wrapper>*": {
                animation: `${fadeSimple} .001s 3.25s both`,
            },
            "h4>*": {
                animation: `${fadeSimple} .001s 3.3s both`,
            },
            ".duration>*": {
                animation: `${fadeSimple} .001s 3.35s both`,
            },
            "p>*": {
                animation: `${fadeSimple} .001s 3.4s both`,
            },
            ".read-more a": {
                animation: `${fadeSimple} .001s 3.45s both`,
            },
            h4: {
                "&::after": {
                    height: "calc(100% + 10px)",
                },
            },
        },
    },

    ".timeline-core": {
        "&::before": {
            animation: `${timelineCoreEntireIntro} .3s .2s both linear`,
        },
        "&.last-project": {
            "&::before": {
                animation: `${timelineCoreHalfIntro} .3s .2s both linear`,
            },
        },
        ".timeline-connection": {
            "&::before": {
                animation: `${timelineConnectionIntro} .2s .5s both linear`,
            },
            "&.even": {
                ".dot.left": {
                    animation: `${fadeSimple} .2s .9s both linear`,
                },
                ".dot.right": {
                    animation: `${fadeSimple} .2s .7s both linear`,
                },
            },
            "&.odd": {
                ".dot.left": {
                    animation: `${fadeSimple} .2s .7s both linear`,
                },
                ".dot.right": {
                    animation: `${fadeSimple} .2s .9s both linear`,
                },
            },
        },
    },
    "&.first-row": {
        ".project-card": {
            ".intro-bar1": {
                background: theme.palette.secondary.main,
                zIndex: 10,
                animation: `${introForFirstProject} .5s linear both, ${outroForFirstProject} .5s 1s linear forwards`,
            },
            ".intro-bar2": {
                background: theme.palette.primary.main,
                zIndex: 11,
                animation: `${introForFirstProject} .5s .1s linear both, ${outroForFirstProject} .5s .9s linear forwards`,
            },
        },
        ".timeline-core": {
            "&.first-project": {
                "&::before": {
                    top: "50%",
                    animation: `${timelineCoreHalfIntro} .3s 2s both linear`,
                },
            },
            ".timeline-connection": {
                "&::before": {
                    right: "auto",
                    left: "0",
                    animation: `${timelineConnectionIntro} .2s 1.4s both linear`,
                },
                ".dot.left": {
                    animation: `${fadeSimple} .2s 1.6s both linear !important`,
                },
                ".dot.right": {
                    animation: `${fadeSimple} .2s 1.8s both linear !important`,
                },
            },
        },
    },
    "&.last-row": {
        ".timeline-connection": {
            "&::before": {
                animation: `${timelineConnectionIntro} .2s 1s both linear`,
            },
            ".dot.left": {
                animation: `${fadeSimple} .2s 1.2s both linear !important`,
            },
            ".dot.right": {
                animation: `${fadeSimple} .2s .7s both linear !important`,
            },
        },
    },
} as SxProps;
