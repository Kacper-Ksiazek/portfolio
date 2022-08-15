// Tools
import theme from "@/material";
import { keyframes } from "@mui/system";
// Types
import type { SxProps } from "@mui/system";

const introLeftHorizontal15px = keyframes({
    "0%": {
        zIndex: 5,
        width: "75%",
        height: "15px",
    },
    "40%, 60%": {
        width: "calc(100% + 15px)",
        height: "15px",
    },
    "100%": {
        width: "calc(100% + 15px)",
        height: "calc(100% + 15px)",
        zIndex: 5,
    },
});
const introLeftHorizontal10px = keyframes({
    "0%": {
        zIndex: 5,
        width: "75%",
        height: "10px",
    },
    "40%, 60%": {
        width: "calc(100% + 10px)",
        height: "10px",
    },
    "100%": {
        width: "calc(100% + 10px)",
        height: "calc(100% + 10px)",
        zIndex: 5,
    },
});
const introLeftHorizontal8px = keyframes({
    "0%": {
        zIndex: 5,
        width: "75%",
        height: "8px",
    },
    "40%, 60%": {
        width: "calc(100% + 8px)",
        height: "8px",
    },
    "100%": {
        width: "calc(100% + 8px)",
        height: "calc(100% + 8px)",
        zIndex: 5,
    },
});

const outroLeftHorizontal15px = keyframes({
    "0%": {
        zIndex: 5,
        width: "calc(100% + 15px)",
        height: "calc(100% + 15px)",
    },
    "40%, 60%": {
        width: "calc(100% + 15px)",
        height: "15px",
    },
    "100%": {
        width: "75%",
        height: "15px",
        zIndex: 5,
    },
});

const outroLeftHorizontal10px = keyframes({
    "0%": {
        zIndex: 5,
        width: "calc(100% + 10px)",
        height: "calc(100% + 10px)",
    },
    "40%, 60%": {
        width: "calc(100% + 10px)",
        height: "10px",
    },
    "100%": {
        width: "75%",
        height: "10px",
        zIndex: 5,
    },
});

const outroLeftHorizontal8px = keyframes({
    "0%": {
        zIndex: 5,
        width: "calc(100% + 8px)",
        height: "calc(100% + 8px)",
    },
    "40%, 60%": {
        width: "calc(100% + 8px)",
        height: "8px",
    },
    "100%": {
        width: "75%",
        height: "8px",
        zIndex: 5,
    },
});

export default {
    "&.left-horizontal": {
        background: theme.palette.primary.main,
        bottom: "-15px",
        left: "-15px",
        width: "75%",
        height: "15px",
        "&.intro": {
            animation: `${introLeftHorizontal15px} .5s .2s linear both`,
        },
        "&.outro": {
            animation: `${outroLeftHorizontal15px} .5s .4s linear both`,
        },
        ["@media (max-width:1600px)"]: {
            "&.intro": {
                animation: `${introLeftHorizontal10px} .5s .2s linear both`,
            },
            "&.outro": {
                animation: `${outroLeftHorizontal10px} .5s .4s linear both`,
            },
        },
        ["@media (max-width:1200px)"]: {
            "&.intro": {
                animation: `${introLeftHorizontal8px} .5s .2s linear both`,
            },
            "&.outro": {
                animation: `${outroLeftHorizontal8px} .5s .4s linear both`,
            },
        },
        ["@media (max-width:1000px)"]: {
            "&.intro": {
                animation: `${introLeftHorizontal10px} .5s .2s linear both`,
            },
            "&.outro": {
                animation: `${outroLeftHorizontal10px} .5s .4s linear both`,
            },
        },
        ["@media (max-width:600px)"]: {
            "&.intro": {
                animation: `${introLeftHorizontal8px} .5s .2s linear both`,
            },
            "&.outro": {
                animation: `${outroLeftHorizontal8px} .5s .4s linear both`,
            },
        },
    },
} as SxProps;
