// Tools
import { SELECTORS } from "../css_references";
import { SELECTORS as PROGRESS_BAR_SELECTORS } from "../SingleLabel/Progress/css_references";
// Types
import { alpha, type SxProps } from "@mui/material";

const EVERY_TABLE_ROW_ELEMENT_SELECTOR: Selector = [
            SELECTORS.TABLE.BUTTONS.WRAPPER, //
            SELECTORS.TABLE.INDEX,
            SELECTORS.TABLE.LABEL_NAME,
            SELECTORS.TABLE.PROGRESS_BAR,
        ].join(", ");

export default {
    [SELECTORS.LABELS_LIST.MAIN_WRAPPER]: {
        height: "252px",
        "@media (max-width:1000px)": {
           height: '320px' 
        },
        "@media (max-width:770px)": {
           height: '272px' 
        },
        "@media (max-width:590px)": {
           height: '304px' 
        },
        "@media (max-width:400px)": {
           height: '294px' 
        },
    },
    "@media (max-width:920px) and (min-width: 671px)": {
        [SELECTORS.TABLE.INDEX]: {
            width: "52px",
        },
        [EVERY_TABLE_ROW_ELEMENT_SELECTOR]: {
            padding: "6px 12px",
        },
        [SELECTORS.TABLE.PROGRESS_BAR]: {
            flexDirection: "column",
            alignItems: "flex-end",
            justifyContent: "center",
            [PROGRESS_BAR_SELECTORS.THERE_ARE_NO_TASK]: {
                width: "100%",
            },
            [PROGRESS_BAR_SELECTORS.PROGRESS_BAR]: {
                marginTop: "4px",
                width: "100%",
            },
            [PROGRESS_BAR_SELECTORS.COMPLETION_TRACKER]: {
                margin: "4px 0 4px 0",
            },
        },
    },
    "@media (max-width:840px)": {
        [SELECTORS.TABLE.PROGRESS_BAR]: {
            width: "calc(100% - 52px - 120px - 180px - 3 * 4px)",
        },
        [SELECTORS.TABLE.BUTTONS.WRAPPER]: {
            width: "120px",
        },
        [SELECTORS.TABLE.BUTTONS.SINGLE.ICON]: {
            marginRight: "0",
        },
        [SELECTORS.TABLE.BUTTONS.SINGLE.TEXT]: {
            display: "none",
        },
    },
    "@media (max-width:670px)": {
        [SELECTORS.TABLE.ROW_WRAPPER]: {
            flexWrap: "wrap",
            gap: 0,
            border: `1px solid ${alpha("#fff", 0.3)}`,
            alignItems:'center',
            padding: '8px 12px 4px 12px',
            boxSizing: 'content-box',
            "&:not(&:nth-of-type(1))": {
                marginTop: "8px",
            },
        },
        [ EVERY_TABLE_ROW_ELEMENT_SELECTOR]: {
            padding: 0,
        },
        [SELECTORS.TABLE.LABEL_NAME]:{
            justifyContent:'flex-start',
            marginTop: '4px',
            width: 'calc(100% - 42px - 96px)',
            padding: '0 12px',
        },
        [SELECTORS.TABLE.PROGRESS_BAR]: {
            width: "100%",
            order: 1,
        },
        [SELECTORS.TABLE.BUTTONS.WRAPPER]:{
            width: '96px',
            padding: 0,
        },
        [SELECTORS.TABLE.INDEX]:{
            height: '42px',
            width: '42px', 
            "&::after":{
                width: '100%',
                height: '100%'
            }
        }
    },
} as SxProps;
