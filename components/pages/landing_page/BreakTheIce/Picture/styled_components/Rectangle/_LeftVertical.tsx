// Tools
import theme from "@/material";
import { styled, keyframes } from "@mui/system";
// Types
import type { SxProps } from "@mui/system";

const introLeftVertical = keyframes({
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
const outroLeftVertical = keyframes({
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

export default {
    "&.left-vertical": {
        background: theme.palette.primary.main,
        bottom: "-15px",
        left: "-15px",
        width: "15px",
        height: "65%",
        "&.intro": {
            animation: `${introLeftVertical} .5s .6s linear both`,
        },
        "&.outro": {
            animation: `${outroLeftVertical} .5s linear both`,
        },
    },
} as SxProps;
