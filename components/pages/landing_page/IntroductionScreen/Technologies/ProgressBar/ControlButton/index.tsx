// Tools
import { useState } from "react";
import { useMinigameContext } from "@/components/pages/landing_page/IntroductionScreen/hooks/useMinigameContext";
// Types
import type { FunctionComponent } from "react";
// Other components
import Continue from "./stages/Continue";
import Processing from "./stages/Processing";
import StartProcessing from "./stages/StartProcessing";
// Styled components
import ControlButtonBase from "./ControlButtonBase";

interface ControlButtonProps {
    isInProgress: boolean;
}

const ControlButton: FunctionComponent<ControlButtonProps> = (props) => {
    const { minigameStage, changeMinigameStage } = useMinigameContext();

    const PROCESSING_ANIMATIONS_DURATION: number = 3600;
    const [processingIsOver, setProcessingIsOver] = useState<boolean>(false);

    const startProcessing = () => {
        if (props.isInProgress) return;
        changeMinigameStage("PROCESSING");

        setTimeout(() => {
            setProcessingIsOver(true);
        }, PROCESSING_ANIMATIONS_DURATION);
    };

    const continueToTrophy = () => {
        if (!processingIsOver) return;
        changeMinigameStage("GENGER_PICKING");
    };

    return (
        <ControlButtonBase
            className={[
                "control-button", //
                minigameStage === "GENGER_PICKING" ? "close" : "",
            ].join(" ")}
        >
            <StartProcessing displayWhen={minigameStage === "INITIAL"} onClick={startProcessing} />
            <Processing displayWhen={minigameStage === "PROCESSING" && !processingIsOver} />
            <Continue displayWhen={minigameStage === "PROCESSING" && processingIsOver} onClick={continueToTrophy} />
        </ControlButtonBase>
    );
};

export default ControlButton;
