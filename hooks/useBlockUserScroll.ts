// Tools
import { useRouter } from "next/router";
import { useCallback, useEffect, useRef } from "react";
import { useMainNavigationBarContext } from "@/hooks/useMainNavigation";
import { useGeneralGlobalContext } from "./contexts/useGeneralGlobalContext";
// Types
interface UseBlockUserScrollResult {
    disableUserScroll: () => any;
    enableUserScroll: () => any;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (): UseBlockUserScrollResult => {
    const router = useRouter();
    const { blockOnScroll } = useMainNavigationBarContext();
    const { setUserScrollIsBlocked, _formerScrollY } = useGeneralGlobalContext();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const disableUserScroll = useCallback(
        onlyOnLoadedDOM(() => {
            if (_formerScrollY.current !== null) return;
            _formerScrollY.current = window.scrollY;

            document.body.style.top = `-${window.scrollY}px`; // ⚠️ This style has to be wrtitten first!
            document.body.style.position = "fixed";

            setUserScrollIsBlocked(true);
        }),
        []
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const enableUserScroll = useCallback(
        onlyOnLoadedDOM(() => {
            if (_formerScrollY.current === null) return;

            blockOnScroll({ time: 100 });
            document.body.style.top = "0";
            document.body.style.position = "static";

            window.scrollTo({ top: _formerScrollY.current });

            _formerScrollY.current = null;
            setUserScrollIsBlocked(false);
        }),
        []
    );

    useEffect(() => {
        document.body.style.top = "0";
        document.body.style.position = "static";
        _formerScrollY.current = null;
    }, [_formerScrollY, router.asPath]);

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
