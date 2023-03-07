// Tools
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import useWindowSizes from "@/hooks/useWindowSizes";
import useBlockUserScroll from "@/hooks/useBlockUserScroll";
// Types
export type Status = "opened" | "closed" | "opened_without_animation" | "closed_without_animation" | null;

export type ToggleVisibilityParams = { skipAnimation?: boolean };
export type ToggleVisibility = (options?: ToggleVisibilityParams) => void;

interface UseMobileMenuHandlerResult {
    status: Status;
    renderMobileMenuButton: boolean;
    toogleVisibility: ToggleVisibility;
}

export const useMobileMenuHandlers = (): UseMobileMenuHandlerResult => {
    const router = useRouter();
    const { width } = useWindowSizes();
    const { disableUserScroll, enableUserScroll } = useBlockUserScroll();

    const [status, setStatus] = useState<UseMobileMenuHandlerResult["status"]>(null);

    useEffect(() => {
        if (width > 1000 && status !== null) setStatus(null);
    }, [width, status]);

    useEffect(() => {
        setStatus(null);
    }, [router.pathname]);

    function toogleVisibility(options?: ToggleVisibilityParams) {
        const skipAnimation: boolean = Boolean(options?.skipAnimation);

        if (status?.startsWith("opened")) {
            setStatus(skipAnimation ? "closed_without_animation" : "closed");
            enableUserScroll();
        } else {
            disableUserScroll();
            setStatus(skipAnimation ? "opened_without_animation" : "opened");
        }
    }

    return {
        status,
        renderMobileMenuButton: width <= 1000,
        //
        toogleVisibility,
    };
};
