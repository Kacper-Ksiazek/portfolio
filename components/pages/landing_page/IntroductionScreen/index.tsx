// Tools
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import useWindowSizes from "@/hooks/useWindowSizes";
import { useMinigameContext } from "./hooks/useMinigameContext";
// Types
import type { FunctionComponent } from "react";
// Other components
import GenderPicking from "./GenderPicking";
import Technologies from "./New_Technologies";
import InitialIntroduction from "./InitialIntroduction";
import { MinigameContextProvider } from "./context/MinigameContext";
// Styled components
import IntroductionScreenBase from "./IntroductionScreenBase";

const IntroductionScreen: FunctionComponent = () => {
    const { width } = useWindowSizes();
    const { minigameStage } = useMinigameContext();

    type RenderingForm = "RENDER" | "DO_NOT_RENDER" | "RENDER_WITH_OUTRO_ANIMATION";
    const [initalIntroductionRenderingForm, setInitalIntroductionRenderingForm] = useState<RenderingForm>("RENDER");
    const [genderPickingRenderingForm, setGenderPickingRenderingForm] = useState<RenderingForm>("DO_NOT_RENDER");

    useEffect(() => {
        if (minigameStage === "GENGER_PICKING") {
            setInitalIntroductionRenderingForm("RENDER_WITH_OUTRO_ANIMATION");
            setTimeout(() => {
                setInitalIntroductionRenderingForm("DO_NOT_RENDER");
                setGenderPickingRenderingForm("RENDER");
            }, 401);
        }
        //
        else if (minigameStage === "THROPHY_COLLECTING") {
            setGenderPickingRenderingForm("RENDER_WITH_OUTRO_ANIMATION");
            setTimeout(() => {
                setGenderPickingRenderingForm("DO_NOT_RENDER");
            }, 401);
        }
        //
    }, [minigameStage]);

    return (
        <IntroductionScreenBase
            renderBigCircle={width > 1450 || width <= 1150} //
            elementsOutsideContent={width > 1150 && <Technologies />}
        >
            {(() => {
                if (initalIntroductionRenderingForm !== "DO_NOT_RENDER") {
                    return <InitialIntroduction outro={initalIntroductionRenderingForm === "RENDER_WITH_OUTRO_ANIMATION"} />;
                }
            })()}
            {/*  */}
            {(() => {
                if (genderPickingRenderingForm !== "DO_NOT_RENDER") {
                    return <GenderPicking outro={genderPickingRenderingForm === "RENDER_WITH_OUTRO_ANIMATION"} />;
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
