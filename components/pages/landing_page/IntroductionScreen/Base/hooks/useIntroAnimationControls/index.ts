// Tools
import { useRouter } from "next/router";
import useWindowSizes from "@/hooks/useWindowSizes";
import { useEffect, useRef, useState } from "react";
import { updateURLQueries } from "@/utils/client/updateURLQueries";
import { blockUserScroll, shouldSkipAnimation, unlockUserScroll } from "./_utils";
// Constants
import * as constans from "./constans";

export type ContentToRender = "INTRODUCTION_SCREEN_CONTENT" | "INTRO_ANIMATIONS" | null;

interface UseIntroAnimationControlsResult {
    contentToRender: ContentToRender;
}

export function useIntroAnimationControls(): UseIntroAnimationControlsResult {
    const router = useRouter();
    const { width } = useWindowSizes();

    const timeoutHasBeenSet = useRef<boolean>(false);
    const [contentToRender, setContentToRender] = useState<ContentToRender>(null);

    useEffect(() => {
        if (!window || !document || !document.body) return;

        const viewportIsSmall: boolean = width !== 0 && width < 1000;
        // If the user has skipped the animation
        if (shouldSkipAnimation(router.query) || viewportIsSmall) {
            const { REGULAR, SMALL_VIEWPORTS } = constans.CONTENT_RENDERING_DELAY_WHEN_LINES_ANIMATIONS_ARE_DISABLED;

            const timeoutDelay: TimeInMS = viewportIsSmall ? SMALL_VIEWPORTS : REGULAR;

            setTimeout(() => {
                setContentToRender("INTRODUCTION_SCREEN_CONTENT");
            }, timeoutDelay);
        }
        // Alternatively, but only if the animation has not started yet
        else if (timeoutHasBeenSet.current === false) {
            timeoutHasBeenSet.current = true;

            blockUserScroll();

            // Begin the animation
            setContentToRender("INTRO_ANIMATIONS");

            // Change the content to render after the animation is done
            setTimeout(() => {
                updateURLQueries({
                    [constans.URL_QUERY_NAME]: true,
                });
                setContentToRender("INTRODUCTION_SCREEN_CONTENT");
            }, constans.LINES_INTRO_ANIMATION_DURATION);

            // Unlock the user scroll after the animation is done
            setTimeout(unlockUserScroll, constans.TIME_TO_UNLOCK_SCROLL);
        }
        // Otherwise, to nothing
    }, [router, router.query, width]);

    return {
        contentToRender,
    };
}
