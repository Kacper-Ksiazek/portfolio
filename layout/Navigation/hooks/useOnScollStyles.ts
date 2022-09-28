// Tools
import { useEffect, useCallback, useState } from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default (): boolean => {
    const [applyOnScrollStyles, setApplyOnScrollStyles] = useState<boolean>(false);

    const handleOnScroll = useCallback(() => {
        if (scrollY >= 70 && !applyOnScrollStyles) setApplyOnScrollStyles(true);
        else if (scrollY < 70 && applyOnScrollStyles) setApplyOnScrollStyles(false);
    }, [applyOnScrollStyles]);

    useEffect(() => {
        window.addEventListener("scroll", handleOnScroll);
        return () => {
            window.removeEventListener("scroll", handleOnScroll);
        };
    }, [handleOnScroll]);

    return applyOnScrollStyles;
};
