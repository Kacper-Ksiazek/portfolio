// Tools
import { styled } from "@mui/material";
import { SELECTORS } from "./css_references";
// Styled components
import SectionWrapper from "../atoms/SectionWrapper";

export default styled(SectionWrapper)(({ theme }) => ({
    gap: "8px",

    [SELECTORS.INTRO_ANIMATION_ELEMENT]: {
        "&>*": {
            width: "100%",
        },
    },

    ".MuiOutlinedInput-root": {
        height: "42px",
    },

    "@media (min-width:881px)": {
        display: "grid",
        gridTemplateColumns: "252px 190px 1fr 210px",
        gridTemplateRows: "1fr",
        [SELECTORS.AMOUNT_OF_TASKS]: {
            gridColumn: "1 / span 4",
        },
    },
    "@media (max-width:880px)": {
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
        [SELECTORS.SELECT._EVERY]: {
            width: "calc(50% - 4px)",
        },
        [SELECTORS.AMOUNT_OF_TASKS]: {
            width: "100%",
        },
    },

    "@media (max-width:540px)": {
        [SELECTORS.SELECT.LABEL]: {
            width: "calc(100% - 8px - 180px)",
        },
        [SELECTORS.SELECT.URGENCY_FILTER]: {
            width: "180px",
        },
    },

    "@media (max-width:450px)": {
        [SELECTORS.SELECT.LABEL]: {
            width: "100%",
        },
        [SELECTORS.SELECT.URGENCY_FILTER]: {
            width: "100%",
        },
    },
}));
