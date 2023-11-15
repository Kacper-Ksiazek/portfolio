// Tools
import { keyframes } from "@mui/material";
// Types
import type { Keyframes } from "@/@types/MUI";

interface GetKeyframesResult {
    introAnimationOne: Keyframes;
    outroAnimationOneVertical: Keyframes;
    outroAnimationOneHorizontal: Keyframes;
}

export function getKeyframes(initialHeight: string): GetKeyframesResult {
    const introAnimationOne = keyframes({
        "0%": {
            maxHeight: initialHeight,
            transform: "translate(calc(-100% - 20px - 50%), -50%)",
        },
        "40%,60%": {
            maxHeight: initialHeight,
            transform: "translate(-50%,-50%)",
        },
        "100%": {
            maxHeight: "100%",
            transform: "translate(-50%,-50%)",
        },
    });

    const outroAnimationOneVertical = keyframes({
        "0%": {
            width: "100%",
            transform: "translate(-50%,-50%)",
        },
        "40%,60%": {
            width: initialHeight,
            transform: "translate(-50%,-50%)",
        },
        "100%": {
            width: initialHeight,
            transform: "translate(-50%,calc(-50% + 100% + 20px))",
        },
    });

    const outroAnimationOneHorizontal = keyframes({
        "0%": {
            width: "100%",
            height: "100%",
            maxHeight: "100%",
            transform: "translate(-50%,-50%)",
        },
        "100%": {
            width: "100%",
            height: "100%",
            maxHeight: "100%",
            transform: "translate(-50%,calc(-50% + 100% + 20px))",
        },
    });

    return {
        introAnimationOne,
        outroAnimationOneVertical,
        outroAnimationOneHorizontal,
    };
}
