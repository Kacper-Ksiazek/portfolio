// Tools
import { styled } from "@mui/material";
import { SELECTORS } from "../css_references";
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
        maxHeight: "300px",
        "@media (max-width:770px)": {
            maxHeight: "540px",
            [SELECTORS.LABEL_PICKER_SELECT]: {
                flexGrow: 1,
            },
        },
        "@media (max-width:700px)": {
            [SELECTORS.FORM_FIELDS_WRAPPER]: {
                flexWrap: "wrap",
            },
            // Row 1:
            [SELECTORS.URGENCY_SWITCH]: {
                width: "124px",
            },
            [SELECTORS.DUE_DATE_PICKER]: {
                width: "calc(100% - 124px - 8px)",
            },
            // Row 2:
            [SELECTORS.LABEL_PICKER_SELECT]: {
                margin: "8px 0 0 0 !important",
                width: "calc(100% - 8px - 42px)",
            },

            [SELECTORS.LABEL_PICKER_ADD_NEW_TASK_BUTTON]: {
                margin: "8px 0 0 8px",
                width: "42px",
            },
        },
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
