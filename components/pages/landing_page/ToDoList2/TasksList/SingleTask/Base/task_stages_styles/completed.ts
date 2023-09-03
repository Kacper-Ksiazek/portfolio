// Tools
import { alpha } from "@mui/material";
import { SELECTORS, VIEW_MODE_SELECTORS } from "../../css_references";
// Types
import type { Theme } from "@/@types/MUI";
import type { SxProps } from "@/@types/MUI";

export const getStylesWhenCompleted = (theme: Theme): SxProps => {
    return {
        background: theme.palette.mode === "light" ? "#251C2B" : theme.palette.background.lightSectionBackground,
        color: alpha("#fff", 0.3),
        //
        [SELECTORS.COMPLETION_BUTTON]: {
            "svg.check-icon": {
                opacity: 1,
            },
        },
        [VIEW_MODE_SELECTORS.INFORMATION_WITH_ICON]: {
            opacity: 0.3,
        },
        [VIEW_MODE_SELECTORS.TITLE]: {
            "h4::before": {
                transform: "scaleX(1)",
            },
        },
        [SELECTORS.BACKGROUND]: {
            transform: "scaleX(0)",
        },
        [VIEW_MODE_SELECTORS.LABEL]: {
            "&>span": {
                background: "none !important",
                color: alpha("#fff", 0.3),
                border: `2px solid ${alpha("#fff", 0.3)} !important`,
            },
        },
    };
};
