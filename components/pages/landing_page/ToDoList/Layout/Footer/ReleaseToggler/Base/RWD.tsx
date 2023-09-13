// Tools
import { SELECTORS } from "../css_references";
// Types
import type { SxProps } from "@/@types/MUI";

export const RWD: SxProps = {
    "@media (max-width:660px)": {
        [SELECTORS.LABEL]: {
            padding: 0,
            flexGrow: 1,
            textAlign: "center",
        },
        [SELECTORS.SINGLE_RELEASE_BUTTON]: {
            width: "144px",
        },
        [SELECTORS.CHOICE_INDICATOR]: {
            width: "144px",
        },
    },

    "@media (max-width:450px)": {
        width: "100%",
        flexWrap: "wrap",

        [SELECTORS.LABEL]: {
            display: "none",
        },

        [SELECTORS.SINGLE_RELEASE_BUTTON]: {
            width: "calc(50% - 3px)",
            button: {
                padding: 0,
            },
        },

        [SELECTORS.CHOICE_INDICATOR]: {
            width: "50%",
            top: "auto",
            bottom: 0,
        },
    },
};
