// Tools
import { styled } from "@mui/material";
import { fadeSimpleOUT } from "@/components/keyframes/outro";
// Types
import type { SxProps } from "@mui/material";
// Styled components
const DEFAULT_DELAY = 300;
const DELAY_BETWEEN_ELEMENTS = 50;

const applyAnimationDelay = (elementsInTotal: number): SxProps => {
    const result: any = {};
    for (let i = 1; i <= elementsInTotal; i++) {
        result[`&:nth-of-type(${i}), &:nth-of-type(${elementsInTotal * 2 - i + 1})`] = {
            animationDelay: `${DEFAULT_DELAY + i * DELAY_BETWEEN_ELEMENTS}ms !important`,
        };
    }
    result["&.intro-animation"] = {
        "span.question-mark, .hiding-mask": {
            animationDelay: `${DEFAULT_DELAY + elementsInTotal * DELAY_BETWEEN_ELEMENTS + 500}ms !important`,
        },
    };

    return result;
};

export default styled("section")(({ theme }) => ({
    display: "grid",
    gap: "6px",
    maxWidth: "900px",
    paddingBottom: "32px",
    width: "100%",
    position: "relative",
    "&.exiting": {
        animation: `${fadeSimpleOUT} .3s linear both`,
        "&+#pictures-matching-progress-wrapper": {
            animation: `${fadeSimpleOUT} .2s linear both !important`,
        },
    },
    "@media (max-width:500px)": {
        gap: "3px",
    },
    "&.EASY": {
        maxWidth: "600px",
        gridTemplateColumns: "repeat(4, 1fr)",
        gridTemplateRows: "repeat(2, fr)",
        ".single-picture": {
            ...applyAnimationDelay(4),
        },
        "@media (max-width:500px)": {
            gridTemplateColumns: "repeat(6, 1fr)",
            gridTemplateRows: "repeat(6, 1fr)",
            ".single-picture": {
                gridColumnEnd: "span 2",
                gridRowEnd: "span 2",
                "&:nth-of-type(7)": {
                    gridColumnStart: "2",
                },
            },
        },
    },
    "&.MEDIUM": {
        gridTemplateColumns: "repeat(6, 1fr)",
        gridTemplateRows: "repeat(2, 1fr)",
        ".single-picture": {
            ...applyAnimationDelay(6),
        },
        "@media (max-width:700px)": {
            gridTemplateColumns: "repeat(4, 1fr)",
            gridTemplateRows: "repeat(3, 1fr)",
        },
        "@media (max-width:500px)": {
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "repeat(4, 1fr)",
        },
    },
    "&.HARD": {
        maxWidth: "940px",
        ".single-picture": {
            ...applyAnimationDelay(12),
        },
        gridTemplateColumns: "repeat(8, 1fr)",
        gridTemplateRows: "repeat(3, 1fr)",
        "@media (max-width:800px)": {
            gridTemplateColumns: "repeat(6, 1fr)",
            gridTemplateRows: "repeat(4, 1fr)",
        },
        "@media (max-width:500px)": {
            gridTemplateColumns: "repeat(4, 1fr)",
            gridTemplateRows: "repeat(6, 1fr)",
        },
    },
    "&.INSANE": {
        ".single-picture": {
            ...applyAnimationDelay(20),
        },
        gridTemplateColumns: "repeat(8, 1fr)",
        gridTemplateRows: "repeat(5, 1fr)",
        "@media (max-width:650px)": {
            gridTemplateColumns: "repeat(5, 1fr)",
            gridTemplateRows: "repeat(8, 1fr)",
        },
        "@media (max-width:420px)": {
            gridTemplateColumns: "repeat(4, 1fr)",
            gridTemplateRows: "repeat(10, 1fr)",
        },
    },
}));
