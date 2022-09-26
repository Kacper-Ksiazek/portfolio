// Tools
import { useState, createContext, useEffect } from "react";
// Types
import type { FunctionComponent, ReactNode } from "react";
import type { ReleventTechnology } from "@/@types/prisma/Project";
import type { MinigameStage } from "@/components/pages/landing_page/IntroductionScreen/context/MinigameContext";

interface LandingScreenTechnologiesContextInterface {
    progress: number;
    blockInteractions: boolean;

    markIconAsMarked: (icon: ReleventTechnology) => void;
    isAlreadyClicked: (icon: ReleventTechnology) => boolean;
}

export const LandingScreenTechnologiesContext = createContext<LandingScreenTechnologiesContextInterface>({} as any);

interface LandingScreenTechnologiesContextProviderProps {
    children: ReactNode;
    minigameStage: MinigameStage;
}
export const LandingScreenTechnologiesContextProvider: FunctionComponent<LandingScreenTechnologiesContextProviderProps> = (params) => {
    const TECHNOLOGIES_IN_TOTAL: number = 24;
    const INTRO_ANIMATIONS_DURATION: number = 6000;

    const [blockInteractions, setBlockInteractions] = useState<boolean>(true);
    const [clickedIcons, setClickedIcons] = useState<Set<ReleventTechnology>>(new Set([]));

    const markIconAsMarked: LandingScreenTechnologiesContextInterface["markIconAsMarked"] = (icon) => {
        setClickedIcons((currentIconsSet) => new Set([...(currentIconsSet as any), icon]));
    };

    const isAlreadyClicked: LandingScreenTechnologiesContextInterface["isAlreadyClicked"] = (icon) => {
        return clickedIcons.has(icon);
    };

    useEffect(() => {
        if (params.minigameStage === "GENGER_PICKING") {
            setClickedIcons(new Set([]));
        }
    }, [params.minigameStage]);

    useEffect(() => {
        if (params.minigameStage === "INITIAL") {
            setBlockInteractions(true);
            setTimeout(() => {
                setBlockInteractions(false);
                markIconAsMarked("prisma");
            }, INTRO_ANIMATIONS_DURATION);
        }
    }, [params.minigameStage]);

    return (
        <LandingScreenTechnologiesContext.Provider
            value={{
                progress: clickedIcons.size === 1 ? 0 : (clickedIcons.size * 100) / TECHNOLOGIES_IN_TOTAL,
                blockInteractions: params.minigameStage === "INITIAL" || params.minigameStage === "PROCESSING" ? blockInteractions : true,
                markIconAsMarked,
                isAlreadyClicked,
            }}
        >
            {params.children}
        </LandingScreenTechnologiesContext.Provider>
    );
};
