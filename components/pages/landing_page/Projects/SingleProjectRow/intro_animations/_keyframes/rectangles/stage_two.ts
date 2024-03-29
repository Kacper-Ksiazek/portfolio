// Tools
import { keyframes } from "@mui/material";

export const stage_two_firstProject = keyframes({
    "0%": {
        left: "auto",
        height: "100%",
        width: "100%",
        top: "50%",
        transform: "translateY(-50%)",
        right: 0,
    },
    "33%,66%": {
        right: 0,
        width: "100%",
        height: "32px",
    },
    "100%": {
        right: 0,
        display: "none",
        width: "0%",
        height: "32px",
        top: "50%",
        transform: "translateY(-50%)",
        left: "auto",
    },
});

export const stage_two_rightSide = keyframes({
    "0%": {
        height: "100%",
        width: "100%",
        left: 0,
        right: "auto",
    },
    "33%,66%": {
        height: "100%",
        width: "80px",
    },
    "100%": {
        height: "0",
        width: "80px",
        left: 0,
        right: "auto",
    },
});
export const stage_two_leftSide = keyframes({
    "0%": {
        height: "100%",
        width: "100%",
        right: 0,
        left: "auto",
    },
    "33%,66%": {
        height: "100%",
        width: "80px",
    },
    "100%": {
        height: "0",
        width: "80px",
        right: 0,
        left: "auto",
    },
});
