// This file is used by ../../Base

// Tools
import { SELECTORS } from "./css_references";
// Types
import type { SxProps } from "@mui/material";

export default {
    ".MuiTextField-root": {
        width: "100%",
        ".MuiOutlinedInput-root": {
            height: "42px",
        },
        input: { padding: "8px 12px" },
    },

    [SELECTORS.TITLE_INPUT]: {
        width: "calc(100% - 128px - 6px)",
    },
    [SELECTORS.URGENCY_SWITCH]: {
        width: "128px",
    },
    [SELECTORS.DESCRIPTION_INPUT]: {
        width: "100%",
    },
    [SELECTORS.LABEL_PICKER]: {
        flexGrow: 1,
    },

    "@media (max-width:700px)": {
        [SELECTORS.ADDITIONAL_INFORMATION_WRAPPER]: {
            flexWrap: "wrap",
            // Row 1:
            [SELECTORS.URGENCY_SWITCH]: {
                width: "124px",
            },
            [SELECTORS.DUE_DATE_PICKER]: {
                width: "calc(100% - 124px - 8px)",
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
