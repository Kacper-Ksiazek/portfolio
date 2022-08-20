// Tools
import theme from "@/material";
import fadeSimple from "@/components/_keyframes/intro/fadeSimple";
import {
    introForFirstProject,
    introForLeftSideProjects,
    introForRightSideProjects,
    outroForFirstProject,
    outroForLeftSideProjects,
    outroForRightSideProjects,
} from "./_keyframes/projectCardBackgroundRectangles";
import { introScaleXFromLeft, introScaleXFromRight, introScaleYFromTop, outroScaleXToLeft, outroScaleXToRight } from "./_keyframes/scale";
// Types
import type { SxProps } from "@mui/system";

export default {
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
            // Initial animation shapes
            ".intro-bar1": {
                background: theme.palette.secondary.main,
                zIndex: 10,
                animation: `${introForLeftSideProjects} .5s linear both , ${outroForLeftSideProjects} .5s 1s linear forwards `,
            },
            ".intro-bar2": {
                background: theme.palette.primary.main,
                zIndex: 11,
                animation: `${introForLeftSideProjects} .5s .1s linear both , ${outroForLeftSideProjects} .5s .9s linear forwards `,
            },
            // Thumbnail picture animation
            ".thumbnail-wrapper": {
                "&::before": {
                    animation: `${introForLeftSideProjects} .4s 1.6s linear both, ${outroScaleXToLeft} .2s 2s forwards linear`,
                },
            },
            // Text content
            ".single-project-text-content-wrapper": {
                ".technologies-wrapper": {
                    "&::after": {
                        animation: `${introScaleXFromRight} .2s 2.2s linear both, ${outroForLeftSideProjects} .4s 2.5s forwards linear`,
                    },
                },
                h4: {
                    "&::after": {
                        animation: `${introScaleXFromRight} .2s 2.25s linear both, ${outroForLeftSideProjects} .4s 2.55s forwards linear`,
                    },
                },
                ".duration": {
                    "&::after": {
                        animation: `${introScaleXFromRight} .2s 2.3s linear both, ${outroForLeftSideProjects} .4s 2.6s forwards linear`,
                    },
                },
                p: {
                    "&::after": {
                        animation: `${introScaleXFromRight} .2s 2.35s linear both, ${outroForLeftSideProjects} .4s 2.65s forwards linear`,
                    },
                },
                ".read-more": {
                    "&::after": {
                        animation: `${introScaleXFromRight} .2s 2.4s linear both, ${outroForLeftSideProjects} .4s 2.7s forwards linear`,
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
                animation: `${introForRightSideProjects} .5s linear both, ${outroForRightSideProjects} .5s 1s linear forwards `,
            },
            ".intro-bar2": {
                background: theme.palette.primary.main,
                zIndex: 11,
                animation: `${introForRightSideProjects} .5s .1s linear both, ${outroForRightSideProjects} .5s .9s linear forwards`,
            },
            // Thumbnail picture animation
            ".thumbnail-wrapper": {
                "&::before": {
                    animation: `${introForRightSideProjects} .4s 1.4s linear both, ${outroScaleXToRight} .2s 2s forwards linear`,
                },
            },
            // Text content
            ".single-project-text-content-wrapper": {
                ".technologies-wrapper": {
                    "&::after": {
                        animation: `${introScaleXFromLeft} .2s 2.2s linear both, ${outroForRightSideProjects} .4s 2.5s forwards linear`,
                    },
                },
                h4: {
                    "&::after": {
                        animation: `${introScaleXFromLeft} .2s 2.25s linear both, ${outroForRightSideProjects} .4s 2.55s forwards linear`,
                    },
                },
                ".duration": {
                    "&::after": {
                        animation: `${introScaleXFromLeft} .2s 2.4s linear both, ${outroForRightSideProjects} .4s 2.6s forwards linear`,
                    },
                },
                p: {
                    "&::after": {
                        animation: `${introScaleXFromLeft} .2s 2.45s linear both, ${outroForRightSideProjects} .4s 2.85s forwards linear`,
                    },
                },
                ".read-more": {
                    "&::after": {
                        animation: `${introScaleXFromLeft} .2s 2.4s linear both, ${outroForRightSideProjects} .4s 2.7s forwards linear`,
                    },
                },
            },
        },
        ".thumbnail-wrapper": {
            "&::before": {
                background: theme.palette.primary.main,
            },
            ".direct-img-wrapper, .border-shape": {
                animation: `${fadeSimple} .001s 2s both`,
            },
        },
        ".single-project-text-content-wrapper": {
            ".technologies-wrapper, h4, .duration, p, .read-more": {
                position: "relative",
                "&::after": {
                    content: "''",
                    position: "absolute",
                    background: "#F2E8EF",
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0,
                },
            },
            ".technologies-wrapper>*": {
                animation: `${fadeSimple} .001s 2.45s both`,
            },
            "h4>*": {
                animation: `${fadeSimple} .001s 2.5s both`,
            },
            ".duration>*": {
                animation: `${fadeSimple} .001s 2.55s both`,
            },
            "p>*": {
                animation: `${fadeSimple} .001s 2.6s both`,
            },
            ".read-more button": {
                animation: `${fadeSimple} .001s 2.65s both`,
            },
            h4: {
                "&::after": {
                    height: "calc(100% + 10px)",
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
    },
} as SxProps;
