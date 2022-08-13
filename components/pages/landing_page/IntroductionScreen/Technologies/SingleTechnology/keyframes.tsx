// Tools
import { keyframes } from "@mui/system";

export const fadeFromLeft = keyframes({
    from: {
        transform: "translateX(-30px)",
        opacity: 0,
    },
    to: {
        opacity: 0.1,
        transform: "translateX(0px)",
    },
});

export const fadeFromRight = keyframes({
    from: {
        transform: "translateX(30px)",
        opacity: 0,
    },
    to: {
        opacity: 0.1,
        transform: "translateX(0px)",
    },
});
