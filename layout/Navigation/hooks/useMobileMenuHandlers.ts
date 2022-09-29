// Tools
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import useWindowSizes from "@/hooks/useWindowSizes";
import useBlockUserScroll from "@/hooks/useBlockUserScroll";
// Types

type Status = "opened" | "closed" | null;

interface UseMobileMenuHandlerResult {
    status: Status;
    renderMobileMenuButton: boolean;
    toogleVisibility: () => void;
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

    const toogleVisibility = () => {
        if (status === "opened") {
            setStatus("closed");
            enableUserScroll();
        } else {
            disableUserScroll();
            setStatus("opened");
        }
    };

    return {
        status,
        renderMobileMenuButton: width <= 1000,
        //
        toogleVisibility,
    };
};
