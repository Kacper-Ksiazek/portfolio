// Tools
import theme from "@/material";
import { keyframes } from "@mui/system";
// Types
import type { SxProps } from "@mui/system";

const introLeftHorizontal = keyframes({
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

const outroLeftHorizontal = keyframes({
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
export default {
    "&.left-horizontal": {
        background: theme.palette.primary.main,
        bottom: "-15px",
        left: "-15px",
        width: "75%",
        height: "15px",
        "&.intro": {
            animation: `${introLeftHorizontal} .5s .2s linear both`,
        },
        "&.outro": {
            animation: `${outroLeftHorizontal} .5s .4s linear both`,
        },
    },
} as SxProps;
