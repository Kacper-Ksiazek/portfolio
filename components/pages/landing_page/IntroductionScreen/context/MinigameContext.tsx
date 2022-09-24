// Tools
import { createContext, useState } from "react";
// Types
import type { Dispatch, SetStateAction, FunctionComponent, ReactNode } from "react";

type Gender = "MALE" | "FEMALE" | "OTHER";
type MinigameStage = "INITIAL" | "PROCESSING" | "GENGER_PICKING" | "THROPHY_COLLECTING";

interface MinigameContextInterface {
    minigameStage: MinigameStage;
    changeMinigameStage: Dispatch<SetStateAction<MinigameStage>>;

    selectedGender: Gender | null;
    pickGender: (gender: Gender) => void;
}

export const MinigameContext = createContext<MinigameContextInterface>({} as any);

export const MinigameContextProvider: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
    const [minigameStage, changeMinigameStage] = useState<MinigameContextInterface["minigameStage"]>("INITIAL");
    const [selectedGender, pickGender] = useState<MinigameContextInterface["selectedGender"]>(null);

    return (
        <MinigameContext.Provider
            value={{
                minigameStage,
                changeMinigameStage,
                selectedGender,
                pickGender,
            }}
        >
            {children}
        </MinigameContext.Provider>
    );
};
