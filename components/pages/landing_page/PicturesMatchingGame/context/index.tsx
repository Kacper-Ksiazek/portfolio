// Tools
import { gameplayReducer } from "./GameplayReducer";
import useBlockUserScroll from "@/hooks/useBlockUserScroll";
import { useLazyLoadedImages } from "@/hooks/useLazyLoadedImages";
import ALL_AVAILABLE_IMAGES from "@/data/pictures_for_matching_game";
import { useMainNavigationBarContext } from "@/hooks/useMainNavigation";
import { createContext, useState, useMemo, useCallback, useReducer, useEffect } from "react";
// Types
import type { FunctionComponent, ReactNode, SetStateAction, Dispatch } from "react";
import type { Difficulty, CurrentStage, PictureToMatch, UserChoiceAnimation } from "@/@types/pages/PicturesMatchingGame";
import type { GameplayReducer, GameplayReducerPropsToBeUsed } from "@/@types/pages/PicturesMatchingGame/reducer";

const ANIMATION_DURATIONS: Record<UserChoiceAnimation, number> = Object.seal({
    INVALID_CHOICE: 350,
    CORRECT_CHOICE: 350,
});

interface PicturesMatchingGameContextInterface {
    stage: CurrentStage;
    difficulty: Difficulty;
    pictureToDisplayInFullsize: PictureToMatch | null;
    gameplay: GameplayReducerPropsToBeUsed;
    //
    startNewGame: () => void;
    handlePictureOnClick: (clickedPicture: PictureToMatch) => void;
    setDifficulty: Dispatch<SetStateAction<Difficulty>>;
    setPictureToDisplayInFullsize: Dispatch<SetStateAction<PictureToMatch | null>>;
}

export const PicturesMatchingGameContext = createContext<PicturesMatchingGameContextInterface>({} as any);

export const PicturesMatchingGameContextProvider: FunctionComponent<{ children: ReactNode }> = (props) => {
    const { disableUserScroll, enableUserScroll } = useBlockUserScroll();
    const { hideNavigationBar } = useMainNavigationBarContext();

    const [pictureToDisplayInFullsize, setPictureToDisplayInFullsize] = useState<PicturesMatchingGameContextInterface["pictureToDisplayInFullsize"]>(null);
    const [difficulty, setDifficulty] = useState<Difficulty>("MEDIUM");
    const [stage, setStage] = useState<CurrentStage>("SELECT_DIFFICULTY");

    const [gameplay, dispatch] = useReducer(gameplayReducer, {
        _previouslyClickedPicture: null,
        _amountOfRemainingPictures: 0,
        animation: null,
        isOver: true,
        pictures: [],
        turn: 0,
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

    useLazyLoadedImages({
        id: "PICTURES_MATCHING_MINIGAME_SINGLE_IMAGE",
        srcsToLazyLoad: ALL_AVAILABLE_IMAGES.map((image) => `/images/landing-page/images-matching-game/${image.url}/thumbnail.jpg`),
    });

    const handlePictureOnClick = useCallback((clickedPicture: PictureToMatch) => {
        dispatch({ type: "HANDLE_ON_CLICK", payload: clickedPicture });
    }, []);

    const startNewGame = useCallback(() => {
        const mainWrapper = document.getElementById("picture-matching-game-main-wrapper") as HTMLElement;
        mainWrapper.classList.add("gameplay-on");

        setTimeout(() => {
            const picturesWrapper = document.getElementById("picture-matching-game-pictures-wrapper") as HTMLElement;
            picturesWrapper.scrollIntoView();
        }, 20);

        hideNavigationBar();
        disableUserScroll();
        setStage("GAMEPLAY");
        dispatch({
            type: "START_NEW_GAME",
            payload: {
                amountOfPictures: amountOfPicturesBasedOnDifficulty,
            },
        });
    }, [amountOfPicturesBasedOnDifficulty, disableUserScroll, hideNavigationBar]);

    useEffect(() => {
        const animation = gameplay.animation;
        if (animation === "INVALID_CHOICE" || animation === "CORRECT_CHOICE") {
            setTimeout(() => {
                dispatch({ type: "END_ANIMATION" });
            }, ANIMATION_DURATIONS[animation]);
        } else if (animation === "INTRO") {
            const delays: Record<Difficulty, number> = {
                EASY: 2400,
                MEDIUM: 2500,
                HARD: 2800,
                INSANE: 3200,
            };

            setTimeout(() => {
                console.log("INTRO ANIMATION HAS BEEN DONE");
                dispatch({ type: "END_ANIMATION" });
            }, delays[difficulty]);
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
                setPictureToDisplayInFullsize,
                handlePictureOnClick,
            }}
        >
            {props.children}
        </PicturesMatchingGameContext.Provider>
    );
};
