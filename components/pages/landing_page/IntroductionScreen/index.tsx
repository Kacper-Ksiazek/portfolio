// Tools
import dynamic from "next/dynamic";
import useWindowSizes from "@/hooks/useWindowSizes";
import { useMinigameContext } from "./hooks/useMinigameContext";
import { useRenderingManager } from "./hooks/useRenderingManager";
// Types
import type { FunctionComponent } from "react";
// Other components
import Technologies from "./New_Technologies";
import { MinigameContextProvider } from "./context/MinigameContext";
// Minigame's stages
const GenderPicking = dynamic(() => import("./MinigameStages/2_GenderPicking"));
const TrophyCollecting = dynamic(() => import("./MinigameStages/3_TrophyCollecting"));
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
            {(() => {
                /* Render minigame only when viewport width is larger than 1150px */
                if (width > 1150) {
                    return (
                        <>
                            <InitialIntroduction rendering={initialIntroductionRendering} />
                            <GenderPicking rendering={genderPickingRendering} />
                            <TrophyCollecting rendering={throphyCollectingRendering} />
                        </>
                    );
                }
                //
                else {
                    return <InitialIntroduction rendering={"RENDER"} />;
                }
            })()}
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
