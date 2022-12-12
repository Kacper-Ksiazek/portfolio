// Types
import type { SxProps } from "@mui/system";

export default {
    ["@media (max-height:940px)"]: {
        marginBottom: "18vh",
    },
    ["@media (max-height:840px)"]: {
        marginBottom: "6vh",
    },
    ["@media (max-height:740px)"]: {
        marginBottom: "4vh",
    },
    ["@media (max-height:640px)"]: {
        marginBottom: "2vh",
    },

    ["@media (max-width:1450px)"]: {
        "#project-title": {
            fontSize: "56px",
        },
    },
    ["@media (max-width:1200px)"]: {
        ".duration": {
            fontSize: "20px",
        },
        "#project-title": {
            fontSize: "48px",
        },
        "#project-description": {
            fontSize: "20px",
        },
    },
    ["@media (max-width:1000px)"]: {
        marginTop: "120px",
        marginBottom: "60px !important",
    },

    ["@media (max-width:900px)"]: {
        "#project-title": {
            marginBottom: "16px",
        },
    },
    "@media (max-width:640px)": {
        marginBottom: "48px !important",
    },
    ["@media (max-width:500px)"]: {
        ".duration": {
            fontSize: "18px",
        },
        "#project-description": {
            fontSize: "18px",
        },
    },
} as SxProps;
