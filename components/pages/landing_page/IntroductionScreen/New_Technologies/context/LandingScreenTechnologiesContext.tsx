// Tools
import { useState, createContext, useEffect } from "react";
// Types
import type { FunctionComponent, ReactNode } from "react";
import type { ReleventTechnology } from "@/@types/prisma/Project";

interface LandingScreenTechnologiesContextInterface {
    progress: number;
    blockInteractions: boolean;

    markIconAsMarked: (icon: ReleventTechnology) => void;
    isAlreadyClicked: (icon: ReleventTechnology) => boolean;
}

export const LandingScreenTechnologiesContext = createContext<LandingScreenTechnologiesContextInterface>({} as any);

interface LandingScreenTechnologiesContextProviderProps {
    children: ReactNode;
}
export const LandingScreenTechnologiesContextProvider: FunctionComponent<LandingScreenTechnologiesContextProviderProps> = (props) => {
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
        let timeout: ReturnType<typeof setTimeout> = setTimeout(() => {
            setBlockInteractions(false);
            markIconAsMarked("prisma");
        }, INTRO_ANIMATIONS_DURATION);

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    return (
        <LandingScreenTechnologiesContext.Provider
            value={{
                progress: clickedIcons.size === 1 ? 0 : (clickedIcons.size * 100) / TECHNOLOGIES_IN_TOTAL,
                blockInteractions,
                markIconAsMarked,
                isAlreadyClicked,
            }}
        >
            {props.children}
        </LandingScreenTechnologiesContext.Provider>
    );
};
