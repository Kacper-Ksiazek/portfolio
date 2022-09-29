// Tools
import { keyframes } from "@mui/system";

export const intro_stageOne = keyframes({
    "0%": {
        borderRadius: "3px",
        width: "8px",
        height: "0",
    },
    "33%,66%": {
        borderRadius: "3px",
        width: "8px",
        height: "50px",
    },
    "100%": {
        height: "50px",
        width: "50px",
        borderRadius: "3px",
    },
});

export const arrowBounce = keyframes({
    from: {
        transform: "translateY(-2px)",
    },
    to: {
        transform: "translateY(2px)",
    },
});

export const intro_stageTwo = keyframes({
    from: {
        borderRadius: "3px",
    },
    to: {
        borderRadius: "5px 20px 5px 20px",
    },
});

export const outro_stageOne = keyframes({
    from: {
        borderRadius: "5px 20px 5px 20px",
        height: "50px",
        width: "50px",
    },
    to: {
        borderRadius: "3px",
        height: "50px",
        width: "50px",
    },
});

export const outro_stageTwo = keyframes({
    "0%": {
        height: "50px",
        width: "50px",
        borderRadius: "3px",
    },
    "33%,66%": {
        borderRadius: "3px",
        width: "8px",
        height: "50px",
    },
    "100%": {
        borderRadius: "3px",
        width: "8px",
        height: "0",
    },
});

export const spinning = keyframes({
    from: {
        transform: "rotate(0deg)",
    },
    to: {
        transform: "rotate(360deg)",
    },
});
