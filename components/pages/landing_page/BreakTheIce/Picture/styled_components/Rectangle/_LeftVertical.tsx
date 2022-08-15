// Tools
import theme from "@/material";
import { keyframes } from "@mui/system";
// Types
import type { SxProps } from "@mui/system";

const introLeftVertical15px = keyframes({
    "0%": {
        zIndex: 7,
        height: "65%",
        width: "15px",
    },
    "40%, 60%": {
        height: "calc(100% + 15px)",
        width: "15px",
    },
    "100%": {
        width: "calc(100% + 15px)",
        height: "calc(100% + 15px)",
        zIndex: 7,
    },
});
const introLeftVertical10px = keyframes({
    "0%": {
        zIndex: 7,
        height: "65%",
        width: "10px",
    },
    "40%, 60%": {
        height: "calc(100% + 10px)",
        width: "10px",
    },
    "100%": {
        width: "calc(100% + 10px)",
        height: "calc(100% + 10px)",
        zIndex: 7,
    },
});
const introLeftVertical8px = keyframes({
    "0%": {
        zIndex: 7,
        height: "65%",
        width: "8px",
    },
    "40%, 60%": {
        height: "calc(100% + 8px)",
        width: "8px",
    },
    "100%": {
        width: "calc(100% + 8px)",
        height: "calc(100% + 8px)",
        zIndex: 7,
    },
});
const outroLeftVertical15px = keyframes({
    "0%": {
        zIndex: 7,
        width: "calc(100% + 15px)",
        height: "calc(100% + 15px)",
    },
    "40%, 60%": {
        height: "calc(100% + 15px)",
        width: "15px",
    },
    "100%": {
        height: "65%",
        width: "15px",
        zIndex: 7,
    },
});
const outroLeftVertical10px = keyframes({
    "0%": {
        zIndex: 7,
        width: "calc(100% + 10px)",
        height: "calc(100% + 10px)",
    },
    "40%, 60%": {
        height: "calc(100% + 10px)",
        width: "10px",
    },
    "100%": {
        height: "65%",
        width: "10px",
        zIndex: 7,
    },
});
const outroLeftVertical8px = keyframes({
    "0%": {
        zIndex: 7,
        width: "calc(100% + 8px)",
        height: "calc(100% + 8px)",
    },
    "40%, 60%": {
        height: "calc(100% + 8px)",
        width: "8px",
    },
    "100%": {
        height: "65%",
        width: "8px",
        zIndex: 7,
    },
});

export default {
    "&.left-vertical": {
        background: theme.palette.primary.main,
        bottom: "-15px",
        left: "-15px",
        width: "15px",
        height: "65%",
        "&.intro": {
            animation: `${introLeftVertical15px} .5s .6s linear both`,
        },
        "&.outro": {
            animation: `${outroLeftVertical15px} .5s linear both`,
        },
        ["@media (max-width:1600px)"]: {
            "&.intro": {
                animation: `${introLeftVertical10px} .5s .6s linear both`,
            },
            "&.outro": {
                animation: `${outroLeftVertical10px} .5s linear both`,
            },
        },
        ["@media (max-width:1200px)"]: {
            "&.intro": {
                animation: `${introLeftVertical8px} .5s .6s linear both`,
            },
            "&.outro": {
                animation: `${outroLeftVertical8px} .5s linear both`,
            },
        },
        ["@media (max-width:1000px)"]: {
            "&.intro": {
                animation: `${introLeftVertical10px} .5s .6s linear both`,
            },
            "&.outro": {
                animation: `${outroLeftVertical10px} .5s linear both`,
            },
        },
        ["@media (max-width:600px)"]: {
            ["@media (max-width:1200px)"]: {
                "&.intro": {
                    animation: `${introLeftVertical8px} .5s .6s linear both`,
                },
                "&.outro": {
                    animation: `${outroLeftVertical8px} .5s linear both`,
                },
            },
        },
    },
} as SxProps;
