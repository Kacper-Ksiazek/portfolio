// Tools
import fadeSimple from "@/components/keyframes/intro/fadeSimple";
// Types
import type { SxProps } from "@mui/system";

export default {
    ".navigation-between-stages": {
        ".MuiStep-root": {
            ".single-nagivation-step": {
                "&.one": {
                    animation: `${fadeSimple} .3s .1s linear both`,
                },
                "&.two": {
                    animation: `${fadeSimple} .3s .2s linear both`,
                },
                "&.three": {
                    animation: `${fadeSimple} .3s .3s linear both`,
                },
            },
        },
    },
    footer: {
        button: {
            "&.continue": {
                animation: `${fadeSimple} .3s .7s linear both`,
            },
            "&.fake-invalid-request": {
                animation: `${fadeSimple} .3s 1.1s linear both`,
            },
            "&.fake-valid-request": {
                animation: `${fadeSimple} .3s 1s linear both`,
            },
        },
    },
} as SxProps;
