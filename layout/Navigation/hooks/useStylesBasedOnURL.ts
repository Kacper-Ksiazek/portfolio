// Tools
import { useMemo } from "react";
import { useRouter } from "next/router";
import { URL_QUERY_NAME } from "@/components/pages/landing_page/IntroductionScreen/Base/hooks/useIntroAnimationControls/constans";

interface UseExceptionalIntroAnimations {
    /** Apply the set of styles which improves the contrast */
    improveContrast: boolean;
    /** CSS class which is corresponding to intro animation*/
    introAnimation: string;
}

type URL = "/" | "/projects/[id]";

export const useStylesBasedOnURL = (): UseExceptionalIntroAnimations => {
    const ROUTES_WITH_REVERSED_CONTRAST: string[] = ["/", "/projects/[id]"];

    const router = useRouter();

    const introAnimation = useMemo<string>(() => {
        switch (router.pathname as URL) {
            case "/": {
                if (router.query.hasOwnProperty(URL_QUERY_NAME)) {
                    return "intro-landing-page-but-faster";
                }
                return "intro-landing-page";
            }
            case "/projects/[id]": {
                return "intro-single-project";
            }
        }
    }, [router.pathname, router.query]);

    return {
        introAnimation,
        improveContrast: ROUTES_WITH_REVERSED_CONTRAST.includes(router.pathname),
    };
};
