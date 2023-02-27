// Types
import type { SxProps } from "@mui/material";

export default {
    "#project-landing-screen-image-wrapper": {
        img: {
            transform: "scale(1.2)",
        },
    },
    "#project-landing-screen-content-wrapper": {
        "&::before": {
            width: "300px",
        },
    },
    "#project-landing-screen-text-wrapper": {
        transform: "translateX(20px)",
    },
} as SxProps;
