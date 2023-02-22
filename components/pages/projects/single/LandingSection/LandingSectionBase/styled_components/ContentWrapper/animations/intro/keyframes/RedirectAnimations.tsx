// Tools
import { COLORS } from "@/material";
import { keyframes } from "@mui/system";

export const RedirectIntro_BackgroundColor = keyframes({
    from: {
        background: "transparent",
    },
    to: {
        background: COLORS.primary,
    },
});
export const RedirectIntro_StageOne = keyframes({
    from: {
        top: 0,
        bottom: "auto",
        height: "10px",
        width: "0",
    },
    to: {
        top: 0,
        bottom: "auto",
        height: "10px",
        width: "100%",
    },
});
export const RedirectIntro_StageTwo = keyframes({
    from: {
        height: "10px",
        top: 0,
        bottom: "auto",
    },
    to: {
        height: "100%",
        top: 0,
        bottom: "auto",
    },
});
export const RedirectIntro_StageThree = keyframes({
    from: {
        height: "100%",
        bottom: 0,
        top: "auto",
    },
    to: {
        height: "0",
        bottom: 0,
        top: "auto",
    },
});
