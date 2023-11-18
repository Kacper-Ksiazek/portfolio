// Types
import type { SxProps } from "@mui/material";

export default {
    paddingTop: "112px !important",
    ".colored-header": {
        ["@media (max-width:1500px)"]: {
            fontSize: "28px",
        },
        ["@media (max-width:1000px)"]: {
            fontSize: "24px",
        },
        ["@media (max-width:370px)"]: {
            fontSize: "20px",
        },
    },
    ".main-header": {
        ["@media (max-width:1500px)"]: {
            fontSize: "64px",
            lineHeight: "76px",
        },
        ["@media (max-width:1000px)"]: {
            fontSize: "56px",
            lineHeight: "72px",
        },
        ["@media (max-width:500px)"]: {
            fontSize: "48px",
            lineHeight: "64px",
        },
        ["@media (max-width:440px)"]: {
            fontSize: "44px",
            lineHeight: "60px",
        },
        ["@media (max-width:400px)"]: {
            fontSize: "40px",
            lineHeight: "56px",
        },
        ["@media (max-width:370px)"]: {
            fontSize: "36px",
            lineHeight: "50px",
        },
    },
    p: {
        ["@media (max-width:1500px)"]: {
            fontSize: "20px",
            margin: "10px 0 20px 0",
        },
        ["@media (max-width:1000px)"]: {
            fontSize: "18px",
        },
        ["@media (max-width:370px)"]: {
            fontSize: "16px",
        },
    },
    "#scroll-down-button": {
        ["@media (max-height:600px)"]: {
            marginTop: "32px",
        },
        ["@media (max-width:800px)"]: {
            bottom: "20px",
        },
    },
} as SxProps;
