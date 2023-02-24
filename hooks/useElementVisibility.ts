// Tools
import { useState, useEffect } from "react";
// Types
import type { RefObject } from "react";

export function useElementVisibility(ref: RefObject<Element>, onVisible: (() => void) | undefined): boolean {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([{ isIntersecting }], observer) => {
                if (isIntersecting) {
                    observer.unobserve(ref.current as any);
                    setIsVisible(true);

                    if (typeof onVisible === "function") onVisible();
                }
            },
            { rootMargin: "-200px" }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(ref.current);
            }
        };
    }, [ref, onVisible]);

    return isVisible;
}
