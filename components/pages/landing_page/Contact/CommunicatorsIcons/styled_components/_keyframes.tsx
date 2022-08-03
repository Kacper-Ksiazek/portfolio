// Tools
import theme from "@/material";
import { keyframes } from "@mui/system";

export const singleIconIntroAnimation = keyframes({
    from: {
        height: 0,
    },
    to: {
        height: "100%",
    },
});
export const singleIconOutroAnimation = keyframes({
    from: {
        height: "100%",
    },
    to: {
        height: 0,
    },
});
export const singleIconBackgroundAnimation = keyframes({
    from: {
        background: "transparent",
    },
    to: {
        background: theme.palette.primary.main,
    },
});
