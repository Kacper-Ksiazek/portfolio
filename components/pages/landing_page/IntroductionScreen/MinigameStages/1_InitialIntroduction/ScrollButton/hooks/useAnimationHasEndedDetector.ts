// Tools
import { useState, useEffect } from "react";

interface UseAnimationHasEndedDetectorResult {
    introAnimationHadEnded: boolean;
}

const SCROLL_BUTTON_INTRO_ANIMATION_DURATION: TimeInMS = 1800;

export function useAnimationHasEndedDetector(): UseAnimationHasEndedDetectorResult {
    const [introAnimationHadEnded, setIntroAnimationHadEnded] = useState<boolean>(false);

    useEffect(() => {
        setIntroAnimationHadEnded(false);
        const timeout: ReturnType<typeof setTimeout> = setTimeout(() => {
            setIntroAnimationHadEnded(true);
        }, SCROLL_BUTTON_INTRO_ANIMATION_DURATION);

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    return {
        introAnimationHadEnded,
    };
}
