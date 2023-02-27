// Tools
import { keyframes } from "@mui/material";
// Types
import type { AnimationName, Orientation, Direction } from "./@types";

export function getAnimation(orientation: Orientation, direction: Direction): ReturnType<typeof keyframes> {
    return ANIMATIONS[`${orientation}_${direction}`];
}

export const ANIMATIONS: Record<AnimationName | "CONTENT_APPEARING", ReturnType<typeof keyframes>> = {
    CONTENT_APPEARING: keyframes({
        from: {
            visibility: "hidden",
        },
        to: {
            visibility: "visible",
        },
    }),

    TO_RIGHT: keyframes({
        from: {
            transform: "scaleX(1)",
            transformOrigin: "right",
        },
        to: {
            transform: "scaleX(0)",
            transformOrigin: "right",
        },
    }),

    TO_LEFT: keyframes({
        from: {
            transformOrigin: "left",
            transform: "scaleX(1)",
        },
        to: {
            transform: "scaleX(0)",
            transformOrigin: "left",
        },
    }),

    TO_TOP: keyframes({
        from: {
            transformOrigin: "top",
            transform: "scaleY(1)",
        },
        to: {
            transform: "scaleY(0)",
            transformOrigin: "top",
        },
    }),

    TO_BOTTOM: keyframes({
        from: {
            transformOrigin: "bottom",
            transform: "scaleY(1)",
        },
        to: {
            transform: "scaleY(0)",
            transformOrigin: "bottom",
        },
    }),

    FROM_BOTTOM: keyframes({
        from: {
            transformOrigin: "bottom",
            transform: "scaleY(0)",
        },
        to: {
            transform: "scaleY(1)",
            transformOrigin: "bottom",
        },
    }),

    FROM_TOP: keyframes({
        from: {
            transformOrigin: "top",
            transform: "scaleY(0)",
        },
        to: {
            transform: "scaleY(1)",
            transformOrigin: "top",
        },
    }),

    FROM_LEFT: keyframes({
        from: {
            transformOrigin: "left",
            transform: "scaleX(0)",
        },
        to: {
            transform: "scaleX(1)",
            transformOrigin: "left",
        },
    }),

    FROM_RIGHT: keyframes({
        from: {
            transformOrigin: "right",
            transform: "scaleX(0)",
        },
        to: {
            transform: "scaleX(1)",
            transformOrigin: "right",
        },
    }),
};
