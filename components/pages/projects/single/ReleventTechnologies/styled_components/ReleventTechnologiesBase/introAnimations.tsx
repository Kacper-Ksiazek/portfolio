// Tools
import { keyframes } from "@mui/system";
import fadeSimple from "@/components/keyframes/intro/fadeSimple";
// Types
import type { SxProps } from "@mui/system";

const fadeSimpleButWithSmallerOpacity = keyframes({
    from: {
        opacity: 0,
    },
    to: {
        opacity: 0.5,
    },
});

export default {
    "#relevent-technologies-background": {
        animation: `${fadeSimple} 2s .1s both linear`,
    },
    ".single-relevent-technology": {
        ...((): SxProps => {
            const NUMBER_OF_TECHNOLOGIES: number = 10;
            const DELAY_OF_THE_FIRST_ELEMENT: number = 0.3;
            const DELAY_BETWEEN_TWO_ANIMATIONS: number = 0.1;

            const result: SxProps = {};

            for (let i = 1; i <= NUMBER_OF_TECHNOLOGIES; i++) {
                const delay = DELAY_OF_THE_FIRST_ELEMENT + (i - 1) * DELAY_BETWEEN_TWO_ANIMATIONS;

                (result as any)[`&:nth-of-type(${i})`] = {
                    animation: `${fadeSimpleButWithSmallerOpacity} .3s ${delay}s linear both`,
                };
            }

            return result;
        })(),
    },
} as SxProps;
