// Tools
import { COLORS } from "@/material";
import { keyframes } from "@mui/material";

export const ContentAppearing_StageOne = keyframes({
    from: {
        width: "0%",
        right: "auto",
        left: "0",
    },
    to: {
        width: "100%",
        right: "auto",
        left: "0",
    },
});

export const ContentAppearing_StageTwo = keyframes({
    from: {
        height: "100%",
        top: "auto",
        bottom: "0",
    },
    to: {
        height: "0%",
        top: "auto",
        bottom: "0",
    },
});

export const Redirect_BackgroundColor = keyframes({
    from: {
        background: "transparent",
    },
    to: {
        background: COLORS.primary,
    },
});

export const BackgroundBarAppearing = keyframes({
    from: {
        transform: "scaleX(0)",
        transformOrigin: "left",
    },
    to: {
        transform: "scaleX(1)",
        transformOrigin: "left",
    },
});
