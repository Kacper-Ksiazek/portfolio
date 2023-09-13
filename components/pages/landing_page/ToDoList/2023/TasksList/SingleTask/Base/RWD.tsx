// Tools
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
    },
} as SxProps;
