// Tools
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSimpleReducer } from "@/hooks/useSimpleReducer";
import { blockUserScroll, shouldSkipAnimation, unlockUserScroll } from "./_utils";
// Constants
import { LINES_INTRO_ANIMATION_DURATION, TIME_TO_UNLOCK_SCROLL } from "./constatns";

interface IntroAnimationControlsReducer {
    renderContent: boolean;
    displayAnimations: boolean;
}

export function useIntroAnimationControls(): IntroAnimationControlsReducer {
    const router = useRouter();

    const [{ displayAnimations, renderContent }, updateState] = useSimpleReducer<IntroAnimationControlsReducer>({
        renderContent: false,
        displayAnimations: true,
    });

    useEffect(() => {
        if (!window || !document || !document.body) return;

        if (shouldSkipAnimation(router.query)) {
            updateState({
                renderContent: true,
                displayAnimations: false,
            });
        } else {
            blockUserScroll();
            updateState({ displayAnimations: true });

            setTimeout(() => {
                updateState({ renderContent: true });
            }, LINES_INTRO_ANIMATION_DURATION);

            setTimeout(unlockUserScroll, TIME_TO_UNLOCK_SCROLL);
        }
    }, [router.query, updateState]);

    return {
        displayAnimations,
        renderContent,
    };
}
