// Tools
import { useResponsivity } from "./useResponsivity";
import { useState, useMemo, useCallback, MutableRefObject } from "react";
// Types
import type { SxProps } from "@mui/material";
import type { Feature } from "@/@types/prisma/Project";

interface UseFeatureListManagement {
    wrapperExtraCSS: SxProps;
    featuresToDisplay: Feature[];
    allFeaturesAreShown: boolean;
    featuresAnimation: "features-intro" | "features-outro";
    amountOfFeaturesInOneRow: number;

    showMore: () => void;
    showLess: () => void;
}

export const useFeatureListManagement = (allFeatures: Feature[], featuresWrapper: MutableRefObject<HTMLDivElement | null>): UseFeatureListManagement => {
    const { amountOfFeaturesInOneRow, heightOfOneFeature } = useResponsivity();

    const [displayAllFeatures, setDisplayAllFeatures] = useState<boolean>(false);
    const [featuresAnimation, setFeaturesAnimation] = useState<UseFeatureListManagement["featuresAnimation"]>("features-outro");

    const featuresToDisplay = useMemo<Feature[]>(() => {
        return displayAllFeatures ? allFeatures : allFeatures.slice(0, amountOfFeaturesInOneRow);
    }, [displayAllFeatures, allFeatures, amountOfFeaturesInOneRow]);

    const showMore = () => {
        setFeaturesAnimation("features-intro");
        setDisplayAllFeatures(true);
    };
    const showLess = useCallback(() => {
        const wrapper = featuresWrapper.current;

        if (wrapper) {
            const BOTTOM_OFFSET: number = 200;

            window.scrollTo({
                behavior: "smooth",
                left: 0,
                top:
                    wrapper.offsetTop + //
                    (wrapper.offsetParent as HTMLDivElement).offsetTop +
                    ((wrapper.offsetParent as HTMLDivElement).offsetParent as HTMLDivElement).offsetTop -
                    BOTTOM_OFFSET,
            });
        }

        setFeaturesAnimation("features-outro");
        setTimeout(() => setDisplayAllFeatures(false), 501);
    }, [featuresWrapper]);

    const wrapperExtraCSS = useMemo<SxProps>(() => {
        if (!displayAllFeatures) return { maxHeight: `${heightOfOneFeature}px` };

        const amountOfRows: number = Math.ceil(allFeatures.length / amountOfFeaturesInOneRow);
        const totalRowsHeight: number = amountOfRows * heightOfOneFeature;
        const totalMargin: number = 20 * (amountOfRows - 1);

        return {
            maxHeight: `${totalRowsHeight + totalMargin}px`,
        };
    }, [displayAllFeatures, amountOfFeaturesInOneRow, allFeatures, heightOfOneFeature]);

    return {
        wrapperExtraCSS,
        featuresToDisplay, //
        allFeaturesAreShown: displayAllFeatures,
        featuresAnimation,
        amountOfFeaturesInOneRow,

        showLess,
        showMore,
    };
};
