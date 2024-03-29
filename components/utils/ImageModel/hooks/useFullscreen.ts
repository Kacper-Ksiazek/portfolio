// Tools
import { useState } from "react";

export interface UseFullscreenResult {
    handleFullsizeToggle: () => void;
    isFullscreenOpened: boolean;
}

// eslint-disable-next-line import/no-anonymous-default-export
export function useFullscreen(): UseFullscreenResult {
    const [fullscreen, setFullscreen] = useState<boolean>(false);
    const [scrollYWhileOpeningFullscreen, setScrollYWhileOpeningFullscreen] = useState<number>(0);

    const handleFullsizeToggle = () => {
        if (!fullscreen) {
            setScrollYWhileOpeningFullscreen(window.scrollY);
            setFullscreen(true);

            if (document) document.body.requestFullscreen();
        } else {
            if (document) document.exitFullscreen();

            setFullscreen(false);
            setTimeout(() => {
                scrollTo({
                    top: scrollYWhileOpeningFullscreen,
                    left: 0,
                });
            }, 50);
        }
    };

    return {
        handleFullsizeToggle,
        isFullscreenOpened: fullscreen,
    };
}
