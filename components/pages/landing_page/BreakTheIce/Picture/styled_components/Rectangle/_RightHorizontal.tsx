// Tools
import theme from "@/material";
import { keyframes } from "@mui/system";
// Types
import type { SxProps } from "@mui/system";

const introRightHorizontal = keyframes({
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

const outroRightHorizotal = keyframes({
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

export default {
    "&.right-horizontal": {
        background: theme.palette.secondary.main,
        top: "-15px",
        right: "-15px",
        width: "calc(75% - 100px)",
        height: "15px",
        "&.intro": {
            animation: `${introRightHorizontal} .5s linear both`,
        },
        "&.outro": {
            animation: `${outroRightHorizotal} .5s .6s linear both`,
        },
    },
} as SxProps;
