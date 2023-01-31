// Tools
import { useState, useCallback } from "react";
import { usePositionFixedWindow } from "./_usePositionFixedWindow";
// Types
import type { Dispatch } from "react";
import type { SaveGame } from "./_useStatisticsFromLocalStorage/@types";
import type { NavigationBetweenStages } from "@/@types/pages/PicturesMatchingGame/context";
import type { Gameplay, GameplayAction } from "@/@types/pages/PicturesMatchingGame/reducer";
import type { PictureMatchingGameplayStage, Difficulty } from "@/@types/pages/PicturesMatchingGame";

export interface NavigationBetweenStagesMethodsParams {
    difficulty: Difficulty;
    gameplay: Gameplay;
    dispatch: Dispatch<GameplayAction>;
    saveGame: SaveGame;
}

/** Expressed in **ms** */
const CLOSE_ANIMATION_DURATION: number = 500;

export const useNavigationBetweenStagesMethods = (params: NavigationBetweenStagesMethodsParams): NavigationBetweenStages => {
    const { difficulty, dispatch } = params;

    const positionFixedWindow = usePositionFixedWindow();
    const [stage, setStage] = useState<PictureMatchingGameplayStage>("MENU");

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
            setTimeout(() => {
                setStage("GAMEPLAY");
                dispatch({
                    type: "START_NEW_GAME",
                    payload: {
                        amountOfPictures: amountOfPicturesBasedOnDifficulty,
                    },
                });
            }, 20);
        },
        [positionFixedWindow, dispatch, difficulty]
    );

    const continueToTheGameSummary: NavigationBetweenStages["continueToTheGameSummary"] = useCallback(() => {
        if (!params.gameplay.isOver) return;

        params.saveGame({
            difficulty: params.difficulty,
            gameplay: params.gameplay,
        });

        afterCloseAnimation(() => {
            setStage("SUMMARY");
        });
    }, [params, afterCloseAnimation]);

    const goBackToMenu: NavigationBetweenStages["goBackToMenu"] = useCallback(() => {
        setStage("MENU");
    }, []);

    const openGamesHistory: NavigationBetweenStages["goBackToMenu"] = useCallback(() => {
        setStage("STATISTICS");
    }, []);

    const exitCurrentGameplay: NavigationBetweenStages["exitCurrentGameplay"] = useCallback(() => {
        afterCloseAnimation(() => {
            params.saveGame({
                difficulty: params.difficulty,
                gameplay: params.gameplay,
            });

            params.dispatch({
                type: "CLEAR_CURRENT_GAME",
            });
            setStage("MENU");
        });
    }, [afterCloseAnimation, params]);

    return {
        stage,

        startNewGame,
        goBackToMenu,
        openGamesHistory,
        exitCurrentGameplay,
        continueToTheGameSummary,
    };
};
