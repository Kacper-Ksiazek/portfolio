// Tools
import { useState, useCallback } from "react";
// Types
interface UseBlockUserScrollResult {
    disableUserScroll: () => any;
    enableUserScroll: () => any;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (): UseBlockUserScrollResult => {
    const [formerScollY, setFormerScollY] = useState<number | null>(null);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const disableUserScroll = useCallback(
        onlyOnLoadedDOM(() => {
            if (formerScollY !== null) return;

            setFormerScollY(window.scrollY);

            document.body.style.top = `-${window.scrollY}px`; // ⚠️ This style has to be wrtitten first!
            document.body.style.position = "fixed";
        }),
        []
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const enableUserScroll = useCallback(
        onlyOnLoadedDOM(() => {
            if (formerScollY === null) return;

            document.body.style.top = "0";
            document.body.style.position = "static";

            window.scrollTo({ top: formerScollY });
            setFormerScollY(null);
        }),
        []
    );

    return { disableUserScroll, enableUserScroll };
};

/**
 * Ensures that **DOM** has been loaded and is available for usage
 */
const onlyOnLoadedDOM = (fn: any): (() => any) => {
    return () => {
        if (window && document && document.body) {
            fn();
        }
    };
};
