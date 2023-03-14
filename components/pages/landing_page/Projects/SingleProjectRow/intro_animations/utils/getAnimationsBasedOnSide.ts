// Tools
import { rectangles, scale } from "../_keyframes";
// Types
import type { Animation } from "../@types";

interface AnimationsOrganizer {
    intro: Animation;
    outro: Animation;
}

interface AnimationsBasedOnSide {
    thumbnail: AnimationsOrganizer;
    content: AnimationsOrganizer;
}

export function getAnimationsBasedOnSide(side: "left" | "right"): AnimationsBasedOnSide {
    const thumbnail: Required<AnimationsOrganizer> = {
        intro: rectangles.intro[side === "left" ? "leftSide" : "rightSide"],
        outro: side === "left" ? scale.outro.toLeft : scale.outro.toRight,
    };

    const content: Required<AnimationsOrganizer> = {
        intro: side === "left" ? scale.intro.fromRight : scale.intro.fromLeft,
        outro: rectangles.outro[side === "left" ? "leftSide" : "rightSide"],
    };

    return { thumbnail, content };
}
