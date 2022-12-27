// Tools
import { useState, useCallback } from "react";
import { usePositionFixedWindow } from "./_usePositionFixedWindow";
// Types
import type { Dispatch, SetStateAction } from "react";
import type { NavigationBetweenStages } from "@/@types/pages/PicturesMatchingGame/context";
import type { Gameplay, GameplayAction } from "@/@types/pages/PicturesMatchingGame/reducer";
import type { Statistics } from "@/@types/pages/PicturesMatchingGame/localStorage";
import type { PictureMatchingGameplayStage, Difficulty } from "@/@types/pages/PicturesMatchingGame";

export interface NavigationBetweenStagesMethodsParams {
    difficulty: Difficulty;
    gameplay: Gameplay;
    dispatch: Dispatch<GameplayAction>;
    setStatistics: Dispatch<SetStateAction<Statistics>>;
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
        if (!params.gameplay.isOver) return;

        params.setStatistics((value) => {
            const { gameplay } = params;
            const { TOTAL, [difficulty]: current } = value.general;
            const duration = gameplay.time.minutes * 60 + gameplay.time.seconds;

            return {
                history: [
                    ...value.history,
                    {
                        accurancy: gameplay.moves.inTotal ? Number(((gameplay.moves.inTotal - gameplay.moves.mistakes) / gameplay.moves.inTotal).toFixed(2)) : 0,
                        date: ((): string => {
                            const date = new Date();
                            return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
                        })(),
                        difficulty,
                        duration,
                        index: (() => {
                            if (value.history[value.history.length - 1]) return value.history[value.history.length - 1].index + 1;
                            return 1;
                        })(),
                        won: true,
                    },
                ],
                general: {
                    ...value.general,
                    [difficulty]: {
                        games: {
                            inTotal: current.games.inTotal + 1,
                            won: current.games.won + 1,
                        },
                        totalTime: current.totalTime + duration,
                    },
                    TOTAL: {
                        games: {
                            inTotal: TOTAL.games.inTotal + 1,
                            won: TOTAL.games.won + 1,
                        },
                        totalTime: TOTAL.totalTime + duration,
                    },
                },
            };
        });

        afterCloseAnimation(() => {
            setStage("SUMMARY");
        });
    }, [params, afterCloseAnimation, difficulty]);

    const goBackToMenu: NavigationBetweenStages["goBackToMenu"] = useCallback(() => {
        setStage("MENU");
    }, []);

    const openGamesHistory: NavigationBetweenStages["goBackToMenu"] = useCallback(() => {
        setStage("STATISTICS");
    }, []);

    const exitCurrentGameplay: NavigationBetweenStages["exitCurrentGameplay"] = useCallback(() => {
        afterCloseAnimation(() => {
            params.setStatistics((value) => {
                const { gameplay } = params;
                const { TOTAL, [difficulty]: current } = value.general;
                const duration = gameplay.time.minutes * 60 + gameplay.time.seconds;

                return {
                    history: [
                        ...value.history,
                        {
                            accurancy: gameplay.moves.inTotal ? Number(((gameplay.moves.inTotal - gameplay.moves.mistakes) / gameplay.moves.inTotal).toFixed(2)) : 0,
                            date: ((): string => {
                                const date = new Date();
                                return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
                            })(),
                            difficulty,
                            duration,
                            index: (() => {
                                if (value.history[value.history.length - 1]) return value.history[value.history.length - 1].index + 1;
                                return 1;
                            })(),
                            won: false,
                        },
                    ],
                    general: {
                        ...value.general,
                        [difficulty]: {
                            games: {
                                inTotal: current.games.inTotal + 1,
                                won: current.games.won,
                            },
                            totalTime: current.totalTime + duration,
                        },
                        TOTAL: {
                            games: {
                                inTotal: TOTAL.games.inTotal + 1,
                                won: TOTAL.games.won,
                            },
                            totalTime: TOTAL.totalTime + duration,
                        },
                    },
                };
            });

            params.dispatch({
                type: "CLEAR_CURRENT_GAME",
            });
            setStage("MENU");
        });
    }, [afterCloseAnimation, difficulty, params]);

    return {
        stage,

        startNewGame,
        goBackToMenu,
        openGamesHistory,
        exitCurrentGameplay,
        continueToTheGameSummary,
    };
};
