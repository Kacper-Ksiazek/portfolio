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

    "@media (max-width:770px)": {
        height: "620px",
    },
    [`&.${"PROGRESS_TRACKER" as ResponsiveHeightCSSClass}`]: {
        maxHeight: "256px",
        "@media (max-width:770px)": {
            maxHeight: "440px",
        },
        "@media (max-width:660px)": {
            maxHeight: "620px",
        },
    },

    [`&.${"ADD_NEW_TASK" as ResponsiveHeightCSSClass}`]: {
        maxHeight: "256px",
    },

    [`&.${"HIDDEN" as ResponsiveHeightCSSClass}`]: {
        maxHeight: "64px",
        "@media (max-width:770px)": {
            maxHeight: "244px",
        },
    },

    [`&.${"EDIT_LABELS" as ResponsiveHeightCSSClass}`]: {
        maxHeight: "400px",
    },
}));
