// Tools
import fadeSimple from "@/components/_keyframes/intro/fadeSimple";
import fadeFromLeft from "@/components/_keyframes/intro/fadeFromLeft";
import fadeFromBottom from "@/components/_keyframes/intro/fadeFromBottom";
// Types
import type { SxProps } from "@mui/system";

export const toDoListIntroAnimations: SxProps = {
    ".single-task": {
        "&:nth-of-type(1)": {
            animation: `${fadeFromLeft} .5s 1.3s both`,
            button: {
                "&:nth-of-type(1)": {
                    animation: `${fadeSimple} .3s 1.7s both`,
                },
                "&:nth-of-type(2)": {
                    animation: `${fadeSimple} .3s 1.8s both`,
                },
            },
        },
        "&:nth-of-type(2)": {
            animation: `${fadeFromLeft} .5s 1.5s both`,
            button: {
                "&:nth-of-type(1)": {
                    animation: `${fadeSimple} .3s 1.9s both`,
                },
                "&:nth-of-type(2)": {
                    animation: `${fadeSimple} .3s 2s both`,
                },
            },
        },
        "&:nth-of-type(3)": {
            animation: `${fadeFromLeft} .5s 1.7s both`,
            button: {
                "&:nth-of-type(1)": {
                    animation: `${fadeSimple} .3s 2.1s both`,
                },
                "&:nth-of-type(2)": {
                    animation: `${fadeSimple} .3s 2.2s both`,
                },
            },
        },
    },
    footer: {
        input: {
            animation: `${fadeFromBottom} .3s 1.9s both`,
        },
        button: {
            animation: `${fadeFromLeft} .3s 2.1s both`,
        },
    },
};
