// Tools
import { keyframes } from "@mui/system";

export const lineAnimation = keyframes({
    from: {
        transform: "scaleY(0) translateY(-50%)",
    },
    to: {
        transform: "scaleY(1) translateY(-50%)",
    },
});

export const thumbnailIntroAnimation = keyframes({
    "0%": {
        width: "40px",
        height: "0%",
        top: "0",
        left: "0",
    },
    "33%,66%": {
        width: "40px",
        height: "100%",
    },
    "100%": {
        height: "100%",
        width: "100%",
        top: "0",
        left: "0",
    },
});

export const thumbnailOutroAnimation = keyframes({
    "0%": {
        left: "auto",
        top: "auto",
        bottom: "0",
        right: "0",
        width: "100%",
        height: "100%",
    },
    "33%,66%": {
        width: "40px",
        height: "100%",
    },
    "100%": {
        left: "auto",
        top: "auto",
        bottom: "0",
        right: "0",
        width: "40px",
        height: "0%",
    },
});
