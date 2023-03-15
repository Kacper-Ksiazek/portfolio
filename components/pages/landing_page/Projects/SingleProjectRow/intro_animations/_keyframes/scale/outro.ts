// Tools
import { keyframes } from "@mui/material";

export const toRight = keyframes({
    from: {
        left: "auto",
        right: 0,
        width: "100%",
    },
    to: {
        left: "auto",
        right: 0,
        width: "0%",
    },
});
export const toLeft = keyframes({
    from: {
        right: "auto",
        left: 0,
        width: "100%",
    },
    to: {
        right: "auto",
        left: 0,
        width: "0%",
    },
});
