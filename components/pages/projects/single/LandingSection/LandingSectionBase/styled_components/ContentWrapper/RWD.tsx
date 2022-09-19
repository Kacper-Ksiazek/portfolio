// Types
import type { SxProps } from "@mui/system";

export default {
    ["@media (max-height:940px)"]: {
        marginBottom: "20vh",
    },
    ["@media (max-height:840px)"]: {
        marginBottom: "10vh",
    },
    ["@media (max-height:740px)"]: {
        marginBottom: "6vh",
    },
    ["@media (max-height:640px)"]: {
        marginBottom: "0",
    },

    ["@media (max-width:1450px)"]: {
        "#project-title": {
            fontSize: "56px",
        },
    },
    ["@media (max-width:1200px)"]: {
        ".duration": {
            fontSize: "18px",
        },
        "#project-title": {
            fontSize: "48px",
        },
        "#project-description": {
            fontSize: "18px",
        },
    },
    ["@media (max-width:1100px)"]: {},

    ["@media (max-width:1000px)"]: {
        marginTop: "120px",
        marginBottom: "20px !important",
    },

    ["@media (max-width:900px)"]: {
        "#project-title": {
            marginBottom: "16px",
        },
    },
    ["@media (max-width:500px)"]: {
        ".duration": {
            fontSize: "16px",
        },
        "#project-description": {
            fontSize: "16px",
        },
    },
} as SxProps;
