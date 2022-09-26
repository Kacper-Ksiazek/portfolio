// Tools
import { keyframes } from "@mui/system";
// Types
import type { SxProps } from "@mui/system";

const pulse = keyframes({
    "0%,20%,100%": {
        opacity: 0.2,
    },
    "10%": {
        opacity: 0.35,
    },
});

export default (() => {
    const DURATION: number = 0.3;
    const DEFAULT_DELAY: number = 0.3;
    const DELAY_BETWEEN_GROUPS: number = 0.2;

    const getAnimations = ({ columnsGroupIndex }: { columnsGroupIndex: number }): string => {
        const delay: number = DEFAULT_DELAY + columnsGroupIndex * DELAY_BETWEEN_GROUPS;

        return [
            `${pulse} ${DURATION * 9}s ${delay}s infinite`, //
        ].join(", ");
    };

    return {
        [[
            ".wing.right .column:nth-of-type(1) .technology .icon-wrapper", //
            ".wing.left .column:nth-of-type(3) .technology .icon-wrapper", //
        ].join(", ")]: {
            animation: getAnimations({ columnsGroupIndex: 0 }),
        },
        [[
            ".wing.right .column:nth-of-type(2) .technology .icon-wrapper", //
            ".wing.left .column:nth-of-type(2) .technology .icon-wrapper", //
        ].join(", ")]: {
            animation: getAnimations({ columnsGroupIndex: 1 }),
        },
        [[
            ".wing.right .column:nth-of-type(3) .technology .icon-wrapper", //
            ".wing.left .column:nth-of-type(1) .technology .icon-wrapper", //
        ].join(", ")]: {
            animation: getAnimations({ columnsGroupIndex: 2 }),
        },
    };
})() as SxProps;
