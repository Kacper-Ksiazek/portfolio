// Types
import type { SxProps } from "@mui/system";

export default {
    "@media (max-width:1100px)": {
        "&.skip-intro-animation": {
            borderRadius: "20px",
        },
    },
    "@media (max-width:1000px)": {
        "&.skip-intro-animation": {
            top: "-10px",
            width: "calc(100vw - 20px)",
            maxHeight: "calc(100vh - 20px)",
        },
    },
    "@media (max-width:500px)": {
        "&.skip-intro-animation": {
            top: "-10px",
            maxHeight: "100vh",
            width: "calc(100vw - 0px)",
        },
    },
} as SxProps;
