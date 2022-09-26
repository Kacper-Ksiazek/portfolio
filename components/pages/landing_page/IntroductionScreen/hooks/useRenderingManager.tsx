// Tools
import { useState, useEffect, useRef } from "react";
// Types
import type { MinigameStage } from "../context/MinigameContext";
import type { WayOfRendering } from "@/components/pages/landing_page/IntroductionScreen/@types";

interface UseRenderingManager {
    initialIntroductionRendering: WayOfRendering;
    genderPickingRendering: WayOfRendering;
    throphyCollectingRendering: WayOfRendering;
}

export const useRenderingManager = ({ minigameStage }: { minigameStage: MinigameStage }): UseRenderingManager => {
    const OUTRO_ANIMATION_DURATION: number = 400;

    const latestStage = useRef<MinigameStage | null>(null);
    const [anyProgressHasBeenMade, setAnyProgressHasBeenMade] = useState<boolean>(false);

    const [initialIntroductionRendering, setInitalIntroductionRenderingForm] = useState<WayOfRendering>("RENDER");
    const [genderPickingRendering, setGenderPickingRenderingForm] = useState<WayOfRendering>("DO_NOT_RENDER");
    const [throphyCollectingRendering, setThrophyCollectingRenderingForm] = useState<WayOfRendering>("DO_NOT_RENDER");

    useEffect(() => {
        if (latestStage.current === minigameStage) return;

        // Transition INTO gender picking stage
        if (minigameStage === "GENGER_PICKING") {
            setAnyProgressHasBeenMade(true);
            setInitalIntroductionRenderingForm("RENDER_WITH_OUTRO_ANIMATION");
            //
            setTimeout(() => {
                setInitalIntroductionRenderingForm("DO_NOT_RENDER");
                setGenderPickingRenderingForm("RENDER");
            }, OUTRO_ANIMATION_DURATION);
        }
        // Transition FROM gender picking stage intro throphy collecting
        else if (minigameStage === "THROPHY_COLLECTING") {
            setGenderPickingRenderingForm("RENDER_WITH_OUTRO_ANIMATION");
            //
            setTimeout(() => {
                setGenderPickingRenderingForm("DO_NOT_RENDER");
                setThrophyCollectingRenderingForm("RENDER");
            }, OUTRO_ANIMATION_DURATION);
        } else if (minigameStage === "INITIAL" && anyProgressHasBeenMade) {
            setThrophyCollectingRenderingForm("RENDER_WITH_OUTRO_ANIMATION");
            //
            setTimeout(() => {
                setThrophyCollectingRenderingForm("DO_NOT_RENDER");
                setInitalIntroductionRenderingForm("RENDER");
            }, OUTRO_ANIMATION_DURATION);
        }

        latestStage.current = minigameStage;
    }, [minigameStage, anyProgressHasBeenMade]);

    return { initialIntroductionRendering, genderPickingRendering, throphyCollectingRendering };
};
