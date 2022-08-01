// Tools
import { keyframes } from "@mui/system";

export const timelineConnectionIntro = keyframes({
    from: {
        width: 0,
    },
    to: {
        width: "100%",
    },
});
export const timelineConnectionIntroButYearIndicating = keyframes({
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
