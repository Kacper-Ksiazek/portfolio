// Types
import type { SxProps } from "@mui/system";

export default {
    ["@media (max-width:1100px)"]: {
        "&.skip-intro-animation": {
            borderRadius: "20px",
            maxHeight: "calc(100vh - 40px)",
            width: "calc(100vw - 40px)",
        },
    },
    ["@media (max-width:500px)"]: {
        "&.skip-intro-animation": {
            borderRadius: "20px",
            maxHeight: "calc(100vh - 20px)",
            width: "calc(100vw - 20px)",
        },
    },
} as SxProps;
