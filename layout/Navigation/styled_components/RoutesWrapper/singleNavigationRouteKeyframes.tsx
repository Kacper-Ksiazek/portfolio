// Tools
import { keyframes } from "@mui/system";

export const singleNavigationRouteBarIntro = keyframes({
    "0%": {
        transform: "translateX(100%)",
    },
    "33%,66%": {
        transform: "translateX(0%)",
    },
    "100%": {
        transform: "translateX(-100%)",
    },
});

export const singleNavigationRouteContentIntro = keyframes({
    from: {
        color: "#000",
        border: "none",
    },
    to: {
        color: "#fff",
        border: `1px solid #fff`,
    },
});

export const wrapperOutroAnimation = keyframes({
    "0%": {
        top: "auto",
        bottom: 0,
        transform: "translateX(0%)",
        height: "100vh",
    },
    "33%,66%": {
        transform: "translateX(0%)",
        height: "80px",
    },
    "100%": {
        top: "auto",
        bottom: 0,
        transform: "translateX(100%)",
        height: "80px",
    },
});
