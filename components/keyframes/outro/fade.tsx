// Tools
import { keyframes } from "@mui/material";

export const fadeSimpleOUT = keyframes({
    from: {
        opacity: 1,
    },
    to: {
        opacity: 0,
    },
});

export const fadeToBottom = keyframes({
    from: {
        opacity: 1,
        transform: "translateY(0px)",
    },
    to: {
        opacity: 0,
        transform: "translateY(30px)",
    },
});

export const fadeToTop = keyframes({
    from: {
        opacity: 1,
        transform: "translateY(0px)",
    },
    to: {
        transform: "translateY(-30px)",
        opacity: 0,
    },
});

export const fadeToLeft = keyframes({
    from: {
        opacity: 1,
        transform: "translateX(0px)",
    },
    to: {
        transform: "translateX(-30px)",
        opacity: 0,
    },
});

export const fadeToRight = keyframes({
    from: {
        opacity: 1,
        transform: "translateX(0px)",
    },
    to: {
        transform: "translateX(30px)",
        opacity: 0,
    },
});
