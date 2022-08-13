// Tools
import { fadeFromLeft, fadeFromRight } from "./_keyframes";
import { distinguishAnimationDelay } from "./distinguishAnimationDelay";
// Types
import type { SxProps } from "@mui/system";
import type { ExtendedPairOfIcons } from "./@types";

/**
 * Generate css styles based on `nth-of-type` approach.
 * Takes indexes of two icons and then position them equaly on one horizontal line.
 */
export const handleSinglePair = (props: ExtendedPairOfIcons): SxProps => {
    const { leftSide, rightSide, y, x } = props;

    return {
        [`&:nth-of-type(${leftSide}), &:nth-of-type(${rightSide})`]: {
            top: `${y}px`,
        },
        [`&:nth-of-type(${leftSide})`]: {
            left: `-${x}px`,
            animation: `${fadeFromRight} .3s ${distinguishAnimationDelay(leftSide)} linear both`,
        },
        [`&:nth-of-type(${rightSide})`]: {
            right: `-${x}px`,
            animation: `${fadeFromLeft} .3s ${distinguishAnimationDelay(leftSide)} linear both`,
        },
    };
};
