// Types
import type { SxProps } from "@mui/system";

export default {
    width: "calc(100vw - 100px)",
    height: "calc(100vh - 60px)",
    ["@media (max-width:1500px)"]: {
        height: "calc(100vh - 40px)",
    },
    ["@media (max-width:1200px)"]: {
        height: "calc(100vh - 20px)",
    },
    ["@media (max-width:1000px)"]: {
        width: "calc(100vw - 40px)",
        height: "100vh",
        paddingTop: "20px",
        "div.imageWrapper": {
            maxHeight: "500px",
        },
        "div.navigation": {
            bottom: "50px",
        },
    },
    ["@media (max-width:900px)"]: {
        h4: {
            margin: "0 !important",
            padding: "0",
        },
    },
    ["@media (max-width:700px)"]: {
        "div.imageWrapper": {
            maxHeight: "400px",
        },
    },
    ["@media (max-width:500px)"]: {
        width: "calc(100vw - 20px)",
        h4: {
            display: "flex",
            flexDirection: "column",
            "span.seperator": {
                display: "none",
            },
        },
        "div.imageWrapper": {
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: "10",
            width: "calc(100vw - 10px)",
            height: "calc(100vh - 40px)",
        },
        "div.navigation": {
            bottom: "20px",
            strong: {
                fontSize: "1.5rem",
            },
        },
    },
} as SxProps;
