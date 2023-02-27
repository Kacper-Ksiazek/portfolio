// Tools
import { keyframes } from "@mui/material";
// Types
import type { SxProps } from "@mui/material";
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
        //
        // Render &:nth-of-type(1) - &:nth-of-type(10)
        //
        ...((): SxProps => {
            const INITIAL_DELAY: number = 1; // in s
            const DELAY_BETWEEN_ELEMENTS: number = 0.05; // in s

            let result: SxProps = {};

            for (let i = 1; i <= 10; i++) {
                const delay: number = INITIAL_DELAY + DELAY_BETWEEN_ELEMENTS * (i - 1);

                (result as any)[`&:nth-of-type(${i})`] = {
                    animation: `${fadeSimple} .3s ${delay}s both`,
                };
            }

            return result;
        })(),
    },
    ".already-taken-turns-communique": {
        animation: `${fadeSimple} .3s 1.6s both linear`,
    },
} as SxProps;
