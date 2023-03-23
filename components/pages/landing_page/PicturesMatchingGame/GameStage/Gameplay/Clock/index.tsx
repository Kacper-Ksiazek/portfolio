// Tools
import { useEffect } from "react";
import { usePicturesMatchingGameContext } from "@/components/pages/landing_page/PicturesMatchingGame/hooks/usePicturesMatchingGameContext";
// Types
import type { FunctionComponent } from "react";
// Other components
import Timer from "./Timer";
// Styled components
import { ClockWrapper, ClockRow } from "./styled_components";

const INTRO_ANIMATION_DURATION: TimeInMS = 3000;

const Clock: FunctionComponent<{ limitContent: boolean }> = () => {
    const context = usePicturesMatchingGameContext();
    const { isCounting } = context.gameplay.time;

    useEffect(() => {
        if (context.gameplay.isOver && context.gameplay.time.isCounting) context.methods.recordTime("stop");
        else if (!context.gameplay.time.isCounting && !context.gameplay.isOver) {
            setTimeout(() => {
                context.methods.recordTime("start");
            }, INTRO_ANIMATION_DURATION);
        }
    }, [context.gameplay.isOver, context.gameplay.time.isCounting, context.methods]);

    return (
        <ClockWrapper
            id="pictures-matching-progress-wrapper"
            className={[
                context.gameplay.time.isCounting ? "counting-active" : "", //
                context.gameplay.isOver ? "is-over" : "",
            ].join(" ")}
        >
            <ClockRow>
                Moves: <strong>{context.gameplay.moves.inTotal}</strong>
            </ClockRow>

            <Timer countTime={isCounting} />

            <ClockRow>
                Mode: <strong>{context.difficulty}</strong>
            </ClockRow>
        </ClockWrapper>
    );
};

export default Clock;
