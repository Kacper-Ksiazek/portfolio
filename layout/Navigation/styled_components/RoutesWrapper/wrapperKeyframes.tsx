// Tools
import { keyframes } from "@mui/system";

export const wrapperIntroAnimation = keyframes({
    "0%": {
        transform: "translateX(100%)",
        height: "92px",
    },
    "33%,66%": {
        transform: "translateX(0%)",
        height: "92px",
    },
    "100%": {
        transform: "translateX(0%)",
        height: "100vh",
    },
});

export const wrapperOutroAnimation = keyframes({
    "0%": {
        transform: "translateX(0%)",
        height: "100vh",
    },
    "33%,66%": {
        transform: "translateX(0%)",
        height: "92px",
    },
    "100%": {
        transform: "translateX(100%)",
        height: "92px",
    },
});

export const backgroundImageIntro = keyframes({
    from: {
        opacity: 0,
    },
    to: {
        opacity: 0.25,
    },
});

export const backgroundImageOutro = keyframes({
    from: {
        opacity: 0.15,
    },
    to: {
        opacity: 0,
    },
});
