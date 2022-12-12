// Tools
import { keyframes } from "@mui/system";

export const largeDisplay = keyframes({
    from: {
        maxHeight: "calc(100vh)",
        top: "-20px",
        width: "100vw",
    },
    to: {
        borderRadius: "20px 100px 20px 100px",
        top: "0px",
        maxHeight: "calc(100vh - 40px)",
        width: "calc(100vw - 40px)",
    },
});

export const mediumDisplay = keyframes({
    from: {
        maxHeight: "calc(100vh)",
        top: "-20px",
        width: "100vw",
    },
    to: {
        borderRadius: "20px 64px 20px 64px",
        top: "-10px",
        maxHeight: "calc(100vh - 20px)",
        width: "calc(100vw - 20px)",
    },
});

export const mediumDisplayWithEqualRadius = keyframes({
    from: {
        maxHeight: "calc(100vh)",
        top: "-20px",
        width: "100vw",
    },
    to: {
        borderRadius: "20px",
        top: "-10px",
        maxHeight: "calc(100vh - 20px)",
        width: "calc(100vw - 20px)",
    },
});
