// Tools
import { useMemo } from "react";
import dynamic from "next/dynamic";
import { usePicturesMatchingGameContext } from "@/components/pages/landing_page/PicturesMatchingGame/hooks/usePicturesMatchingGameContext";
// Types
import type { FunctionComponent } from "react";
// Other components
import Timer from "./Timer";
const ContinueButton = dynamic(() => import("./ContinueButton"));
// Styled components
import { ClockWrapper, ClockRow } from "./styled_components";

const Clock: FunctionComponent<{ limitContent: boolean }> = (props) => {
    const context = usePicturesMatchingGameContext();

    const countTime = useMemo<boolean>(() => {
        return !context.gameplay.isExiting && context.gameplay.time.count;
    }, [context.gameplay]);

    return (
        <ClockWrapper
            id="pictures-matching-progress-wrapper"
            className={[
                countTime ? "counting-active" : "", //
                context.gameplay.isOver ? "is-over" : "",
            ].join(" ")}
        >
            {!props.limitContent && (
                <ContinueButton
                    disabled={context.gameplay.isOver} //
                    onClick={context.navigation.continueToTheGameSummary}
                />
            )}
            <Timer
                countTime={countTime} //
                time={context.gameplay.time}
                incrementTime={context.methods.incrementTime}
            />

            <ClockRow>
                Moves: <strong>{context.gameplay.moves.inTotal}</strong>
            </ClockRow>

            <ClockRow>
                Mode: <strong>{context.difficulty}</strong>
            </ClockRow>
        </ClockWrapper>
    );
};

export default Clock;
