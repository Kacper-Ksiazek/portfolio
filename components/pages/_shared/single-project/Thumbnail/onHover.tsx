// Types
import type { SxProps } from "@mui/system";

export const shapesOnHoverAnimations = {
    ".right": {
        top: "100%",
        transform: "translateY(-100%)",
    },
    ".left": {
        bottom: "100%",
        transform: "translateY(100%)",
    },
} as SxProps;
