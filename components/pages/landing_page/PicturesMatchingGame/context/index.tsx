// Tools
import { gameplayReducer } from "./GameplayReducer";
import { useNavigationBetweenStagesMethods } from "./_useNavigationBetweenStagesMethods";
import { createContext, useState, useMemo, useCallback, useReducer, useEffect } from "react";
// Types
import type { FunctionComponent, ReactNode } from "react";
import type { GameplayReducer } from "@/@types/pages/PicturesMatchingGame/reducer";
import type { PicturesMatchingGameContextInterface } from "@/@types/pages/PicturesMatchingGame/context";
import type { Difficulty, PictureToMatch, UserChoiceAnimation } from "@/@types/pages/PicturesMatchingGame";

const ANIMATION_DURATIONS: Record<UserChoiceAnimation | "GAMEPLAY_PREPARATION", number> = Object.seal({
    INVALID_CHOICE: 350,
    CORRECT_CHOICE: 350,
    GAMEPLAY_PREPARATION: 500,
});

export const PicturesMatchingGameContext = createContext<PicturesMatchingGameContextInterface>({} as any);

export const PicturesMatchingGameContextProvider: FunctionComponent<{ children: ReactNode }> = (props) => {
    const [pictureToDisplayInFullsize, setPictureToDisplayInFullsize] = useState<PicturesMatchingGameContextInterface["pictureToDisplayInFullsize"]>(null);
    const [difficulty, setDifficulty] = useState<Difficulty>("MEDIUM");

    const [gameplay, dispatch] = useReducer(gameplayReducer, {
        _previouslyClickedPicture: null,
        _amountOfRemainingPictures: 0,
        animation: null,
        isOver: true,
        pictures: [],
        turn: 0,
        isExiting: false,
    } as GameplayReducer);

    const amountOfPicturesBasedOnDifficulty = useMemo<number>(() => {
        return (
            {
                EASY: 4,
                MEDIUM: 6,
                HARD: 12,
                INSANE: 20,
            } as Record<Difficulty, number>
        )[difficulty];
    }, [difficulty]);

    const navigationBetweenStages = useNavigationBetweenStagesMethods({
        dispatch,
        amountOfPicturesBasedOnDifficulty,
        gameplayIsOver: gameplay.isOver,
    });

    const handlePictureOnClick = useCallback((clickedPicture: PictureToMatch) => {
        dispatch({ type: "HANDLE_ON_CLICK", payload: clickedPicture });
    }, []);

    useEffect(() => {
        const animation = gameplay.animation;
        if (animation === "INVALID_CHOICE" || animation === "CORRECT_CHOICE") {
            setTimeout(() => {
                dispatch({ type: "END_ANIMATION" });
            }, ANIMATION_DURATIONS[animation]);
        } else if (animation === "INTRO") {
            const delay: number = {
                EASY: 2600,
                MEDIUM: 2700,
                HARD: 3000,
                INSANE: 3400,
            }[difficulty];

            (document.getElementById("picture-matching-game-buttons-wrapper") as any).style.animationDelay = `${delay + 500}ms`;

            setTimeout(() => {
                dispatch({ type: "END_ANIMATION" });
            }, delay);
        }
    }, [gameplay.animation, difficulty]);

    return (
        <PicturesMatchingGameContext.Provider
            value={{
                navigation: navigationBetweenStages,

                pictureToDisplayInFullsize,
                difficulty,
                gameplay,

                setDifficulty,
                handlePictureOnClick,
                setPictureToDisplayInFullsize,
            }}
        >
            {props.children}
        </PicturesMatchingGameContext.Provider>
    );
};
