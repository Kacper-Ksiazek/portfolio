// Tools
import { useEffect, useCallback, useState } from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default (): boolean => {
    const [applyAfterScrollStyles, setApplyAfterScrollStyles] = useState<boolean>(false);

    const handleOnScroll = useCallback(() => {
        if (scrollY >= 70 && !applyAfterScrollStyles) setApplyAfterScrollStyles(true);
        else if (scrollY < 70 && applyAfterScrollStyles) setApplyAfterScrollStyles(false);
    }, [applyAfterScrollStyles]);

    useEffect(() => {
        window.addEventListener("scroll", handleOnScroll);
        return () => {
            window.removeEventListener("scroll", handleOnScroll);
        };
    }, [handleOnScroll]);

    return applyAfterScrollStyles;
};
