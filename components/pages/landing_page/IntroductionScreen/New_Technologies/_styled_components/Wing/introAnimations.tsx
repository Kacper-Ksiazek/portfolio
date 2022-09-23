// Tools
import { keyframes } from "@mui/system";
import fadeSimple from "@/components/keyframes/intro/fadeSimple";
// Types
import type { SxProps } from "@mui/system";

const singleTechnologyPulse = keyframes({
    "0%,100%": {
        opacity: 0.4,
    },
    "33%,66%": {
        opacity: 0.6,
    },
});

// It has to be done like that...
const singleTechnologyPulse2 = keyframes({
    "0%,100%": {
        opacity: 0.4,
    },
    "33%,66%": {
        opacity: 0.6,
    },
});

type CSSAnimationTimeExpression = `${number}.${number}s` | `${number}s`;

export default (() => {
    const FADE_SIMPLE_DEFAULT_DELAY: number = 1.2;
    const PULSE_DEFAULT_DELAY: number = 4;
    const BIG_PULSE_DELAY: number = 5.2;

    const FADE_SIMPLE_DELAY_BETWEEN_STAGES: number = 0.2;
    const PULSE_DELAY_BETWEEN_STAGES: number = 0.1;

    const DURATION: CSSAnimationTimeExpression = "0.4s";

    const fadeSimpleOnParticularStage = (stageIndex: number): string => {
        const delay: number = FADE_SIMPLE_DEFAULT_DELAY + FADE_SIMPLE_DELAY_BETWEEN_STAGES * stageIndex;

        return `${fadeSimple} ${DURATION} ${delay}s linear both`;
    };

    const pulseOnParticularStage = (stageIndex: number): string => {
        const delay: number = PULSE_DEFAULT_DELAY + PULSE_DELAY_BETWEEN_STAGES * stageIndex;

        return [
            `${singleTechnologyPulse} ${DURATION} ${delay}s linear both`, //
            `${singleTechnologyPulse2} ${DURATION} ${BIG_PULSE_DELAY}s linear`, //
        ].join(", ");
    };

    return {
        //
        // FadeSimple animations
        //
        "&.left .column:nth-of-type(3), &.right .column:nth-of-type(1)": {
            ".technology:nth-of-type(3)": {
                animation: fadeSimpleOnParticularStage(0),
            },
            ".technology:nth-of-type(2), .technology:nth-of-type(4)": {
                animation: fadeSimpleOnParticularStage(1),
            },
            ".technology:nth-of-type(1), .technology:nth-of-type(5)": {
                animation: fadeSimpleOnParticularStage(4),
            },
        },
        "&.left .column:nth-of-type(2), &.right .column:nth-of-type(2)": {
            ".technology:nth-of-type(2), .technology:nth-of-type(3)": {
                animation: fadeSimpleOnParticularStage(2),
            },
            ".technology:nth-of-type(1), .technology:nth-of-type(4)": {
                animation: fadeSimpleOnParticularStage(5),
            },
        },
        "&.left .column:nth-of-type(1), &.right .column:nth-of-type(3)": {
            ".technology:nth-of-type(2)": {
                animation: fadeSimpleOnParticularStage(3),
            },
            ".technology:nth-of-type(1), .technology:nth-of-type(3)": {
                animation: fadeSimpleOnParticularStage(6),
            },
        },
        //
        // Wave animation
        //
        // Stage 1
        "&.left .column .technology:nth-of-type(1)": {
            img: {
                animation: pulseOnParticularStage(0),
            },
        },
        // Stage 2
        "&.left .column .technology:nth-of-type(2)": {
            img: {
                animation: pulseOnParticularStage(1),
            },
        },
        // Stage 3
        [[
            "&.left .column .technology:nth-of-type(3)", //
            "&.right .column:nth-of-type(1) .technology:nth-of-type(1)",
        ].join(", ")]: {
            img: {
                animation: pulseOnParticularStage(2),
            },
        },
        // Stage 4
        [[
            "&.left .column:not(&:nth-of-type(1)) .technology:nth-of-type(4)", //
            "&.right .column:nth-of-type(1) .technology:nth-of-type(2)",
            "&.right .column:nth-of-type(2) .technology:nth-of-type(1)",
        ].join(", ")]: {
            img: {
                animation: pulseOnParticularStage(3),
            },
        },
        // Stage 5
        [[
            "&.left .column:nth-of-type(3) .technology:nth-of-type(5)", //
            "&.right .column:nth-of-type(1) .technology:nth-of-type(3)",
            "&.right .column:nth-of-type(2) .technology:nth-of-type(2)",
            "&.right .column:nth-of-type(3) .technology:nth-of-type(1)",
        ].join(", ")]: {
            img: {
                animation: pulseOnParticularStage(4),
            },
        },
        // Stage 6
        [[
            "&.right .column:nth-of-type(1) .technology:nth-of-type(4)", //
            "&.right .column:nth-of-type(2) .technology:nth-of-type(3)",
            "&.right .column:nth-of-type(3) .technology:nth-of-type(2)",
        ].join(", ")]: {
            img: {
                animation: pulseOnParticularStage(5),
            },
        },
        // Stage 7
        [[
            "&.right .column:nth-of-type(1) .technology:nth-of-type(5)", //
            "&.right .column:nth-of-type(2) .technology:nth-of-type(4)",
            "&.right .column:nth-of-type(3) .technology:nth-of-type(3)",
        ].join(", ")]: {
            img: {
                animation: pulseOnParticularStage(6),
            },
        },
    };
})() as SxProps;
