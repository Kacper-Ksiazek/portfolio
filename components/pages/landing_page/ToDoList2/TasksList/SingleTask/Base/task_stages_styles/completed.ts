// Tools
import { alpha } from "@mui/material";
import { SELECTORS } from "../../css_references";
// Types
import type { Theme } from "@/@types/MUI";
import type { SxProps } from "@/@types/MUI";

export const getStylesWhenCompleted = (theme: Theme): SxProps => {
    return {
        background: theme.palette.mode === "light" ? "#251C2B" : theme.palette.background.lightSectionBackground,
        [SELECTORS.COMPLETION_BUTTON]: {
            "svg.check-icon": {
                opacity: 1,
            },
        },
        [SELECTORS.VIEW_MODE.INFORMATION_WITH_ICON]: {
            opacity: 0.3,
        },
        [SELECTORS.VIEW_MODE.DESCRIPTION]: {
            "&::before": {
                transform: "scaleX(1)",
            },
        },
        [SELECTORS.BACKGROUND]: {
            transform: "scaleX(0)",
        },
        [SELECTORS.VIEW_MODE.LABEL]: {
            background: "none !important",
            color: alpha("#fff", 0.3),
            border: `2px solid ${alpha("#fff", 0.3)} !important`,
        },
        color: alpha("#fff", 0.3),
    };
};
