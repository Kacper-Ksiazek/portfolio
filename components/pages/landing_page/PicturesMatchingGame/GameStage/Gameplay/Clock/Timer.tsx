// Tools
import { useEffect, useReducer } from "react";
import { formatTime } from "@/utils/client/formatTime";
// Types
import type { FunctionComponent } from "react";
import type { BoxProps } from "@mui/material/Box";
import type { MinSecTimeFormat } from "@/utils/client/formatTime";
// Material UI Icons
import AccessTime from "@mui/icons-material/AccessTime";
// Styled components
import { ClockRow } from "./styled_components";

interface TimerProps extends BoxProps {
    countTime: boolean;
}

const timeReducer = (state: MinSecTimeFormat): MinSecTimeFormat => {
    if (state.seconds == 59) {
        return {
            minutes: state.minutes + 1,
            seconds: 0,
        };
    } else {
        return {
            minutes: state.minutes,
            seconds: state.seconds + 1,
        };
    }
};

const Timer: FunctionComponent<TimerProps> = ({ countTime, ...propsToForward }) => {
    const [time, incrementTime] = useReducer(timeReducer, { minutes: 0, seconds: 0 } as MinSecTimeFormat);

    useEffect(() => {
        const interval: ReturnType<typeof setInterval> | null = countTime ? setInterval(incrementTime, 1000) : null;

        return function () {
            if (interval !== null) clearTimeout(interval);
        };
    }, [countTime]);

    return (
        <ClockRow
            {...propsToForward}
            sx={{
                fontSize: "30px !important",
                ...propsToForward.sx,
            }}
        >
            <AccessTime />
            <span>
                {formatTime({
                    outputType: "CLOCK",
                    time,
                })}
            </span>
        </ClockRow>
    );
};

export default Timer;
