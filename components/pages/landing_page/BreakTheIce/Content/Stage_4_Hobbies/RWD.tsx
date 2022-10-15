// Types
import type { SxProps } from "@mui/system";

export default {
    ["@media (max-width:1350px)"]: {
        ".image-wrapper": {
            height: "180px",
        },
    },
    ["@media (max-width:1000px)"]: {
        height: "420px",
        marginTop: "40px",
        ".image-wrapper": {
            height: "250px",
        },
    },
    ["@media (max-width:900px)"]: {
        height: "410px",
        ".image-wrapper": {
            height: "230px",
        },
    },
    ["@media (max-width:800px)"]: {
        ".image-wrapper": {
            height: "210px",
        },
    },
    ["@media (max-width:700px)"]: {
        height: "420px",
        ".image-wrapper": {
            height: "170px",
        },
    },
    ["@media (max-width:600px)"]: {
        height: "450px",
    },
    ["@media (max-width:550px)"]: {
        height: "420px",
        ".image-wrapper": {
            height: "220px",
            margin: "8px 0",
        },
    },
} as SxProps;
