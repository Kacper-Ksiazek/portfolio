// Tools
import { keyframes } from "@mui/system";

export const intro = keyframes({
    "0%": {
        width: "0px",
        height: "50px",
    },
    "20%, 40%": {
        width: "120px",
        height: "50px",
    },
    "60%, 80%": {
        width: "120px",
        height: "100%",
    },
    "100%": {
        width: "100%",
        height: "100%",
    },
});

export const outro = keyframes({
    "0%": {
        transform: "translateX(-50%)",
        left: "50%",
        width: "100%",
        height: "100%",
        top: "auto",
        bottom: 0,
    },
    "33%,66%": {
        height: "100%",
        width: "120px",
    },
    "100%": {
        transform: "translateX(-50%)",
        left: "50%",
        width: "120px",
        height: "0",
        top: "auto",
        bottom: 0,
    },
});
