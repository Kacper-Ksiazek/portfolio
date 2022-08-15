import { useState, useEffect } from "react";

interface Size {
    width: number;
    height: number;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (): Size => {
    const [windowSize, setWindowSize] = useState<Size>({
        width: 0,
        height: 0,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        if (window) {
            window.addEventListener("resize", handleResize);
            handleResize();
        }
        return () => {
            if (window) window.removeEventListener("resize", handleResize);
        };
    }, []);
    return windowSize;
};
