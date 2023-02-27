// Tools
import { COLORS } from "@/material";
import { keyframes } from "@mui/material";
// Types
import type { SxProps } from "@mui/material";

const introRightHorizontal15px = keyframes({
    "0%": {
        zIndex: 4,
        width: "calc(75% - 100px)",
        height: "15px",
    },
    "40%, 60%": {
        width: "calc(100% + 15px)",
        height: "15px",
    },
    "100%": {
        width: "calc(100% + 15px)",
        height: "calc(100% + 15px)",
        zIndex: 4,
    },
});
const introRightHorizontal10px = keyframes({
    "0%": {
        zIndex: 4,
        width: "calc(75% - 100px)",
        height: "10px",
    },
    "40%, 60%": {
        width: "calc(100% + 10px)",
        height: "10px",
    },
    "100%": {
        width: "calc(100% + 10px)",
        height: "calc(100% + 10px)",
        zIndex: 4,
    },
});
const introRightHorizontal8px = keyframes({
    "0%": {
        zIndex: 4,
        width: "calc(75% - 100px)",
        height: "8px",
    },
    "40%, 60%": {
        width: "calc(100% + 8px)",
        height: "8px",
    },
    "100%": {
        width: "calc(100% + 8px)",
        height: "calc(100% + 8px)",
        zIndex: 4,
    },
});

const outroRightHorizotal15px = keyframes({
    "0%": {
        width: "calc(100% + 15px)",
        height: "calc(100% + 15px)",
        zIndex: 4,
    },
    "40%, 60%": {
        width: "calc(100% + 15px)",
        height: "15px",
    },
    "100%": {
        width: "calc(75% - 100px)",
        height: "15px",
        zIndex: 4,
    },
});
const outroRightHorizotal10px = keyframes({
    "0%": {
        width: "calc(100% + 10px)",
        height: "calc(100% + 10px)",
        zIndex: 4,
    },
    "40%, 60%": {
        width: "calc(100% + 10px)",
        height: "10px",
    },
    "100%": {
        width: "calc(75% - 100px)",
        height: "10px",
        zIndex: 4,
    },
});
const outroRightHorizotal8px = keyframes({
    "0%": {
        width: "calc(100% + 8px)",
        height: "calc(100% + 8px)",
        zIndex: 4,
    },
    "40%, 60%": {
        width: "calc(100% + 8px)",
        height: "8px",
    },
    "100%": {
        width: "calc(75% - 100px)",
        height: "8px",
        zIndex: 4,
    },
});

export default {
    "&.right-horizontal": {
        background: COLORS.secondary,
        top: "-15px",
        right: "-15px",
        width: "calc(75% - 100px)",
        height: "15px",
        "&.intro": {
            animation: `${introRightHorizontal15px} .5s linear both`,
        },
        "&.outro": {
            animation: `${outroRightHorizotal15px} .5s .6s linear both`,
        },
        ["@media (max-width:1600px)"]: {
            "&.intro": {
                animation: `${introRightHorizontal10px} .5s linear both`,
            },
            "&.outro": {
                animation: `${outroRightHorizotal10px} .5s .6s linear both`,
            },
        },
        ["@media (max-width:1200px)"]: {
            "&.intro": {
                animation: `${introRightHorizontal8px} .5s linear both`,
            },
            "&.outro": {
                animation: `${outroRightHorizotal8px} .5s .6s linear both`,
            },
        },
        ["@media (max-width:1000px)"]: {
            "&.intro": {
                animation: `${introRightHorizontal10px} .5s linear both`,
            },
            "&.outro": {
                animation: `${outroRightHorizotal10px} .5s .6s linear both`,
            },
        },
        ["@media (max-width:600px)"]: {
            ["@media (max-width:1200px)"]: {
                "&.intro": {
                    animation: `${introRightHorizontal8px} .5s linear both`,
                },
                "&.outro": {
                    animation: `${outroRightHorizotal8px} .5s .6s linear both`,
                },
            },
        },
    },
} as SxProps;
