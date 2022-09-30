// Tools
import { useRouter } from "next/router";
import { useState, useCallback, useEffect } from "react";
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

    const [formerScollY, setFormerScollY] = useState<number | null>(null);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const disableUserScroll = useCallback(
        onlyOnLoadedDOM(() => {
            if (formerScollY !== null) return;
            setFormerScollY(window.scrollY);

            document.body.style.top = `-${window.scrollY}px`; // ⚠️ This style has to be wrtitten first!
            document.body.style.position = "fixed";
        }),
        [formerScollY]
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const enableUserScroll = useCallback(
        onlyOnLoadedDOM(() => {
            if (formerScollY === null) return;

            blockOnScroll({ time: 100 });
            document.body.style.top = "0";
            document.body.style.position = "static";

            window.scrollTo({ top: formerScollY });

            setFormerScollY(null);
        }),
        [formerScollY]
    );

    useEffect(() => {
        document.body.style.top = "0";
        document.body.style.position = "static";
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
