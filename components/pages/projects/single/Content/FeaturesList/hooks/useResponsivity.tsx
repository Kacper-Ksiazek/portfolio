// Tools
import { useMemo } from "react";
import useWindowSizes from "@/hooks/useWindowSizes";

interface UseResponsivity {
    heightOfOneFeature: number;
    amountOfFeaturesInOneRow: number;
}

export const useResponsivity = (): UseResponsivity => {
    const { width, height } = useWindowSizes();

    const amountOfFeaturesInOneRow = useMemo<number>(() => {
        if (width > 1450) return 5;
        else if (width > 1200) return 4;
        else if (width > 700) return 3;
        else if (width > 450) return 2;
        return 1;
    }, [width]);

    const heightOfOneFeature = useMemo<number>(() => {
        if (width > 900) return 200;
        else if (width > 840) return 190;
        else if (width > 760) return 180;
        else if (width > 700) return 170;
        else if (width > 620) return 200;
        else if (width > 600) return 190;
        else if (width > 450) return 180;
        return 240;
    }, [width]);

    return { amountOfFeaturesInOneRow, heightOfOneFeature };
};
