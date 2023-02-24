// Tools
import { useEffect, useState } from "react";

export function usePlayIntroAnimation(): boolean {
    const INTRO_ANIMATION_DURATION: number = 2000;
    const [playIntroAnimation, setPlayIntroAnimation] = useState<boolean>(true);

    useEffect(() => {
        const currentTimeout: ReturnType<typeof setTimeout> = setTimeout(() => {
            setPlayIntroAnimation(false);
        }, INTRO_ANIMATION_DURATION);

        return () => {
            clearTimeout(currentTimeout);
        };
    }, []);

    return playIntroAnimation;
}
