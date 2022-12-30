// Tools
import { useEffect, useRef } from "react";
import { formatTime } from "@/utils/client/formatTime";
// Types
import type { Time } from "@/@types/pages/PicturesMatchingGame/reducer";
import type { PicturesMatchingGameContextInterface } from "@/@types/pages/PicturesMatchingGame/context";
import type { FunctionComponent } from "react";
// Material UI Icons
import AccessTime from "@mui/icons-material/AccessTime";
// Styled components
import { ProgressRow } from "./styled_components";

interface ClockProps {
    time: Time;
    countTime: boolean;
    incrementTime: PicturesMatchingGameContextInterface["methods"]["incrementTime"];
}

const Clock: FunctionComponent<ClockProps> = (params) => {
    const interval = useRef<ReturnType<typeof setInterval> | null>(null);

    useEffect(() => {
        if (params.countTime === false && interval.current !== null) {
            clearInterval(interval.current);
            interval.current = null;
        }
        //
        else if (params.countTime === true && interval.current === null) {
            interval.current = setInterval(params.incrementTime, 1000);
        }
    }, [params.countTime, params.incrementTime]);

    return (
        <ProgressRow sx={{ fontSize: "28px !important" }}>
            <AccessTime />
            <span>
                {formatTime({
                    outputType: "CLOCK",
                    time: params.time,
                })}
            </span>
        </ProgressRow>
    );
};

export default Clock;
