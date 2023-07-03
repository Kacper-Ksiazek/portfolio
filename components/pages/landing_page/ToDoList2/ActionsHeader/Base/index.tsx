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
        maxHeight: "312px",
        "@media (max-width:770px)": {
            maxHeight: "540px",
            [SELECTORS.FORM_FIELDS.LABEL_PICKER.SELECT]: {
                flexGrow: 1,
            },
        },
        "@media (max-width:700px)": {
            maxHeight: "564px",
            [SELECTORS.FORM_FIELDS.WRAPPER]: {
                flexWrap: "wrap",

                // Row 1:
                [SELECTORS.FORM_FIELDS.URGENCY_SWITCH]: {
                    width: "124px",
                },
                [SELECTORS.FORM_FIELDS.DUE_DATE_PICKER]: {
                    width: "calc(100% - 124px - 8px)",
                },
                // Row 2:
                [SELECTORS.FORM_FIELDS.LABEL_PICKER.SELECT]: {
                    margin: "8px 0 0 0 !important",
                    width: "calc(100% - 8px - 42px)",
                },

                [SELECTORS.FORM_FIELDS.LABEL_PICKER.ADD_NEW_TASK_BUTTON]: {
                    margin: "8px 0 0 8px",
                    width: "42px",
                },
            },

            [SELECTORS.BUTTONS.WRAPPER]: {
                width: "100%",
                marginTop: "32px !important",
                [SELECTORS.BUTTONS.ADD_NEW_TASK]: {
                    flexGrow: 1,
                },
            },
        },

        "@media (max-width:500px)": {
            maxHeight: "616px",
            [SELECTORS.BUTTONS.WRAPPER]: {
                flexWrap: "wrap",
                [SELECTORS.BUTTONS.ADD_NEW_TASK]: {
                    width: "100%",
                    margin: "0 0 8px 0",
                },
                [SELECTORS.BUTTONS.HIDE_PANEL]: {
                    width: "100%",
                },
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
