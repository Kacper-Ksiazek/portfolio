// Tools
import { gameplayReducer } from "./GameplayReducer";
import { usePositionFixedWindow } from "./_usePositionFixedWindow";
import { createContext, useState, useMemo, useCallback, useReducer, useEffect } from "react";
// Types
import type { FunctionComponent, ReactNode, SetStateAction, Dispatch } from "react";
import type { Difficulty, CurrentStage, PictureToMatch, UserChoiceAnimation } from "@/@types/pages/PicturesMatchingGame";
import type { GameplayReducer, GameplayReducerPropsToBeUsed } from "@/@types/pages/PicturesMatchingGame/reducer";

const ANIMATION_DURATIONS: Record<UserChoiceAnimation | "GAMEPLAY_PREPARATION", number> = Object.seal({
    INVALID_CHOICE: 350,
    CORRECT_CHOICE: 350,
    GAMEPLAY_PREPARATION: 500,
});

interface PicturesMatchingGameContextInterface {
    stage: CurrentStage;
    difficulty: Difficulty;
    pictureToDisplayInFullsize: PictureToMatch | null;
    gameplay: GameplayReducerPropsToBeUsed;
    //
    startNewGame: () => void;
    closeCurrentGame: () => void;
    handlePictureOnClick: (clickedPicture: PictureToMatch) => void;
    setDifficulty: Dispatch<SetStateAction<Difficulty>>;
    setPictureToDisplayInFullsize: Dispatch<SetStateAction<PictureToMatch | null>>;
}

export const PicturesMatchingGameContext = createContext<PicturesMatchingGameContextInterface>({} as any);

export const PicturesMatchingGameContextProvider: FunctionComponent<{ children: ReactNode }> = (props) => {
    const [pictureToDisplayInFullsize, setPictureToDisplayInFullsize] = useState<PicturesMatchingGameContextInterface["pictureToDisplayInFullsize"]>(null);
    const [difficulty, setDifficulty] = useState<Difficulty>("MEDIUM");
    const [stage, setStage] = useState<CurrentStage>("SELECT_DIFFICULTY");
    const positionFixedWindow = usePositionFixedWindow();

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

    const handlePictureOnClick = useCallback((clickedPicture: PictureToMatch) => {
        dispatch({ type: "HANDLE_ON_CLICK", payload: clickedPicture });
    }, []);

    const startNewGame = useCallback(() => {
        positionFixedWindow.open();
        setStage("GAMEPLAY");
        dispatch({
            type: "START_NEW_GAME",
            payload: {
                amountOfPictures: amountOfPicturesBasedOnDifficulty,
            },
        });
    }, [amountOfPicturesBasedOnDifficulty, positionFixedWindow]);

    const closeCurrentGame = useCallback(() => {
        positionFixedWindow.close();
        dispatch({
            type: "START_EXITING",
        });
        setTimeout(() => {
            dispatch({
                type: "CLEAR_CURRENT_GAME",
            });
            setStage("SELECT_DIFFICULTY");
        }, 500);
    }, [positionFixedWindow]);

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

            (document.getElementById("surrender-button") as any).style.animationDelay = `${delay + 500}ms`;

            setTimeout(() => {
                dispatch({ type: "END_ANIMATION" });
            }, delay);
        }
    }, [gameplay.animation, difficulty]);

    return (
        <PicturesMatchingGameContext.Provider
            value={{
                stage,
                pictureToDisplayInFullsize,
                difficulty,
                gameplay,

                setDifficulty,
                startNewGame,
                closeCurrentGame,
                setPictureToDisplayInFullsize,
                handlePictureOnClick,
            }}
        >
            {props.children}
        </PicturesMatchingGameContext.Provider>
    );
};
