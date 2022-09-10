// Tools
import { keyframes } from "@mui/system";

export const barIntroAnimation = keyframes({
    "0%": {
        top: 0,
        left: 0,
        right: "auto",
        bottom: "auto",
        //
        width: "10px",
        height: 0,
    },
    "33%,66%": {
        width: "10px",
        height: "100%",
    },
    "100%": {
        top: 0,
        left: 0,
        right: "auto",
        bottom: "auto",
        //
        width: "100%",
        height: "100%",
    },
});

export const barOutroAnimation = keyframes({
    "0%": {
        right: 0,
        bottom: 0,
        top: "auto",
        left: "auto",
        //
        width: "100%",
        height: "100%",
    },
    "33%,66%": {
        width: "100%",
        height: "10px",
    },
    "100%": {
        right: 0,
        bottom: 0,
        top: "auto",
        left: "auto",
        //
        width: 0,
        height: "10px",
    },
});
