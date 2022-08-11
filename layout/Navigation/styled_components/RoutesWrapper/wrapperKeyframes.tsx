// Tools
import { keyframes } from "@mui/system";

export const wrapperIntroAnimation = keyframes({
    "0%": {
        transform: "translateX(100%)",
        height: "80px",
    },
    "33%,66%": {
        transform: "translateX(0%)",
        height: "80px",
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
        height: "80px",
    },
    "100%": {
        transform: "translateX(100%)",
        height: "80px",
    },
});
