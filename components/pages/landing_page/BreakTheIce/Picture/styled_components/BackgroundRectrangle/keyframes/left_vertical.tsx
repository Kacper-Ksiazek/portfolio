// Tools
import { keyframes } from "@mui/material";
// Types
import type { AnimationsOrganizer } from "./@types";

export const leftVertical: AnimationsOrganizer = {
    intro: {
        _8px: keyframes({
            "0%": {
                zIndex: 7,
                height: "65%",
                width: "8px",
            },
            "40%, 60%": {
                height: "calc(100% + 8px)",
                width: "8px",
            },
            "100%": {
                width: "calc(100% + 8px)",
                height: "calc(100% + 8px)",
                zIndex: 7,
            },
        }),
        _10px: keyframes({
            "0%": {
                zIndex: 7,
                height: "65%",
                width: "10px",
            },
            "40%, 60%": {
                height: "calc(100% + 10px)",
                width: "10px",
            },
            "100%": {
                width: "calc(100% + 10px)",
                height: "calc(100% + 10px)",
                zIndex: 7,
            },
        }),
        _15px: keyframes({
            "0%": {
                zIndex: 7,
                height: "65%",
                width: "15px",
            },
            "40%, 60%": {
                height: "calc(100% + 15px)",
                width: "15px",
            },
            "100%": {
                width: "calc(100% + 15px)",
                height: "calc(100% + 15px)",
                zIndex: 7,
            },
        }),
    },
    outro: {
        _8px: keyframes({
            "0%": {
                zIndex: 7,
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
                zIndex: 7,
            },
        }),
        _10px: keyframes({
            "0%": {
                zIndex: 7,
                width: "calc(100% + 10px)",
                height: "calc(100% + 10px)",
            },
            "40%, 60%": {
                height: "calc(100% + 10px)",
                width: "10px",
            },
            "100%": {
                height: "65%",
                width: "10px",
                zIndex: 7,
            },
        }),
        _15px: keyframes({
            "0%": {
                zIndex: 7,
                width: "calc(100% + 15px)",
                height: "calc(100% + 15px)",
            },
            "40%, 60%": {
                height: "calc(100% + 15px)",
                width: "15px",
            },
            "100%": {
                height: "65%",
                width: "15px",
                zIndex: 7,
            },
        }),
    },
};
