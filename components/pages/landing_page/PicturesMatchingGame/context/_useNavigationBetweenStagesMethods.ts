// Tools
import { useState, useCallback } from "react";
import { usePositionFixedWindow } from "./_usePositionFixedWindow";
// Types
import type { Dispatch } from "react";
import type { GameplayAction } from "@/@types/pages/PicturesMatchingGame/reducer";
import type { NavigationBetweenStages } from "@/@types/pages/PicturesMatchingGame/context";
import type { PictureMatchingGameplayStage, Difficulty } from "@/@types/pages/PicturesMatchingGame";

export interface NavigationBetweenStagesMethodsParams {
    difficulty: Difficulty;
    gameplayIsOver: boolean;
    dispatch: Dispatch<GameplayAction>;
}

/** Expressed in **ms** */
const CLOSE_ANIMATION_DURATION: number = 500;

export const useNavigationBetweenStagesMethods = (params: NavigationBetweenStagesMethodsParams): NavigationBetweenStages => {
    const { difficulty, dispatch } = params;

    const positionFixedWindow = usePositionFixedWindow();
    const [stage, setStage] = useState<PictureMatchingGameplayStage>("SELECT_DIFFICULTY");

    /** It's just a local utility */
    const afterCloseAnimation = useCallback(
        (cb: () => void) => {
            positionFixedWindow.close();
            params.dispatch({
                type: "START_EXITING",
            });
            setTimeout(cb, CLOSE_ANIMATION_DURATION);
        },
        [params, positionFixedWindow]
    );

    const startNewGame: NavigationBetweenStages["startNewGame"] = useCallback(
        (forcedDifficulty) => {
            const amountOfPicturesBasedOnDifficulty: number = (
                {
                    EASY: 4,
                    MEDIUM: 6,
                    HARD: 12,
                    INSANE: 20,
                } as Record<Difficulty, number>
            )[forcedDifficulty ?? difficulty];

            positionFixedWindow.open();
            setStage("GAMEPLAY");
            dispatch({
                type: "START_NEW_GAME",
                payload: {
                    amountOfPictures: amountOfPicturesBasedOnDifficulty,
                },
            });
        },
        [positionFixedWindow, dispatch, difficulty]
    );

    const continueToTheGameSummary: NavigationBetweenStages["continueToTheGameSummary"] = useCallback(() => {
        if (!params.gameplayIsOver) return;

        afterCloseAnimation(() => {
            setStage("SUMMARY");
        });
    }, [params.gameplayIsOver, afterCloseAnimation]);

    const closeSummary: NavigationBetweenStages["closeSummary"] = useCallback(() => {
        setStage("SELECT_DIFFICULTY");
    }, []);

    const exitCurrentGameplay: NavigationBetweenStages["exitCurrentGameplay"] = useCallback(() => {
        afterCloseAnimation(() => {
            params.dispatch({
                type: "CLEAR_CURRENT_GAME",
            });
            setStage("SELECT_DIFFICULTY");
        });
    }, [afterCloseAnimation, params]);

    return {
        stage,

        startNewGame,
        closeSummary,
        exitCurrentGameplay,
        continueToTheGameSummary,
    };
};
