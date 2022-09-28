// Tools
import { useMemo } from "react";
import { useRouter } from "next/router";
import fadeSimple from "@/components/keyframes/intro/fadeSimple";
import fadeFromTop from "@/components/keyframes/intro/fadeFromTop";
// Types
import type { SxProps } from "@mui/system";

interface UseExceptionalIntroAnimations {
    /** Apply the set of styles which improves the contrast */
    improveContrast: boolean;
    /** CSS class which is corresponding to intro animation*/
    introAnimation: SxProps;
}

type URL = "/" | "/projects/[id]";

export const useStylesBasedOnURL = (): UseExceptionalIntroAnimations => {
    const ROUTES_WITH_REVERSED_CONTRAST: string[] = ["/", "/projects/[id]"];

    const router = useRouter();

    const introAnimation = useMemo<SxProps>(() => {
        switch (router.pathname as URL) {
            case "/": {
                if (router.query.hasOwnProperty("skipIntroductionAnimationEvenThoughItsCool")) {
                    return { animation: `${fadeFromTop} .2s .8s both linear` };
                }
                return { animation: `${fadeFromTop} .2s 2.6s both linear` };
            }
            case "/projects/[id]": {
                return { animation: `${fadeSimple} .2s 3.3s both linear` };
            }
        }
    }, [router.pathname, router.query]);

    return {
        introAnimation,
        improveContrast: ROUTES_WITH_REVERSED_CONTRAST.includes(router.pathname),
    };
};
