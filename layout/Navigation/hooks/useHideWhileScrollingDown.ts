// Tools
import { useEffect, useCallback, useState, useRef } from "react";

const HIDING_AVOIDING_THRESHOLD = 400;

interface UseHideWhileScrollingDownResult {
    hideNavigaton: boolean;
    scrollingAnimationToDisplay: null | "intro" | "outro";
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (): UseHideWhileScrollingDownResult => {
    const OUTRO_ANIMATION_DURATION: number = 300; // in ms

    const previousScrollY = useRef<number>(0);
    const [hideNavigaton, setHideNavigaton] = useState<boolean>(false);
    const [scrollingAnimationToDisplay, setScrollingAnimationToDisplay] = useState<null | "intro" | "outro">(null);

    const handleOnScroll = useCallback(() => {
        // Page has not been already loaded case
        if (previousScrollY.current === null) {
            previousScrollY.current = scrollY;
            return;
        }
        // Hide currently displaying navigation bar
        if (previousScrollY.current < scrollY && !hideNavigaton && scrollY > HIDING_AVOIDING_THRESHOLD && scrollingAnimationToDisplay !== "outro") {
            setScrollingAnimationToDisplay("outro");
            setTimeout(() => {
                setHideNavigaton(true);
            }, OUTRO_ANIMATION_DURATION);
        }
        // Display hidden navigation bar again
        else if (previousScrollY.current > scrollY && hideNavigaton && scrollingAnimationToDisplay === "outro") {
            setHideNavigaton(false);
            setTimeout(() => {
                setScrollingAnimationToDisplay("intro");
            }, 100);
        }
        previousScrollY.current = scrollY;
    }, [hideNavigaton, scrollingAnimationToDisplay]);

    useEffect(() => {
        window.addEventListener("scroll", handleOnScroll);
        return () => {
            window.removeEventListener("scroll", handleOnScroll);
        };
    }, [handleOnScroll]);

    return { hideNavigaton, scrollingAnimationToDisplay };
};
