// Tools
import { keyframes } from "@mui/material";

export const stage_one_firstProject = keyframes({
    "0%": {
        height: "0",
        width: "80px",
        left: 0,
    },
    "33%,66%": {
        height: "100%",
        width: "80px",
        left: 0,
    },
    "100%": {
        height: "100%",
        width: "100%",
        left: 0,
    },
});

export const stage_one_rightSide = keyframes({
    "0%": {
        left: 0,
        right: "auto",
        display: "none",
        width: "0%",
        height: "32px",
        top: "50%",
        transform: "translateY(-50%)",
    },
    "33%,66%": {
        width: "100%",
        height: "32px",
    },
    "100%": {
        right: "auto",
        height: "100%",
        width: "100%",
        top: "50%",
        transform: "translateY(-50%)",
        left: 0,
    },
});

export const stage_one_leftSide = keyframes({
    "0%": {
        left: "auto",
        right: 0,
        display: "none",
        width: "0%",
        height: "32px",
        top: "50%",
        transform: "translateY(-50%)",
    },
    "33%,66%": {
        width: "100%",
        height: "32px",
    },
    "100%": {
        left: "auto",
        height: "100%",
        width: "100%",
        top: "50%",
        transform: "translateY(-50%)",
        right: 0,
    },
});
