// Tools
import { keyframes } from "@mui/system";

export const introAnimationWidthBodyWithBigRadius = keyframes({
    from: {
        maxHeight: "calc(100vh)",
        top: "-120px",
        width: "100vw",
    },
    to: {
        borderRadius: "20px 100px 20px 100px",
        top: "-100px",
        maxHeight: "calc(100vh - 40px)",
        width: "calc(100vw - 40px)",
    },
});
export const introAnimationWideBodyWithRegularRadius = keyframes({
    from: {
        maxHeight: "calc(100vh)",
        top: "-120px",
        width: "100vw",
    },
    to: {
        borderRadius: "20px",
        top: "-100px",
        maxHeight: "calc(100vh - 40px)",
        width: "calc(100vw - 40px)",
    },
});

export const introAnimationShorterWidth = keyframes({
    from: {
        maxHeight: "calc(100vh)",
        top: "-120px",
        width: "100vw",
    },
    to: {
        borderRadius: "20px",
        top: "-110px",
        maxHeight: "calc(100vh - 20px)",
        width: "calc(100vw - 20px)",
    },
});
