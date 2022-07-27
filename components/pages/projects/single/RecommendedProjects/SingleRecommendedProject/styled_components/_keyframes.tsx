// Tools
import { keyframes } from "@mui/system";

export const imageIntroFast = keyframes({
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
});
export const imageIntroSlow = keyframes({
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
});
