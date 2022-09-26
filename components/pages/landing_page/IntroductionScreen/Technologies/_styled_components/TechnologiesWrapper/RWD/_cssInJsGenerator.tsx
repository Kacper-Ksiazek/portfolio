// Types
import type { SxProps } from "@mui/system";

interface PlaceTechnologiesInsideWingParams {
    contentSidePadding: number;
    spacingBetweenColumns: number;
    nearest: number;
    middle: number;
    farest: number;
    technologySize: number;
}

export const placeItemsInsideWing = (params: PlaceTechnologiesInsideWingParams): SxProps => {
    const generateStylesForSingleWing = (wingType: "left" | "right") => {
        const nearestSelectors = {
            left: "&:nth-of-type(3) .technology:nth-of-type(3)",
            right: "&:nth-of-type(1) .technology:nth-of-type(3)",
        }[wingType];

        const middleSelectors = {
            left: [
                "&:nth-of-type(2) .technology:nth-of-type(2), &:nth-of-type(2) .technology:nth-of-type(3)", // Second column
                "&:nth-of-type(3) .technology:nth-of-type(2), &:nth-of-type(3) .technology:nth-of-type(4)", // Third column
            ].join(", "),
            right: [
                "&:nth-of-type(2) .technology:nth-of-type(2), &:nth-of-type(2) .technology:nth-of-type(3)", // Second column
                "&:nth-of-type(1) .technology:nth-of-type(2), &:nth-of-type(1) .technology:nth-of-type(4)", // Third column
            ].join(", "),
        }[wingType];

        const farestSelectors = {
            left: "&:nth-of-type(1) .technology:nth-of-type(2)",
            right: "&:nth-of-type(3) .technology:nth-of-type(2)",
        }[wingType];

        const handleTranslateX = (distance: number): string => `translateX(${wingType === "left" ? "-" : ""}${distance}px)`;

        return {
            [`.wing.${wingType}`]: {
                [wingType === "left" ? "paddingRight" : "paddingLeft"]: `${params.contentSidePadding}px`,
                justifyContent: wingType === "left" ? "flex-end" : "flex-start",
                ".column": {
                    ".technology": {
                        width: `${params.technologySize}px`,
                        height: `${params.technologySize}px`,
                    },
                    "&:not(&:nth-of-type(1))": {
                        marginLeft: `${params.spacingBetweenColumns}px`,
                    },
                    [nearestSelectors]: {
                        transform: handleTranslateX(params.nearest),
                    },
                    [middleSelectors]: {
                        transform: handleTranslateX(params.middle),
                    },
                    [farestSelectors]: {
                        transform: handleTranslateX(params.farest),
                    },
                },
            },
        };
    };

    return {
        ...generateStylesForSingleWing("left"),
        ...generateStylesForSingleWing("right"),
    };
};
