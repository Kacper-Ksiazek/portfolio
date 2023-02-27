// Tools
import { COLORS } from "@/material";
import { keyframes } from "@mui/material";

export const ContentDisappearing_StageOne = keyframes({
    from: {
        height: "0%",
        top: "auto",
        bottom: "0",
    },
    to: {
        height: "100%",
        top: "auto",
        bottom: "0",
    },
});

export const ContentDisappearing_StageTwo = keyframes({
    from: {
        width: "100%",
        right: "auto",
        left: "0",
    },
    to: {
        width: "0%",
        right: "auto",
        left: "0",
    },
});

export const Redirect_BackgroundColor = keyframes({
    from: {
        background: COLORS.primary,
    },
    to: {
        background: "transparent",
    },
});

export const BackgroundBarDisappearing = keyframes({
    from: {
        transform: "scaleX(1)",
        transformOrigin: "left",
    },
    to: {
        transform: "scaleX(0)",
        transformOrigin: "left",
    },
});
