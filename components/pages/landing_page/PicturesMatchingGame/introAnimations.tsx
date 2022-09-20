// Tools
import { keyframes } from "@mui/system";
import fadeFromBottom from "@/components/keyframes/intro/fadeFromBottom";
// Types
import type { SxProps } from "@mui/system";
// IT HAS TO BE UNIQUE ANIMATION
const fadeSimple = keyframes({
    from: {
        opacity: 0,
    },
    to: {
        opacity: 1,
    },
});

export const introAnimations = {
    ".first-game-in-the-session": {
        "&:nth-of-type(1)": {
            animation: `${fadeSimple} .3s 2s both`,
        },
        "&:nth-of-type(2)": {
            animation: `${fadeSimple} .3s 2.05s both`,
        },
        "&:nth-of-type(3)": {
            animation: `${fadeSimple} .3s 2.1s both`,
        },
        "&:nth-of-type(4)": {
            animation: `${fadeSimple} .3s 2.15s both`,
        },
        "&:nth-of-type(5)": {
            animation: `${fadeSimple} .3s 2.2s both`,
        },
        "&:nth-of-type(6)": {
            animation: `${fadeSimple} .3s 2.25s both`,
        },
        "&:nth-of-type(7)": {
            animation: `${fadeSimple} .3s 2.3s both`,
        },
        "&:nth-of-type(8)": {
            animation: `${fadeSimple} .3s 2.35s both`,
        },
        "&:nth-of-type(9)": {
            animation: `${fadeSimple} .3s 2.4s both`,
        },
        "&:nth-of-type(10)": {
            animation: `${fadeSimple} .3s 2.45s both`,
        },
    },
    ".already-taken-turns-communique": {
        animation: `${fadeFromBottom} .3s 2s both linear`,
    },
} as SxProps;
