// Tools
import useWindowSizes from "@/hooks/useWindowSizes";
import { useMinigameContext } from "./hooks/useMinigameContext";
import { useRenderingManager } from "./hooks/useRenderingManager";
// Types
import type { FunctionComponent } from "react";
// Other components
import Technologies from "./New_Technologies";
import { MinigameContextProvider } from "./context/MinigameContext";
// Minigame's stages
import GenderPicking from "./MinigameStages/2_GenderPicking";
import TrophyCollecting from "./MinigameStages/3_TrophyCollecting";
import InitialIntroduction from "./MinigameStages/1_InitialIntroduction";
// Styled components
import IntroductionScreenBase from "./IntroductionScreenBase";

const IntroductionScreen: FunctionComponent = () => {
    const { width } = useWindowSizes();
    const { minigameStage } = useMinigameContext();

    const { initialIntroductionRendering, genderPickingRendering, throphyCollectingRendering } = useRenderingManager({ minigameStage });

    return (
        <IntroductionScreenBase
            renderBigCircle={width > 1450 || width <= 1150} //
            elementsOutsideContent={width > 1150 && <Technologies />}
        >
            <InitialIntroduction rendering={initialIntroductionRendering} />
            <GenderPicking rendering={genderPickingRendering} />
            <TrophyCollecting rendering={throphyCollectingRendering} />
        </IntroductionScreenBase>
    );
};

const IntroductionScreenWithMinigameContext: FunctionComponent = () => {
    return (
        <MinigameContextProvider>
            <IntroductionScreen />
        </MinigameContextProvider>
    );
};

export default IntroductionScreenWithMinigameContext;
