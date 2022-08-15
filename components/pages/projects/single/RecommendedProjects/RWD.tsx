// Types
import type { SxProps } from "@mui/system";

export default {
    ".carosuel-wrapper": {
        ["@media (max-width:1450px)"]: {
            ".thumbnail-wrapper": {
                height: "260px",
            },
        },
        ["@media (max-width:1400px)"]: {
            ".thumbnail-wrapper": {
                height: "240px",
            },
        },
        ["@media (max-width:1300px)"]: {
            ".thumbnail-wrapper": {
                height: "290px",
            },
        },
        ["@media (max-width:1240px)"]: {
            ".thumbnail-wrapper": {
                height: "280px",
            },
        },
        ["@media (max-width:1200px)"]: {
            ".thumbnail-wrapper": {
                height: "270px",
            },
        },
        ["@media (max-width:1160px)"]: {
            ".thumbnail-wrapper": {
                height: "260px",
            },
        },
        ["@media (max-width:1000px)"]: {
            ".thumbnail-wrapper": {
                height: "240px",
            },
        },
        ["@media (max-width:680px)"]: {
            minHeight: "560px",
            ".thumbnail-wrapper": {
                height: "300px",
            },
        },
        ["@media (max-width:600px)"]: {
            minHeight: "560px",
            ".thumbnail-wrapper": {
                height: "280px",
            },
        },
        ["@media (max-width:520px)"]: {
            minHeight: "540px",
            ".thumbnail-wrapper": {
                height: "260px",
            },
        },
        ["@media (max-width:430px)"]: {
            minHeight: "520px",
            ".thumbnail-wrapper": {
                height: "240px",
            },
        },
    },
} as SxProps;
