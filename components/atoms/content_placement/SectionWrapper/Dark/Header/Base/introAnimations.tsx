// Tools
import { fadeSimple } from "@/components/keyframes/intro";
// Types
import type { SxProps } from "@mui/material";

export default {
    h4: {
        "&:nth-of-type(1)": {
            animation: `${fadeSimple} .3s 1.2s linear both`,
        },
        "&:nth-of-type(2)": {
            animation: `${fadeSimple} .3s 1s linear both`,
        },
    },
    h2: {
        animation: `${fadeSimple} .3s .8s linear both`,
    },

    ".dark-content-wrapper-github-redirection": {
        animation: `${fadeSimple} .3s 2s linear both`,
    },
    ".dark-content-wrapper-header-icon": {
        animation: `${fadeSimple} 1s 1.8s linear both`,
    },
    ".dark-content-wrapper-header-description": {
        animation: `${fadeSimple} .3s 1.6s linear both`,
        "&::after": {
            animation: `${fadeSimple} .3s 1.8s linear both`,
        },
    },
} as SxProps;
