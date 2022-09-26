// Tools
import { keyframes } from "@mui/system";
// Types
import type { SxProps } from "@mui/system";

const createPulseAnimation = () => {
    return keyframes({
        "0%, 100%": {
            opacity: 0.6,
        },
        "33%, 66%": {
            opacity: 1,
        },
    });
};

const pulseLoopFirst = createPulseAnimation();
const pulseLoopSecond = createPulseAnimation();

export default (() => {
    const COLUMNS_IN_TOTAL: number = 6;
    const FIRST_LOOP_DELAY: number = 0.5;
    const SECOND_LOOP_DELAY: number = 2.4;
    const DELAY_BETWEEN_COLUMNS: number = 0.15;
    const PULSE_ANIMATION_DURATION: number = 1;

    const getAnimations = ({ columnIndex }: { columnIndex: number }): string => {
        const firstLoopDelay: number = FIRST_LOOP_DELAY + DELAY_BETWEEN_COLUMNS * columnIndex;
        const secondLoopDelay: number = SECOND_LOOP_DELAY + DELAY_BETWEEN_COLUMNS * (COLUMNS_IN_TOTAL - columnIndex - 1);

        return [
            `${pulseLoopFirst} ${PULSE_ANIMATION_DURATION}s ${firstLoopDelay}s`, //
            `${pulseLoopSecond} ${PULSE_ANIMATION_DURATION}s ${secondLoopDelay}s`,
        ].join(", ");
    };

    return {
        ".wing.right .column:nth-of-type(3) .technology .icon-wrapper": {
            animation: getAnimations({ columnIndex: 0 }),
        },
        ".wing.right .column:nth-of-type(2) .technology .icon-wrapper": {
            animation: getAnimations({ columnIndex: 1 }),
        },
        ".wing.right .column:nth-of-type(1) .technology .icon-wrapper": {
            animation: getAnimations({ columnIndex: 2 }),
        },
        ".wing.left .column:nth-of-type(3) .technology .icon-wrapper": {
            animation: getAnimations({ columnIndex: 3 }),
        },
        ".wing.left .column:nth-of-type(2) .technology .icon-wrapper": {
            animation: getAnimations({ columnIndex: 4 }),
        },
        ".wing.left .column:nth-of-type(1) .technology .icon-wrapper": {
            animation: getAnimations({ columnIndex: 5 }),
        },
    };
})() as SxProps;
