// Tools
// import { alpha } from "@mui/material";
import { SELECTORS } from "../css_references";
// Types
import type { SxProps } from "@/@types/MUI";

export default {
    "@media (max-width:840px)": {
        [SELECTORS.CONTENT.MAIN_CONTENT_WRAPPER]: {
            "&>*": {
                height: "auto",
                minHeight: "28px",
            },
        },
        //
    },
    "@media (max-width:700px)": {
        [SELECTORS.CONTENT.MAIN_CONTENT_WRAPPER]: {
            marginRight: "0",
        },
        [SELECTORS.CONTENT.VIEW_MODE.LABELS_WRAPPER]: {
            order: "1",
            width: "100%",
        },
    },
} as SxProps;
