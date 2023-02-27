// Tools
import { keyframes } from "@mui/material";

export const imageIntroFastReversed = keyframes({
    "0%": {
        transform: "scale(1,.05) translate(calc(100% + 20px),0)",
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
        transform: "scale(.05,1) translate(0%, calc(-100% - 20px))",
    },
});
export const imageIntroSlowReversed = keyframes({
    "0%": {
        transform: "scale(1,.05) translate(calc(100% + 20px),0)",
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
        transform: "scale(.05,1) translate(0%, calc(-100% - 20px))",
    },
});
export const imageIntroFast = keyframes({
    "0%": {
        transform: "scale(1,.05) translate(calc(-100% - 20px),0)",
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
});
export const imageIntroSlow = keyframes({
    "0%": {
        transform: "scale(1,.05) translate(calc(-100% - 20px),0)",
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
});
