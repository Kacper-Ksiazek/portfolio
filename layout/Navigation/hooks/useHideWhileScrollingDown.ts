// Tools
import { useEffect, useCallback, useState, useRef } from "react";

const HIDING_AVOIDING_THRESHOLD = 400;

// eslint-disable-next-line import/no-anonymous-default-export
export default (): boolean => {
    const previousScrollY = useRef<number>(0);
    const [hideNavigaton, setHideNavigaton] = useState<boolean>(false);

    const handleOnScroll = useCallback(() => {
        if (previousScrollY.current === null) {
            previousScrollY.current = scrollY;
            return;
        }
        if (previousScrollY.current < scrollY && !hideNavigaton && scrollY > HIDING_AVOIDING_THRESHOLD) setHideNavigaton(true);
        else if (previousScrollY.current > scrollY && hideNavigaton) setHideNavigaton(false);
        previousScrollY.current = scrollY;
        console.log(hideNavigaton);
    }, [hideNavigaton]);

    useEffect(() => {
        window.addEventListener("scroll", handleOnScroll);
        return () => {
            window.removeEventListener("scroll", handleOnScroll);
        };
    }, [handleOnScroll]);

    return hideNavigaton;
};
