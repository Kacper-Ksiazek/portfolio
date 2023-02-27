// Tools
import { keyframes } from "@mui/material";

export const scaleFromLeft = keyframes({
    from: {
        transform: "scaleX(0)",
        transformOrigin: "left",
    },
    to: {
        transform: "scaleX(100%)",
        transformOrigin: "left",
    },
});

export const scaleFromRight = keyframes({
    from: {
        transform: "scaleX(0)",
        transformOrigin: "right",
    },
    to: {
        transform: "scaleX(100%)",
        transformOrigin: "right",
    },
});

export const scaleFromTop = keyframes({
    from: {
        transform: "scaleY(0)",
        transformOrigin: "top",
    },
    to: {
        transform: "scaleY(100%)",
        transformOrigin: "top",
    },
});

export const scaleFromBottom = keyframes({
    from: {
        transform: "scaleY(0)",
        transformOrigin: "bottom",
    },
    to: {
        transform: "scaleY(100%)",
        transformOrigin: "bottom",
    },
});
