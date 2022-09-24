// Tools
import { useState, useEffect } from "react";
import { useLandingScreenTechnologiesContext } from "../hooks/useLandingScreenTechnologiesContext";
import { useMinigameContext } from "@/components/pages/landing_page/IntroductionScreen/hooks/useMinigameContext";
// Types
import type { FunctionComponent } from "react";
// Other components
import ControlButton from "./ControlButton";
// Styled components
import ProgressBarBase from "./_styled_components/ProgressBarBase";
import ProgressIndicator from "./_styled_components/ProgressIndicator";

const ProgressBar: FunctionComponent = () => {
    const OUTRO_ANIMATION_DURATION: number = 500;

    const { minigameStage } = useMinigameContext();
    const { progress } = useLandingScreenTechnologiesContext();

    const [progressBarHasBeenClosed, setProgressBarHasBeenClosed] = useState<boolean>(false);
    const progressBarIsBeingClosed: boolean = minigameStage !== "INITIAL" && minigameStage !== "PROCESSING";

    useEffect(() => {
        if (progressBarIsBeingClosed) {
            setTimeout(() => {
                setProgressBarHasBeenClosed(true);
            }, OUTRO_ANIMATION_DURATION);
        }
    }, [progressBarIsBeingClosed]);

    if (progress === 0 || progressBarHasBeenClosed) return <></>;
    return (
        <ProgressBarBase
            className={[
                progress === 100 ? "completed" : "", //
                minigameStage === "PROCESSING" ? "is-processing" : "",
                progressBarIsBeingClosed ? "exit" : "",
            ].join(" ")}
        >
            <ProgressIndicator style={{ width: `${progress}%` }} className="indicator" />

            <ControlButton isInProgress={progress !== 100} />
        </ProgressBarBase>
    );
};

export default ProgressBar;
