// Tools
import { keyframes } from "@mui/material";

export const intro = keyframes({
    "0%": {
        opacity: 0,
        transform: "translate(-50%,-100px)",
    },
    "100%": {
        transform: "translate(-50%,0%)",
        opacity: 1,
    },
});
export const outro = keyframes({
    "0%": {
        transform: "translateX(-50%)",
        opacity: 1,
    },
    "100%": {
        opacity: 0,
        transform: "translateX(calc(-50% + 100px))",
    },
});
