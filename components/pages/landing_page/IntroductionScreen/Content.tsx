// Tools
import dynamic from "next/dynamic";
import { useMinigameContext } from "./hooks/useMinigameContext";
import { useRenderingManager } from "./hooks/useRenderingManager";
// Types
import type { Dispatch, FunctionComponent, SetStateAction } from "react";
// Minigame's stages
import InitialIntroduction from "./MinigameStages/1_InitialIntroduction";
const GenderPicking = dynamic(() => import("./MinigameStages/2_GenderPicking"));
const TrophyCollecting = dynamic(() => import("./MinigameStages/3_TrophyCollecting"));

interface IntroductionScreenInnerContentProps {
    viewportWidth: number;
    setScrollButtonIsHovered: Dispatch<SetStateAction<boolean>>;
}

const IntroductionScreenInnerContent: FunctionComponent<IntroductionScreenInnerContentProps> = (props) => {
    const { setScrollButtonIsHovered, viewportWidth } = props;

    const { minigameStage } = useMinigameContext();
    const { initialIntroductionRendering, genderPickingRendering, throphyCollectingRendering } = useRenderingManager({ minigameStage });

    if (viewportWidth > 1150) {
        return (
            <>
                <InitialIntroduction
                    rendering={initialIntroductionRendering}
                    onScrollButtonHover={() => setScrollButtonIsHovered(true)} //
                    onScrollButtonBlur={() => setScrollButtonIsHovered(false)}
                />
                <GenderPicking rendering={genderPickingRendering} />
                <TrophyCollecting rendering={throphyCollectingRendering} />
            </>
        );
    }
    //
    else {
        return (
            <InitialIntroduction
                rendering={"RENDER"}
                onScrollButtonHover={() => setScrollButtonIsHovered(true)} //
                onScrollButtonBlur={() => setScrollButtonIsHovered(false)}
            />
        );
    }
};

export default IntroductionScreenInnerContent;
