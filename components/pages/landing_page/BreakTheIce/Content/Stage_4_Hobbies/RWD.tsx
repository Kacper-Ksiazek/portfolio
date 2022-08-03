// Types
import type { SxProps } from "@mui/system";

export default {
    ["@media (max-width:1300px)"]: {
        ".image-wrapper": {
            height: "180px",
        },
    },
    ["@media (max-width:1000px)"]: {
        height: "400px",
        marginTop: "40px",
        ".image-wrapper": {
            height: "210px",
        },
    },
    ["@media (max-width:800px)"]: {
        ".image-wrapper": {
            height: "190px",
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
        height: "400px",
        ".image-wrapper": {
            height: "210px",
        },
    },
} as SxProps;
