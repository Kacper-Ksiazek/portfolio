// Tools
import { keyframes } from "@mui/material";

export const pulse = keyframes({
    "0%": {
        opacity: 1,
    },
    "40%,60%": {
        opacity: 0,
    },
    "100%": {
        opacity: 1,
    },
});

export const strokeIntroAnimation = keyframes({
    "0%": {
        transformOrigin: "left",
        transform: "rotate(45deg) scaleX(0)",
    },
    "100%": {
        transformOrigin: "left",
        transform: "rotate(45deg) scaleX(1)",
    },
});
