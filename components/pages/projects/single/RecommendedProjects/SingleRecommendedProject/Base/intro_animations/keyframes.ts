// Tools
import { keyframes } from "@mui/material";

export const numberOfFeatures = {
    intro: keyframes({
        "0%": {
            width: "0%",
            right: "auto",
            left: 0,
        },
        "33%,65%": {
            width: "100%",
            right: "auto",
            left: 0,
        },
        "66%": {
            width: "100%",
            left: "auto",
            right: 0,
        },
        "100%": {
            width: "0",
            left: "auto",
            right: 0,
            display: "none",
        },
    }),
};

export const thumbnail = {
    fast: keyframes({
        "0%": {
            opacity: 0,
            transform: "scale(1,.05) translate(calc(-100% - 100px),0)",
        },
        "1%": {
            opacity: 1,
        },
        "20%": {
            transform: "scale(1,.05) translate(0%,0)",
        },
        "40%,60%": {
            transform: "scale(1,1) translate(0%,0)",
        },
        "80%": {
            transform: "scale(.05,1) translate(0%,0)",
        },
        "100%": {
            transform: "scale(.05,1) translate(0%, calc(100% + 20px))",
        },
    }),
    slow: keyframes({
        "0%": {
            opacity: 0,
            transform: "scale(1,.05) translate(calc(-100% - 100px),0)",
        },
        "1%": {
            opacity: 1,
        },
        "15%": {
            transform: "scale(1,.05) translate(0%,0)",
        },
        "30%,70%": {
            transform: "scale(1,1) translate(0%,0)",
        },
        "85%": {
            transform: "scale(.05,1) translate(0%,0)",
        },
        "100%": {
            transform: "scale(.05,1) translate(0%, calc(100% + 20px))",
        },
    }),
};
