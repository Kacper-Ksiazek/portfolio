// Types
import type { SxProps } from "@mui/system";

export default {
    ["@media (max-width:1000px)"]: {
        width: "100%",
    },
    ["@media (max-width:600px)"]: {
        flexDirection: "column !important",
        "&:nth-of-type(odd)": {
            "&::before": {
                left: "20px",
            },
        },
        "&:nth-of-type(even)": {
            "&::before": {
                right: "20px",
            },
        },
        "&>*": {
            width: "100% !important",
        },
        ".single-previous-job-thumbnail-wrapper": {
            height: "260px",
            marginBottom: "8px",
        },
        "&:nth-of-type(1)": {
            marginTop: "48px",
        },
        "&:not(&:nth-of-type(1))": {
            marginTop: "80px",
        },
        "&::after": {
            top: "-40px",
        },
    },
    ["@media (max-width:420px)"]: {
        ".single-previous-job-thumbnail-wrapper": {
            height: "240px",
        },
    },
    ["@media (max-width:380px)"]: {
        ".single-previous-job-thumbnail-wrapper": {
            height: "220px",
            marginBottom: "12px",
        },
    },
    ["@media (max-width:360px)"]: {
        ".single-previous-job-thumbnail-wrapper": {
            height: "200px",
        },
    },
} as SxProps;
