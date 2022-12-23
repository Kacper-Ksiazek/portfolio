// Types
import type { SetStateAction, Dispatch } from "react";
import type { GameplayReducerPropsToBeUsed } from "./reducer";
import type { Difficulty, PictureMatchingGameplayStage, PictureToMatch, UserChoiceAnimation } from "./index";

export interface PicturesMatchingGameContextInterface {
    navigation: NavigationBetweenStages;

    difficulty: Difficulty;
    pictureToDisplayInFullsize: PictureToMatch | null;
    gameplay: GameplayReducerPropsToBeUsed;

    methods: {
        incrementTime: () => void;
        setDifficulty: Dispatch<SetStateAction<Difficulty>>;
        handlePictureOnClick: (clickedPicture: PictureToMatch) => void;
        setPictureToDisplayInFullsize: Dispatch<SetStateAction<PictureToMatch | null>>;
    };
}

export interface NavigationBetweenStages {
    stage: PictureMatchingGameplayStage;

    /** Translates from "SELECT_DIFFICULTY" into "GAMEPLAY" */
    startNewGame: () => void;
    /** Translates from "GAMEPLAY" into "SELECT_DIFFICULTY" */
    exitCurrentGameplay: () => void;
    /** Translates from "GAMEPLAY" into "SUMMARY" */
    continueToTheGameSummary: () => void;
    /** Translates from "SUMMARY" into "SELECT_DIFFICULTY" */
    closeSummary: () => void;
}
