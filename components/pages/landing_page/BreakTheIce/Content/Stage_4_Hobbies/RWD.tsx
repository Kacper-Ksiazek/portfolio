// Types
import type { SxProps } from "@mui/material";

export default {
    "@media (max-width:1350px)": {
        ".image-wrapper": {
            height: "180px",
        },
    },
    "@media (max-width:1000px)": {
        height: "460px",
        marginTop: "40px",
        ".image-wrapper": {
            height: "250px",
        },
    },
    "@media (max-width:900px)": {
        height: "450px",
        ".image-wrapper": {
            height: "230px",
        },
    },
    "@media (max-width:800px)": {
        height: "460px",
        ".image-wrapper": {
            height: "210px",
        },
    },
    "@media (max-width:700px)": {
        ".image-wrapper": {
            height: "170px",
        },
    },
    "@media (max-width:650px)": {
        height: "480px",
        ".image-wrapper": {
            height: "290px",
            margin: "8px 0",
        },
    },
    "@media (max-width:550px)": {
        height: "430px",
        ".image-wrapper": {
            height: "240px",
        },
    },
    "@media (max-width:420px)": {
        height: "470px",
    },
} as SxProps;
