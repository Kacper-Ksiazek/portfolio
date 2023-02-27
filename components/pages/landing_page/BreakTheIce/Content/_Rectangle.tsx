// Tools
import { styled, keyframes } from "@mui/material";
// Styled components
const introAnimation1 = keyframes({
    "0%": {
        transform: "translateX(110%) scaleY(0.05)",
    },
    "40%,60%": {
        transform: "translateX(0%) scaleY(0.05)",
    },
    "100%": {
        transform: "translateX(0%) scaleY(1)",
    },
});
const introAnimation2 = keyframes({
    "0%": {
        transform: "translateX(-110%) scaleY(0.05)",
    },
    "40%,60%": {
        transform: "translateX(0%) scaleY(0.05)",
    },
    "100%": {
        transform: "translateX(0%) scaleY(1)",
    },
});

const outroAnimation1 = keyframes({
    "0%": {
        transform: "translateY(0%) scaleX(1)",
    },
    "40%,60%": {
        transform: "translateY(0%) scaleX(0.05)",
    },
    "100%": {
        transform: "translateY(-110%) scaleX(0.05)",
    },
});
const outroAnimation2 = keyframes({
    "0%": {
        transform: "translateY(0%) scaleX(1)",
    },
    "40%,60%": {
        transform: "translateY(0%) scaleX(0.05)",
    },
    "100%": {
        transform: "translateY(110%) scaleX(0.05)",
    },
});

export default styled("span")(({ theme }) => ({
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    borderRadius: "5px",
    "&#rect-one": {
        zIndex: 2,
        background: theme.palette.primary.main,
        "&.intro-1": {
            animation: `${introAnimation1} .5s .45s linear both`,
        },
        "&.intro-2": {
            animation: `${introAnimation2} .5s .45s linear both`,
        },
        "&.outro-1": {
            animation: `${outroAnimation1} .5s .3s linear both`,
        },
        "&.outro-2": {
            animation: `${outroAnimation2} .5s .3s linear both`,
        },
    },
    "&#rect-two": {
        zIndex: 1,
        background: theme.palette.secondary.main,
        "&.intro-1": {
            animation: `${introAnimation1} .5s .3s linear both`,
        },
        "&.intro-2": {
            animation: `${introAnimation2} .5s .3s linear both`,
        },
        "&.outro-1": {
            animation: `${outroAnimation1} .5s .45s linear both`,
        },
        "&.outro-2": {
            animation: `${outroAnimation2} .5s .45s linear both`,
        },
    },
}));
