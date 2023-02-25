// Tools
import { useMemo } from "react";
import useWindowSizes from "@/hooks/useWindowSizes";

interface UseResponsiveAmountsResult {
    numberOfTechnologiesToDisplay: number;
    numberOfProjectsToDisplay: number;
    width: number;
}

export function useResponsiveAmounts(): UseResponsiveAmountsResult {
    const { width } = useWindowSizes();

    const numberOfProjectsToDisplay = useMemo<number>(() => {
        if (width > 1300) return 3;
        if (width > 680) return 2;
        return 1;
    }, [width]);

    const numberOfTechnologiesToDisplay = useMemo<number>(() => {
        if (width > 680 && width < 850) return 4;
        if (width <= 680 && width >= 480) return 6;
        if (width > 400) return 5;
        return 4;
    }, [width]);

    return { numberOfProjectsToDisplay, numberOfTechnologiesToDisplay, width };
}
