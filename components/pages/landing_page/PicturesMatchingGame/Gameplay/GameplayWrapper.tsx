// Tools
import { styled } from "@mui/system";
// Types
import type { SxProps } from "@mui/system";
// Styled components
const DEFAULT_DELAY = 100;
const DELAY_BETWEEN_ELEMENTS = 50;

const applyAnimationDelay = (elementsInTotal: number): SxProps => {
    const result: any = {};
    for (let i = 1; i <= elementsInTotal; i++) {
        result[`&:nth-of-type(${i}), &:nth-of-type(${elementsInTotal * 2 - i + 1})`] = {
            animationDelay: `${DEFAULT_DELAY + i * DELAY_BETWEEN_ELEMENTS}ms !important`,
        };
    }
    result["&.intro-animation"] = {
        "span.question-mark, &::after, &::before": {
            animationDelay: `${DEFAULT_DELAY + elementsInTotal * DELAY_BETWEEN_ELEMENTS + 500}ms !important`,
        },
    };

    return result;
};

export default styled("section")(({ theme }) => ({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    maxWidth: "900px",
    paddingBottom: "32px",
    "&.EASY": {
        maxWidth: "600px",
        ".single-picture": {
            width: "140px",
            height: "140px",
            ...applyAnimationDelay(4),
        },
    },
    "&.MEDIUM": {
        ".single-picture": {
            width: "130px",
            height: "130px",
            ...applyAnimationDelay(6),
        },
    },
    "&.HARD": {
        maxWidth: "940px",
        ".single-picture": {
            width: "110px",
            height: "110px",
            ...applyAnimationDelay(12),
        },
    },
    "&.INSANE": {
        ".single-picture": {
            ...applyAnimationDelay(20),
        },
    },
}));
