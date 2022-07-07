// Tools
import { useEffect, useState, useCallback } from "react";

const DISPLAY_SCROLLBUTTON_THRESHOLD = 200;

// eslint-disable-next-line import/no-anonymous-default-export
export default (): boolean => {
    const [displayButton, setDisplayButton] = useState<boolean>(false);

    const handleOnScroll = useCallback(() => {
        if (scrollY >= DISPLAY_SCROLLBUTTON_THRESHOLD && !displayButton) setDisplayButton(true);
        else if (scrollY < DISPLAY_SCROLLBUTTON_THRESHOLD && displayButton) setDisplayButton(false);
    }, [displayButton]);

    useEffect(() => {
        window.addEventListener("scroll", handleOnScroll);
        return () => {
            window.removeEventListener("scroll", handleOnScroll);
        };
    }, [handleOnScroll]);

    return displayButton;
};
