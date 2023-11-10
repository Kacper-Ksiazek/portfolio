// Tools
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSimpleReducer } from "@/hooks/useSimpleReducer";
import { blockUserScroll, shouldSkipAnimation, unlockUserScroll } from "./_utils";

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
            }, 2800);

            setTimeout(unlockUserScroll, 3200);
        }
    }, [router.query, updateState]);

    return {
        displayAnimations,
        renderContent,
    };
}
