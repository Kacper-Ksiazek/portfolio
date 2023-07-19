// This file is used by ../../Base

// Tools
import { SELECTORS } from "./css_references";
// Types
import type { SxProps } from "@mui/material";

export default {
    "@media (max-width:770px)": {
        [SELECTORS.FORM_FIELDS.LABEL_PICKER.SELECT]: {
            flexGrow: 1,
        },
    },

    "@media (max-width:700px)": {
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
            marginTop: "26px !important",
            [SELECTORS.BUTTONS.ADD_NEW_TASK]: {
                flexGrow: 1,
            },
        },
    },

    "@media (max-width:500px)": {
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
} as SxProps;
