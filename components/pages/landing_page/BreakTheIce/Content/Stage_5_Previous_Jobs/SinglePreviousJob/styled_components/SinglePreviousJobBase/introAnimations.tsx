// Tools
import theme from "@/material";
import fadeSimple from "@/components/_keyframes/intro/fadeSimple";
import { thumbnailIntroAnimation, thumbnailOutroAnimation, backgroundLineAnimation, separatorAnimation } from "./keyframes";
// Types
import type { SxProps } from "@mui/system";

export default {
    "&:nth-of-type(1)": {
        "&::before": {
            animation: `${backgroundLineAnimation} .77s 3s backwards`,
        },
        ".single-previous-job-thumbnail-wrapper": {
            "&::after, &::before": {
                content: "''",
                position: "absolute",
                border: "5px",
            },
            "&::after": {
                background: theme.palette.primary.main,
                zIndex: 2,
                animation: `${thumbnailIntroAnimation} .4s .95s both linear, ${thumbnailOutroAnimation} .4s 1.6s forwards linear`,
            },
            "&::before": {
                background: theme.palette.secondary.main,
                zIndex: 1,
                animation: `${thumbnailIntroAnimation} .4s .8s both linear, ${thumbnailOutroAnimation} .4s 1.75s forwards linear`,
            },
            img: {
                animation: `${fadeSimple} .001s 1.5s both`,
            },
        },
        ".localization": {
            animation: `${fadeSimple} .3s 1.4s backwards linear`,
        },
        h4: {
            animation: `${fadeSimple} .3s 1.5s backwards linear`,
        },
        ".duration": {
            animation: `${fadeSimple} .3s 1.6s backwards linear`,
        },
        p: {
            animation: `${fadeSimple} .3s 1.7s backwards linear`,
        },
    },
    "&:nth-of-type(2)": {
        "&::before": {
            animation: `${backgroundLineAnimation} .77s 3.2s backwards`,
        },
        "&::after": {
            animation: `${separatorAnimation} 1s 1.6s linear backwards`,
        },
        ".single-previous-job-thumbnail-wrapper": {
            "&::after, &::before": {
                content: "''",
                position: "absolute",
                border: "5px",
            },
            "&::after": {
                background: theme.palette.primary.main,
                zIndex: 2,
                animation: `${thumbnailIntroAnimation} .4s 1.15s both linear, ${thumbnailOutroAnimation} .4s 1.8s forwards linear`,
            },
            "&::before": {
                background: theme.palette.secondary.main,
                zIndex: 1,
                animation: `${thumbnailIntroAnimation} .4s 1.2s both linear, ${thumbnailOutroAnimation} .4s 1.95s forwards linear`,
            },
            img: {
                animation: `${fadeSimple} .001s 1.9s both`,
            },
        },
        ".localization": {
            animation: `${fadeSimple} .3s 1.6s backwards linear`,
        },
        h4: {
            animation: `${fadeSimple} .3s 1.7s backwards linear`,
        },
        ".duration": {
            animation: `${fadeSimple} .3s 1.8s backwards linear`,
        },
        p: {
            animation: `${fadeSimple} .3s 1.9s backwards linear`,
        },
    },
} as SxProps;
