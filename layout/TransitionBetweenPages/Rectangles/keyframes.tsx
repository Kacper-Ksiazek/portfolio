// Tools
import { keyframes } from "@mui/material";

export const intro = keyframes({
    from: {
        width: 0,
    },
    to: {
        width: "100%",
    },
});

export const loadingMessageGleam = keyframes({
    from: {
        opacity: 0.3,
    },
    to: {
        opacity: 0.6,
    },
});

export const outro = keyframes({
    from: {
        width: "100%",
        right: "auto",
        left: 0,
    },
    to: {
        width: 0,
        right: "auto",
        left: 0,
    },
});
