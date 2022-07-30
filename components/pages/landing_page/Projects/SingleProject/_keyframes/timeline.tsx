// Tools
import { keyframes } from "@mui/system";

export const scaleX = keyframes({
    from: {
        transform: "translateY(-50%) scaleX(0)",
    },
    to: {
        transform: "translateY(-50%) scaleX(1)",
    },
});
export const scaleXButYearIndicator = keyframes({
    from: {
        transform: "translateY(calc(-50% - 90px)) scaleX(0)",
    },
    to: {
        transform: "translateY(calc(-50% - 90px)) scaleX(1)",
    },
});
export const timelineCoreHalfIntro = keyframes({
    from: {
        height: 0,
    },
    to: {
        height: "50%",
    },
});
export const timelineCoreEntireIntro = keyframes({
    from: {
        height: 0,
    },
    to: {
        height: "100%",
    },
});
