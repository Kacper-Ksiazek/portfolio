// Types
import type { SxProps } from "@mui/material";

export default {
    "@media (max-width:1100px)": {
        "&.skip-intro-animation": {
            borderRadius: "20px",
        },
    },
    [["@media (max-width:1100px)", "@media (min-width: 501px)"].join(", ")]: {
        "&.skip-intro-animation": {
            top: "-10px",
            width: "calc(100vw - 20px)",
            maxHeight: "calc(100vh - 20px)",
        },
    },
    "@media (max-width:500px)": {
        "&.skip-intro-animation": {
            top: "-10px",
            maxHeight: "100vh !important",
            width: "calc(100vw - 0px) !important",
        },
    },
} as SxProps;
