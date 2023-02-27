// Tools
import { keyframes } from "@mui/material";

export const fadeFromBottom = keyframes({
    from: {
        transform: "translateY(30px)",
        opacity: 0,
    },
    to: {
        opacity: 1,
        transform: "translateY(0px)",
    },
});

export const fadeFromLeft = keyframes({
    from: {
        transform: "translateX(-30px)",
        opacity: 0,
    },
    to: {
        opacity: 1,
        transform: "translateX(0px)",
    },
});

export const fadeFromRight = keyframes({
    from: {
        transform: "translateX(30px)",
        opacity: 0,
    },
    to: {
        opacity: 1,
        transform: "translateX(0px)",
    },
});

export const fadeFromTop = keyframes({
    from: {
        transform: "translateY(-30px)",
        opacity: 0,
    },
    to: {
        opacity: 1,
        transform: "translateY(0px)",
    },
});

export const fadeSimple = keyframes({
    from: {
        opacity: 0,
    },
    to: {
        opacity: 1,
    },
});
