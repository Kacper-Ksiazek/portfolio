// Tools
import { useMemo } from "react";
import { usePicturesMatchingGameContext } from "@/components/pages/landing_page/PicturesMatchingGame/hooks/usePicturesMatchingGameContext";
// Types
import type { FunctionComponent } from "react";
// Other components
import Clock from "./Clock";
// Styled components
import { ProgressWrapper, ProgressRow } from "./styled_components";

const Progress: FunctionComponent = () => {
    const context = usePicturesMatchingGameContext();

    const countTime = useMemo<boolean>(() => {
        return !context.gameplay.isExiting && context.gameplay.time.count;
    }, [context.gameplay]);

    return (
        <ProgressWrapper
            id="pictures-matching-progress-wrapper"
            className={[
                countTime ? "counting-active" : "", //
                context.gameplay.isOver ? "is-over" : "",
            ].join(" ")}
        >
            <Clock
                countTime={countTime} //
                time={context.gameplay.time}
                incrementTime={context.methods.incrementTime}
            />

            <ProgressRow>
                Moves: <strong>{context.gameplay.moves.inTotal}</strong>
            </ProgressRow>

            <ProgressRow>
                Mode: <strong>{context.difficulty}</strong>
            </ProgressRow>
        </ProgressWrapper>
    );
};

export default Progress;
