// Tools
import { fadeSimple, singleTechnologyPulse, singleTechnologyPulse2 } from "./keyframes";
// Types
import type { SxProps } from "@mui/material";

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
            `${singleTechnologyPulse} ${DURATION} ${delay}s linear`, //
            `${singleTechnologyPulse2} ${DURATION} ${BIG_PULSE_DELAY}s linear`, //
        ].join(", ");
    };

    return {
        //
        // FadeSimple animations
        //
        ".wing.left .column:nth-of-type(3), .wing.right .column:nth-of-type(1)": {
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
        ".wing.left .column:nth-of-type(2), .wing.right .column:nth-of-type(2)": {
            ".technology:nth-of-type(2), .technology:nth-of-type(3)": {
                animation: fadeSimpleOnParticularStage(2),
            },
            ".technology:nth-of-type(1), .technology:nth-of-type(4)": {
                animation: fadeSimpleOnParticularStage(5),
            },
        },
        ".wing.left .column:nth-of-type(1), .wing.right .column:nth-of-type(3)": {
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
        ".wing.left .column .technology:nth-of-type(1)": {
            ".icon-wrapper": {
                animation: pulseOnParticularStage(0),
            },
        },
        // Stage 2
        ".wing.left .column .technology:nth-of-type(2)": {
            ".icon-wrapper": {
                animation: pulseOnParticularStage(1),
            },
        },
        // Stage 3
        [[
            ".wing.left .column .technology:nth-of-type(3)", //
            ".wing.right .column:nth-of-type(1) .technology:nth-of-type(1)",
        ].join(", ")]: {
            ".icon-wrapper": {
                animation: pulseOnParticularStage(2),
            },
        },
        // Stage 4
        [[
            ".wing.left .column:not(&:nth-of-type(1)) .technology:nth-of-type(4)", //
            ".wing.right .column:nth-of-type(1) .technology:nth-of-type(2)",
            ".wing.right .column:nth-of-type(2) .technology:nth-of-type(1)",
        ].join(", ")]: {
            ".icon-wrapper": {
                animation: pulseOnParticularStage(3),
            },
        },
        // Stage 5
        [[
            ".wing.left .column:nth-of-type(3) .technology:nth-of-type(5)", //
            ".wing.right .column:nth-of-type(1) .technology:nth-of-type(3)",
            ".wing.right .column:nth-of-type(2) .technology:nth-of-type(2)",
            ".wing.right .column:nth-of-type(3) .technology:nth-of-type(1)",
        ].join(", ")]: {
            ".icon-wrapper": {
                animation: pulseOnParticularStage(4),
            },
        },
        // Stage 6
        [[
            ".wing.right .column:nth-of-type(1) .technology:nth-of-type(4)", //
            ".wing.right .column:nth-of-type(2) .technology:nth-of-type(3)",
            ".wing.right .column:nth-of-type(3) .technology:nth-of-type(2)",
        ].join(", ")]: {
            ".icon-wrapper": {
                animation: pulseOnParticularStage(5),
            },
        },
        // Stage 7
        [[
            ".wing.right .column:nth-of-type(1) .technology:nth-of-type(5)", //
            ".wing.right .column:nth-of-type(2) .technology:nth-of-type(4)",
            ".wing.right .column:nth-of-type(3) .technology:nth-of-type(3)",
        ].join(", ")]: {
            ".icon-wrapper": {
                animation: pulseOnParticularStage(6),
            },
        },
    };
})() as SxProps;
