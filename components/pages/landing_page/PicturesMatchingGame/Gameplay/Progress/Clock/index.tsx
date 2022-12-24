// Tools
import { useMemo, useEffect } from "react";
import { formatTime } from "./utils/formatTime";
import { usePicturesMatchingGameContext } from "../../../hooks/usePicturesMatchingGameContext";
// Types
import type { FunctionComponent } from "react";
// Material UI Icons
import AccessTime from "@mui/icons-material/AccessTime";
// Styled components
import ClockBase from "./ClockBase";

const Clock: FunctionComponent = () => {
    const context = usePicturesMatchingGameContext();

    const countTime = useMemo<boolean>(() => {
        return !context.gameplay.isExiting && context.gameplay.time.count;
    }, [context.gameplay.isExiting, context.gameplay.time.count]);

    useEffect(() => {
        let interval: ReturnType<typeof setInterval> | null = null;
        if (countTime) interval = setInterval(context.methods.incrementTime, 1000);

        return () => {
            if (interval !== null) clearInterval(interval);
        };
    }, [context.methods.incrementTime, countTime]);

    return (
        <ClockBase
            id="pictures-matching-game-clock"
            className={[
                countTime ? "counting-active" : "", //
                context.gameplay.isOver ? "is-over" : "",
            ].join(" ")}
        >
            <AccessTime />
            <span>{formatTime(context.gameplay.time)}</span>
        </ClockBase>
    );
};

export default Clock;
