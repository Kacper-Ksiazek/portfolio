// Tools
import { keyframes } from "@mui/material";

export const stageOne = keyframes({
    "0%": {
        width: "8px",
        height: "0",
    },
    "33%,66%": {
        width: "8px",
        height: "100%",
    },
    "100%": {
        width: "100%",
        height: "100%",
    },
});
export const stageTwo = keyframes({
    from: {
        height: "100%",
        top: "auto",
        bottom: 0,
    },
    to: {
        height: "0",
        top: "auto",
        bottom: 0,
    },
});
