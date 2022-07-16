// Tools
import { useState } from "react";

interface UseFullscreenResult {
    handleFullsizeToggle: () => void;
    isFullscreenOpened: boolean;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (): UseFullscreenResult => {
    const [fullscreen, setFullscreen] = useState<boolean>(false);
    const [scrollYWhileOpeningFullscreen, setScrollYWhileOpeningFullscreen] = useState<number>(0);

    const handleFullsizeToggle = () => {
        if (!fullscreen) {
            setScrollYWhileOpeningFullscreen(window.scrollY);
            setFullscreen(true);
            document.body.requestFullscreen();
        } else {
            document.exitFullscreen();
            setFullscreen(false);
            setTimeout(() => {
                scrollTo({
                    top: scrollYWhileOpeningFullscreen,
                    left: 0,
                });
            }, 1);
        }
    };

    return {
        handleFullsizeToggle,
        isFullscreenOpened: fullscreen,
    };
};
