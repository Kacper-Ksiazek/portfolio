// This file is used by ../../Base

// Tools
import { SELECTORS } from "./css_references";
// Types
import type { SxProps } from "@mui/material";

export default {
    ".MuiTextField-root": {
        width: "100%",
        ".MuiOutlinedInput-root": {
            "&:not(&.MuiInputBase-multiline)": {
                height: "42px",
            },
            "&.MuiInputBase-multiline": {
                height: "82px",
            },
        },
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

    "@media (min-width:1001px)": {
        [SELECTORS.TITLE_INPUT]: {
            width: "calc(100% - 128px - 6px)",
        },
    },

    "@media (max-width:1000px)": {
        [SELECTORS.TITLE_INPUT]: {
            width: "calc(100% - 14px)", // calc is used in order to allign title and description inputs widths
        },
        [SELECTORS.ADDITIONAL_INFORMATION_WRAPPER]: {
            flexWrap: "wrap",
        },
    },

    "@media (max-width:1000px) and (min-width: 701px)": {
        [SELECTORS.ADDITIONAL_INFORMATION_WRAPPER]: {
            [SELECTORS.LABEL_PICKER]: {
                width: "calc(100% - 220px - 2 * 6px - 128px)",
            },
            [SELECTORS.DUE_DATE_PICKER]: {
                width: "220px",
            },
        },
    },

    "@media (max-width:700px)": {
        [SELECTORS.ADDITIONAL_INFORMATION_WRAPPER]: {
            [SELECTORS.LABEL_PICKER]: {
                width: "calc(100% - 128px - 8px)",
            },
            [`${SELECTORS.DUE_DATE_PICKER}, ${SELECTORS.DUE_TIME_PICKER}`]: {
                width: "calc(50% - 3px)",
            },
            [SELECTORS.LOCALIZATION_INPUT]: {
                width: "100%",
                "span.length-indicator": {
                    width: "55px !important",
                },
            },
        },
    },

    "@media (max-width:670px)": {
        [SELECTORS.BUTTONS.ADD_NEW_TASK]: {
            width: "calc(100% - 182px - 6px)",
        },
        [SELECTORS.BUTTONS.HIDE_PANEL]: {
            width: "182px",
        },
        [SELECTORS.OPTIONAL_PROPERTY_EXPLANATION]: {
            order: -1,
            width: "100%",
            marginBottom: "12px",
        },
    },

    "@media (max-width:420px)": {
        [SELECTORS.LABEL_PICKER]: {
            width: "100%",
            order: -3,
        },
        [SELECTORS.DUE_DATE_PICKER]: {
            order: -2,
        },
        [SELECTORS.DUE_TIME_PICKER]: {
            order: -1,
        },
        [SELECTORS.URGENCY_SWITCH]: {
            width: "124px",
        },
        [SELECTORS.LOCALIZATION_INPUT]: {
            width: "calc(100% - 124px - 10px) !important",
        },
    },
} as SxProps;
