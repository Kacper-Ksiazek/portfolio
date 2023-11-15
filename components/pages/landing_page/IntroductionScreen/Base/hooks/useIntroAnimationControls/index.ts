// Tools
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { blockUserScroll, shouldSkipAnimation, unlockUserScroll } from "./_utils";
// Constants
import { LINES_INTRO_ANIMATION_DURATION, TIME_TO_UNLOCK_SCROLL } from "./constatns";

export type ContentToRender = "INTRODUCTION_SCREEN_CONTENT" | "INTRO_ANIMATIONS" | null;

interface UseIntroAnimationControlsResult {
    contentToRender: ContentToRender;
}

export function useIntroAnimationControls(): UseIntroAnimationControlsResult {
    const router = useRouter();

    const timeoutHasBeenSet = useRef<boolean>(false);
    const [contentToRender, setContentToRender] = useState<ContentToRender>(null);

    useEffect(() => {
        if (!window || !document || !document.body) return;

        // If the user has skipped the animation
        if (shouldSkipAnimation(router.query)) {
            setContentToRender("INTRODUCTION_SCREEN_CONTENT");
        }
        // Alternatively, but only if the animation has not started yet
        else if (timeoutHasBeenSet.current === false) {
            timeoutHasBeenSet.current = true;

            blockUserScroll();

            // Begin the animation
            setContentToRender("INTRO_ANIMATIONS");

            // Change the content to render after the animation is done
            setTimeout(() => {
                setContentToRender("INTRODUCTION_SCREEN_CONTENT");
            }, LINES_INTRO_ANIMATION_DURATION);

            // Unlock the user scroll after the animation is done
            setTimeout(unlockUserScroll, TIME_TO_UNLOCK_SCROLL);
        }
        // Otherwise, to nothing
    }, [router.query]);

    return {
        contentToRender,
    };
}
