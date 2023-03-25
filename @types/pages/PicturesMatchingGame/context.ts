// Types
import type { Statistics } from "./localStorage";
import type { SetStateAction, Dispatch } from "react";
import type { Gameplay, RecordTimeAction } from "./reducer";
import type { Difficulty, PictureMatchingGameplayStage, PictureToMatch } from "./index";

export type { Gameplay, Statistics };

export interface PicturesMatchingGameContextInterface {
    navigation: NavigationBetweenStages;

    difficulty: Difficulty;
    pictureToDisplayInFullsize: PictureToMatch | null;
    gameplay: Gameplay;
    statistics: Statistics;

    methods: {
        recordTime: (which: RecordTimeAction["payload"]) => void;
        setDifficulty: (params: Difficulty | { value: Difficulty; startNewGameplay: boolean }) => void;
        handlePictureOnClick: (clickedPicture: PictureToMatch) => void;
        setPictureToDisplayInFullsize: Dispatch<SetStateAction<PictureToMatch | null>>;
    };
}

export interface NavigationBetweenStages {
    stage: PictureMatchingGameplayStage;

    /** Translates from "MENU" into "GAMEPLAY" */
    startNewGame: (difficulty?: Difficulty) => void;
    /** Translates from "GAMEPLAY" into "MENU" */
    exitCurrentGameplay: () => void;
    /** Translates from "GAMEPLAY" into "SUMMARY" */
    continueToTheGameSummary: () => void;
    /** Translates from "SUMMARY" into "MENU" */
    goBackToMenu: () => void;
    /** Translates from "MENU" into "STATISTICS" */
    openGamesHistory: () => void;
}
