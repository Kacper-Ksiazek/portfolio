// Types
import type { SxProps } from "@mui/system";

export default {
    ["@media (max-width:1100px)"]: {
        "&.round-left, &.round-right": {
            borderRadius: "20px ",
        },
    },
    ["@media (max-width:1000px)"]: {
        "&.limited-height": {
            height: "auto",
        },
    },
    ["@media (max-width:500px)"]: {
        ".light-section-wrapper-header": {
            fontSize: "2.6rem",
            lineHeight: "40px",
            margin: "0 0 24px 0",
        },
        ".light-section-wrapper-label": {
            fontSize: "18px",
        },
    },
} as SxProps;
