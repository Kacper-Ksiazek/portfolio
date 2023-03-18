// Tools
import { keyframes } from "@mui/material";
// Types
import type { AnimationsOrganizer } from "./@types";

export const leftHorizontal: AnimationsOrganizer = {
    intro: {
        _8px: keyframes({
            "0%": {
                zIndex: 5,
                width: "75%",
                height: "8px",
            },
            "40%, 60%": {
                width: "calc(100% + 8px)",
                height: "8px",
            },
            "100%": {
                width: "calc(100% + 8px)",
                height: "calc(100% + 8px)",
                zIndex: 5,
            },
        }),
        _10px: keyframes({
            "0%": {
                zIndex: 5,
                width: "75%",
                height: "10px",
            },
            "40%, 60%": {
                width: "calc(100% + 10px)",
                height: "10px",
            },
            "100%": {
                width: "calc(100% + 10px)",
                height: "calc(100% + 10px)",
                zIndex: 5,
            },
        }),
        _15px: keyframes({
            "0%": {
                zIndex: 5,
                width: "75%",
                height: "15px",
            },
            "40%, 60%": {
                width: "calc(100% + 15px)",
                height: "15px",
            },
            "100%": {
                width: "calc(100% + 15px)",
                height: "calc(100% + 15px)",
                zIndex: 5,
            },
        }),
    },
    outro: {
        _8px: keyframes({
            "0%": {
                zIndex: 5,
                width: "calc(100% + 8px)",
                height: "calc(100% + 8px)",
            },
            "40%, 60%": {
                width: "calc(100% + 8px)",
                height: "8px",
            },
            "100%": {
                width: "75%",
                height: "8px",
                zIndex: 5,
            },
        }),
        _10px: keyframes({
            "0%": {
                zIndex: 5,
                width: "calc(100% + 10px)",
                height: "calc(100% + 10px)",
            },
            "40%, 60%": {
                width: "calc(100% + 10px)",
                height: "10px",
            },
            "100%": {
                width: "75%",
                height: "10px",
                zIndex: 5,
            },
        }),
        _15px: keyframes({
            "0%": {
                zIndex: 5,
                width: "calc(100% + 15px)",
                height: "calc(100% + 15px)",
            },
            "40%, 60%": {
                width: "calc(100% + 15px)",
                height: "15px",
            },
            "100%": {
                width: "75%",
                height: "15px",
                zIndex: 5,
            },
        }),
    },
};
