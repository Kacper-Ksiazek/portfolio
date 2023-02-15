// Tools
import { ANIMATIONS } from "../_keyframes";
import { getAnimationPropertyValue } from "../getAnimationPropertyValue";
// Types
import type { Direction } from "../@types";
import type { SxProps } from "@mui/material/styles";

interface GenerateSequentialLineAnimationsParams {
    sequence: [Direction, Direction][];
    /** common duration for both start and end */
    duration: number;
    color: string;
    playBackToBack?: boolean;
    delays: {
        initial?: number;
        beforeOutro: number;
        betweenSequenceElements: number;
    };
}

export function generateSequentialLineAnimations(params: GenerateSequentialLineAnimationsParams) {
    let result: SxProps = {
        "&::after": {
            content: "''",
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            background: params.color,
            zIndex: "20",
        },
    };

    let delay: number = params.delays.initial ?? 0;

    params.sequence.forEach(([start, end], i) => {
        (result as any)[`&:nth-of-type(${i + 1})`] = {
            ">*": {
                animation: `${ANIMATIONS.CONTENT_APPEARING} 0.001s ${delay + 0.05 + params.duration}s both`,
            },
            "&::after": {
                animation: getAnimationPropertyValue({
                    commonDuration: params.duration,
                    initialDelay: delay,
                    start: {
                        direction: start,
                    },
                    end: {
                        direction: end,
                        delay: params.delays.beforeOutro,
                    },
                }),
            },
        };
        delay += params.delays.betweenSequenceElements;
        if (params.playBackToBack) delay += params.duration * 2 + params.delays.beforeOutro;
    });

    return result;
}
