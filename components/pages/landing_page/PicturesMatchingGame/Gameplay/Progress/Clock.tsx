// Tools
import { useEffect } from "react";
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
    useEffect(() => {
        let interval: ReturnType<typeof setInterval> | null = null;
        if (params.countTime) interval = setInterval(params.incrementTime, 1000);

        return () => {
            if (interval !== null) clearInterval(interval);
        };
    }, [params.countTime, params.incrementTime]);

    return (
        <ProgressRow sx={{ fontSize: "28px !important" }}>
            <AccessTime />
            <span>{formatTime(params.time)}</span>
        </ProgressRow>
    );
};

export default Clock;
