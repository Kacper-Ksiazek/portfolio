// Tools
import { useState, useCallback } from "react";
import { usePositionFixedWindow } from "./_usePositionFixedWindow";
// Types
import type { Dispatch } from "react";
import type { GameplayAction } from "@/@types/pages/PicturesMatchingGame/reducer";
import type { NavigationBetweenStages } from "@/@types/pages/PicturesMatchingGame/context";
import type { PictureMatchingGameplayStage } from "@/@types/pages/PicturesMatchingGame";

export interface NavigationBetweenStagesMethodsParams {
    gameplayIsOver: boolean;
    amountOfPicturesBasedOnDifficulty: number;

    dispatch: Dispatch<GameplayAction>;
}

/** Expressed in **ms** */
const CLOSE_ANIMATION_DURATION: number = 500;

export const useNavigationBetweenStagesMethods = (params: NavigationBetweenStagesMethodsParams): NavigationBetweenStages => {
    const { amountOfPicturesBasedOnDifficulty, dispatch, gameplayIsOver } = params;

    const positionFixedWindow = usePositionFixedWindow();
    const [stage, setStage] = useState<PictureMatchingGameplayStage>("SELECT_DIFFICULTY");

    /** It's just a local utility */
    const afterCloseAnimation = useCallback(
        (cb: () => void) => {
            positionFixedWindow.close();
            dispatch({
                type: "START_EXITING",
            });
            setTimeout(cb, CLOSE_ANIMATION_DURATION);
        },
        [dispatch, positionFixedWindow]
    );

    const startNewGame: NavigationBetweenStages["startNewGame"] = useCallback(() => {
        positionFixedWindow.open();
        setStage("GAMEPLAY");
        dispatch({
            type: "START_NEW_GAME",
            payload: {
                amountOfPictures: amountOfPicturesBasedOnDifficulty,
            },
        });
    }, [amountOfPicturesBasedOnDifficulty, positionFixedWindow, dispatch]);

    const continueToTheGameSummary: NavigationBetweenStages["continueToTheGameSummary"] = useCallback(() => {
        if (!gameplayIsOver) return;

        afterCloseAnimation(() => {
            setStage("SUMMARY");
        });
    }, [gameplayIsOver, afterCloseAnimation]);

    const closeSummary: NavigationBetweenStages["closeSummary"] = useCallback(() => {
        setStage("SELECT_DIFFICULTY");
    }, []);

    const exitCurrentGameplay: NavigationBetweenStages["exitCurrentGameplay"] = useCallback(() => {
        afterCloseAnimation(() => {
            dispatch({
                type: "CLEAR_CURRENT_GAME",
            });
            setStage("SELECT_DIFFICULTY");
        });
    }, [dispatch, afterCloseAnimation]);

    return {
        stage,

        startNewGame,
        closeSummary,
        exitCurrentGameplay,
        continueToTheGameSummary,
    };
};
