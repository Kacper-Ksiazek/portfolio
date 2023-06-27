// Tools
import { styled } from "@mui/material";
// Types
import type { ResponsiveHeightCSSClass } from "../hooks/useResponsiveHeight";
// Styled components
import SectionWrapper from "landing_page/ToDoList2/atoms/SectionWrapper";

export default styled(SectionWrapper)(({ theme }) => ({
    height: "400px",
    display: "flex",
    flexDirection: "column",
    transition: "max-height .3s",
    overflow: "hidden",

    [`&.${"DEFAULT_HEIGHT" as ResponsiveHeightCSSClass}`]: {
        maxHeight: "256px",
    },

    [`&.${"HIDDEN" as ResponsiveHeightCSSClass}`]: {
        maxHeight: "64px",
    },

    [`&.${"EXTENDED_HEIGHT" as ResponsiveHeightCSSClass}`]: {
        maxHeight: "400px",
    },
}));
