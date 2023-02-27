// Types
import type { SxProps } from "@mui/material";

export default {
    ["@media (max-height:730px)"]: {
        ".single-gender-card": {
            height: "280px",
            width: "240px",
            svg: {
                fontSize: "8rem",
                marginBottom: "16px",
            },
        },
    },
    ["@media (max-height:710px)"]: {
        i: {
            marginTop: "32px",
        },
    },
    ["@media (max-height:670px)"]: {
        ".single-gender-card": {
            height: "260px",
            width: "220px",
            svg: {
                fontSize: "8rem",
                marginBottom: "16px",
            },
        },
    },
} as SxProps;
