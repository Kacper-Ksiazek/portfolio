// Tools
import { keyframes } from "@mui/material";

export const fromTop = keyframes({
    from: {
        height: "0%",
    },
    to: {
        height: "100%",
    },
});

export const fromRight = keyframes({
    from: {
        left: "auto",
        right: 0,
        width: "0%",
    },
    to: {
        left: "auto",
        right: 0,
        width: "100%",
    },
});

export const fromLeft = keyframes({
    from: {
        right: "auto",
        left: 0,
        width: "0%",
    },
    to: {
        right: "auto",
        left: 0,
        width: "100%",
    },
});
