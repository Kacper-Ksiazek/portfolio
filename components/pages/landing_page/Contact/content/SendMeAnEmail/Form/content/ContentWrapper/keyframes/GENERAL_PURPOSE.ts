// Tools
import { keyframes } from "@mui/system";

export const introStageOne = keyframes({
    from: {
        width: 0,
        left: "0",
    },
    to: {
        width: "100%",
        left: "0",
    },
});

export const introStageTwo = keyframes({
    from: {
        width: "100%",
        left: "auto",
        right: "0",
    },
    to: {
        width: "8px",
        left: "auto",
        right: "0",
    },
});

export const outroStageOne = keyframes({
    from: {
        width: "8px",
        right: "0",
        left: "auto",
    },
    to: {
        width: "100%",
        right: "0",
        left: "auto",
    },
});

export const outroStageTwo = keyframes({
    from: {
        width: "100%",
        height: "100%",
        right: "auto",
        left: "0",
    },
    to: {
        width: "100%",
        height: "0%",
        right: "auto",
        left: "0",
    },
});
