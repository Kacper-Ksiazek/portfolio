// Tools
import { keyframes } from "@mui/material";

export const introStageOne = keyframes({
    from: {
        width: 0,
        right: "0",
        left: "auto",
    },
    to: {
        width: "100%",
        right: "0",
        left: "auto",
    },
});

export const introStageTwo = keyframes({
    from: {
        width: "100%",
        right: "auto",
        left: "0",
    },
    to: {
        width: "8px",
        right: "auto",
        left: "0",
    },
});

export const outroStageOne = keyframes({
    from: {
        width: "8px",
        right: "auto",
        left: "0",
    },
    to: {
        width: "100%",
        right: "auto",
        left: "0",
    },
});

export const outroStageTwo = keyframes({
    from: {
        width: "100%",
        height: "100%",
        top: "auto",
        bottom: "0",
        right: "auto",
        left: "0",
    },
    to: {
        width: "100%",
        height: "0%",
        top: "auto",
        bottom: "0",
        right: "auto",
        left: "0",
    },
});
