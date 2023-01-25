// Tools
import { useRouter } from "next/router";
import { useCallback, useEffect, useRef } from "react";
import { useMainNavigationBarContext } from "@/hooks/useMainNavigation";
// Types
interface UseBlockUserScrollResult {
    disableUserScroll: () => any;
    enableUserScroll: () => any;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (): UseBlockUserScrollResult => {
    const router = useRouter();
    const { blockOnScroll } = useMainNavigationBarContext();

    const formerScollY = useRef<number | null>(null);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const disableUserScroll = useCallback(
        onlyOnLoadedDOM(() => {
            if (formerScollY.current !== null) return;
            formerScollY.current = window.scrollY;

            document.body.style.top = `-${window.scrollY}px`; // ⚠️ This style has to be wrtitten first!
            document.body.style.position = "fixed";
        }),
        []
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const enableUserScroll = useCallback(
        onlyOnLoadedDOM(() => {
            if (formerScollY.current === null) return;

            blockOnScroll({ time: 100 });
            document.body.style.top = "0";
            document.body.style.position = "static";

            window.scrollTo({ top: formerScollY.current });

            formerScollY.current = null;
        }),
        []
    );

    useEffect(() => {
        document.body.style.top = "0";
        document.body.style.position = "static";
        formerScollY.current = null;
    }, [router.asPath]);

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
