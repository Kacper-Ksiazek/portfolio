// Tools
import { COLORS } from "@/material";
import { keyframes } from "@mui/system";
// Types
import type { SxProps } from "@mui/system";

const introRightVertical15px = keyframes({
    "0%": {
        zIndex: 6,
        width: "15px",
        height: "calc(65% - 100px)",
    },
    "40%, 60%": {
        height: "calc(100% + 15px)",
        width: "15px",
    },
    "100%": {
        width: "calc(100% + 15px)",
        height: "calc(100% + 15px)",
        zIndex: 6,
    },
});
const introRightVertical10px = keyframes({
    "0%": {
        zIndex: 6,
        width: "10px",
        height: "calc(65% - 100px)",
    },
    "40%, 60%": {
        height: "calc(100% + 10px)",
        width: "10px",
    },
    "100%": {
        width: "calc(100% + 10px)",
        height: "calc(100% + 10px)",
        zIndex: 6,
    },
});
const introRightVertical8px = keyframes({
    "0%": {
        zIndex: 6,
        width: "8px",
        height: "calc(65% - 100px)",
    },
    "40%, 60%": {
        height: "calc(100% + 8px)",
        width: "8px",
    },
    "100%": {
        width: "calc(100% + 8px)",
        height: "calc(100% + 8px)",
        zIndex: 6,
    },
});
const outroRightVertical15px = keyframes({
    "0%": {
        zIndex: 6,
        width: "calc(100% + 15px)",
        height: "calc(100% + 15px)",
    },
    "40%, 60%": {
        height: "calc(100% + 15px)",
        width: "200px",
    },
    "100%": {
        zIndex: 6,
        width: "15px",
        height: "calc(65% - 100px)",
    },
});
const outroRightVertical10px = keyframes({
    "0%": {
        zIndex: 6,
        width: "calc(100% + 10px)",
        height: "calc(100% + 10px)",
    },
    "40%, 60%": {
        height: "calc(100% + 10px)",
        width: "200px",
    },
    "100%": {
        zIndex: 6,
        width: "10px",
        height: "calc(65% - 100px)",
    },
});
const outroRightVertical8px = keyframes({
    "0%": {
        zIndex: 6,
        width: "calc(100% + 8px)",
        height: "calc(100% + 8px)",
    },
    "40%, 60%": {
        height: "calc(100% + 8px)",
        width: "200px",
    },
    "100%": {
        zIndex: 6,
        width: "8px",
        height: "calc(65% - 100px)",
    },
});

export default {
    "&.right-vertical": {
        background: COLORS.secondary,
        top: "-15px",
        right: "-15px",
        width: "15px",
        height: "calc(65% - 100px)",
        "&.intro": {
            animation: `${introRightVertical15px} .5s .4s linear both`,
        },
        "&.outro": {
            animation: `${outroRightVertical15px} .5s .2s linear both`,
        },
        ["@media (max-width:1600px)"]: {
            "&.intro": {
                animation: `${introRightVertical10px} .5s .4s linear both`,
            },
            "&.outro": {
                animation: `${outroRightVertical10px} .5s .2s linear both`,
            },
        },
        ["@media (max-width:1200px)"]: {
            "&.intro": {
                animation: `${introRightVertical8px} .5s .4s linear both`,
            },
            "&.outro": {
                animation: `${outroRightVertical8px} .5s .2s linear both`,
            },
        },
        ["@media (max-width:1000px)"]: {
            "&.intro": {
                animation: `${introRightVertical10px} .5s .4s linear both`,
            },
            "&.outro": {
                animation: `${outroRightVertical10px} .5s .2s linear both`,
            },
        },
        ["@media (max-width:600px)"]: {
            ["@media (max-width:1200px)"]: {
                "&.intro": {
                    animation: `${introRightVertical8px} .5s .4s linear both`,
                },
                "&.outro": {
                    animation: `${outroRightVertical8px} .5s .2s linear both`,
                },
            },
        },
    },
} as SxProps;
