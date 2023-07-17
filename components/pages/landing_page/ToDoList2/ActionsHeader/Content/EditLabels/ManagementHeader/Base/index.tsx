// Tools
import { styled } from "@mui/material";
import { SELECTORS } from "../css_references";
// Styled components
export default styled("div")(({ theme }) => ({
    display: "flex",
    width: "100%",
    paddingBottom: "12px",
    "&>*": {
        marginRight: "6px",
    },

    "@media (min-width:991px)": {
        flexWrap: "nowrap",
        [SELECTORS.EMPTY_SPACE_FILLER]: {
            flexGrow: 1,
        },
    },

    "@media (max-width:990px)": {
        flexWrap: "wrap",
        gap: "8px",
        marginTop: "12px !important",
        [SELECTORS._EVERY]: {
            margin: "0 !important",
        },
        [SELECTORS.EMPTY_SPACE_FILLER]: {
            display: "none",
        },
    },

    "@media (max-width:990px) and (min-width: 591px)": {
        [SELECTORS.FILTERS._EVERY]: {
            width: "calc((100% - 16px) / 3)",
            margin: "0",
        },
        [SELECTORS.BUTTONS._EVERY]: {
            width: "calc((100% - 8px) / 2)",
        },
    },

    "@media (max-width:590px)": {
        [[SELECTORS.FILTERS.URGENCY_SWITCH, SELECTORS.FILTERS.NOT_USED_ONLY_SWITCH].join(", ")]: {
            width: "calc((100% - 8px) / 2)",
        },
        [SELECTORS.FILTERS.PICK_SORTING_ORDER]: {
            width: "calc(40% - 8px)",
        },
        [SELECTORS.BUTTONS.DELETE_UNUSED_LABELS_BUTTON]: {
            width: "60%",
        },
        [SELECTORS.BUTTONS.ADD_NEW_LABEL_BUTTON]: {
            width: "100%",
        },
    },

    "@media (max-width:400px)": {
        [SELECTORS.FILTERS.URGENCY_SWITCH]: {
            width: "55%",
        },
        [SELECTORS.FILTERS.NOT_USED_ONLY_SWITCH]: {
            width: "calc(45% - 8px)",
        },
        [SELECTORS.FILTERS.PICK_SORTING_ORDER]: {
            width: "100%",
        },
        [SELECTORS.BUTTONS.DELETE_UNUSED_LABELS_BUTTON]: {
            width: "100%",
            height: "42px",
        },
    },
}));
