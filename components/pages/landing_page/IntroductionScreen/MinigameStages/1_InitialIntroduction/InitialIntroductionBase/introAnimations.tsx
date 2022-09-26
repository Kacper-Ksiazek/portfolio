// Tools
import fadeFromTop from "@/components/keyframes/intro/fadeFromTop";
// Types
import type { SxProps } from "@mui/system";

export default {
    ".colored-header": {
        "&:nth-of-type(1)": {
            animation: `${fadeFromTop} .2s linear both`,
        },
        "&:nth-of-type(2)": {
            animation: `${fadeFromTop} .2s .3s linear both`,
        },
    },
    ".main-header": {
        animation: `${fadeFromTop} .2s .1s linear both`,
    },
    p: {
        animation: `${fadeFromTop} .2s .2s linear both`,
    },
    button: {
        animation: `${fadeFromTop} .2s 3s linear both`,
    },
} as SxProps;
