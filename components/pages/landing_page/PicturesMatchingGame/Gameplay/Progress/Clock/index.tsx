// Tools
import { useMemo, useEffect } from "react";
import { formatTime } from "./utils/formatTime";
// Types
import type { Gameplay, PicturesMatchingGameContextInterface } from "@/@types/pages/PicturesMatchingGame/context";
import type { FunctionComponent } from "react";
// Material UI Icons
import AccessTime from "@mui/icons-material/AccessTime";
// Styled components
import ClockBase from "./ClockBase";

interface ClockProps {
    gameplay: Gameplay;
    incrementTime: PicturesMatchingGameContextInterface["methods"]["incrementTime"];
}

const Clock: FunctionComponent<ClockProps> = (params) => {
    const countTime = useMemo<boolean>(() => {
        return !params.gameplay.isExiting && params.gameplay.time.count;
    }, [params]);

    useEffect(() => {
        let interval: ReturnType<typeof setInterval> | null = null;
        if (countTime) interval = setInterval(params.incrementTime, 1000);

        return () => {
            if (interval !== null) clearInterval(interval);
        };
    }, [countTime, params.incrementTime]);

    return (
        <ClockBase
            id="pictures-matching-game-clock"
            className={[
                countTime ? "counting-active" : "", //
                params.gameplay.isOver ? "is-over" : "",
            ].join(" ")}
        >
            <AccessTime />
            <span>{formatTime(params.gameplay.time)}</span>
        </ClockBase>
    );
};

export default Clock;
