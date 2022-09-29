// Tools
import { keyframes } from "@mui/system";

export const stopRendering = keyframes({
    from: {
        display: "block",
    },
    to: {
        width: "0",
        height: 0,
        zIndex: -1,
        display: "none",
    },
});
