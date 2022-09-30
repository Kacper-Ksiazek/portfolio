// Tools
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useMainNavigationBarContext } from "@/hooks/useMainNavigation";
// Types
import type { FunctionComponent } from "react";

const ScrollTOParticularSection: FunctionComponent = (props) => {
    const router = useRouter();
    const { showNavigationBar } = useMainNavigationBarContext();

    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout> | null = null;

        if (router.query.scrollToElement) {
            const el = document.getElementById(router.query.scrollToElement as string);

            showNavigationBar({ keepNavigationVisibleFor: 800 });
            timeout = setTimeout(() => {
                if (el) {
                    window.scrollTo(0, el.getBoundingClientRect().top + window.pageYOffset - 80);
                }
            }, 50);
        }

        return () => {
            if (timeout !== null) clearTimeout(timeout);
        };
    }, [router.query, showNavigationBar]);

    return <></>;
};

export default ScrollTOParticularSection;
