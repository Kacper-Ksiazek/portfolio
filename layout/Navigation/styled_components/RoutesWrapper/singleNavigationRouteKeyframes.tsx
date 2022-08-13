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
