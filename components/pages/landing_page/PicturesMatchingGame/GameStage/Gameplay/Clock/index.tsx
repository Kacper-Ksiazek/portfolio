// Tools
import { useEffect } from "react";
import { CSS_REFERENCES } from "./css_references";
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
        // Stop counting time when game is over
        if (context.gameplay.isOver && context.gameplay.time.isCounting) context.methods.recordTime("stop");
        // Start counting time when game is started
        else if (!context.gameplay.time.isCounting && !context.gameplay.isOver) {
            setTimeout(() => {
                context.methods.recordTime("start");
            }, INTRO_ANIMATION_DURATION);
        }
    }, [context.gameplay.isOver, context.gameplay.time.isCounting, context.methods]);

    return (
        <ClockWrapper
            id={CSS_REFERENCES.WRAPPER} //
            className={[
                context.gameplay.time.isCounting ? "counting-active" : "", //
                context.gameplay.isOver ? "is-over" : "",
            ].join(" ")}
        >
            <ClockRow id={CSS_REFERENCES.MOVES_COUNTER}>
                Moves: <strong>{context.gameplay.moves.inTotal}</strong>
            </ClockRow>

            <Timer
                id={CSS_REFERENCES.TIMER} //
                countTime={isCounting}
            />

            <ClockRow id={CSS_REFERENCES.DIFFICULTY}>
                Mode: <strong>{context.difficulty}</strong>
            </ClockRow>
        </ClockWrapper>
    );
};

export default Clock;
