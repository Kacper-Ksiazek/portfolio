// Tools
import { keyframes } from "@mui/system";

export const introScaleYFromTop = keyframes({
    from: {
        height: "0%",
    },
    to: {
        height: "100%",
    },
});
export const outroScaleXToRight = keyframes({
    from: {
        left: "auto",
        right: 0,
        width: "100%",
    },
    to: {
        left: "auto",
        right: 0,
        width: "0%",
    },
});
export const outroScaleXToLeft = keyframes({
    from: {
        right: "auto",
        left: 0,
        width: "100%",
    },
    to: {
        right: "auto",
        left: 0,
        width: "0%",
    },
});

export const introScaleXFromRight = keyframes({
    from: {
        left: "auto",
        right: 0,
        width: "0%",
    },
    to: {
        left: "auto",
        right: 0,
        width: "100%",
    },
});
export const introScaleXFromLeft = keyframes({
    from: {
        right: "auto",
        left: 0,
        width: "0%",
    },
    to: {
        right: "auto",
        left: 0,
        width: "100%",
    },
});
