// Tools
import { keyframes } from "@mui/system";

export const scaleToLeft = keyframes({
    from: {
        transform: "scaleX(100%)",
        transformOrigin: "left",
    },
    to: {
        transform: "scaleX(0%)",
        transformOrigin: "left",
    },
});

export const scaleToRight = keyframes({
    from: {
        transform: "scaleX(100%)",
        transformOrigin: "right",
    },
    to: {
        transform: "scaleX(0%)",
        transformOrigin: "right",
    },
});

export const scaleToTop = keyframes({
    from: {
        transform: "scaleY(100%)",
        transformOrigin: "top",
    },
    to: {
        transform: "scaleY(0%)",
        transformOrigin: "top",
    },
});

export const scaleToBottom = keyframes({
    from: {
        transform: "scaleY(100%)",
        transformOrigin: "bottom",
    },
    to: {
        transform: "scaleY(0%)",
        transformOrigin: "bottom",
    },
});
