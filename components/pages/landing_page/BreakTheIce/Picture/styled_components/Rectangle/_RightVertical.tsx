// Tools
import theme from "@/material";
import { keyframes } from "@mui/system";
// Types
import type { SxProps } from "@mui/system";

const introRightVertical = keyframes({
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
const outroRightVertical = keyframes({
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

export default {
    "&.right-vertical": {
        background: theme.palette.secondary.main,
        top: "-15px",
        right: "-15px",
        width: "15px",
        height: "calc(65% - 100px)",
        "&.intro": {
            animation: `${introRightVertical} .5s .4s linear both`,
        },
        "&.outro": {
            animation: `${outroRightVertical} .5s .2s linear both`,
        },
    },
} as SxProps;
