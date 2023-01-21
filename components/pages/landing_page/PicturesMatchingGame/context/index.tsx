// Tools
import { useGameplayReducer } from "./GameplayReducer";
import { createContext, useState, useEffect } from "react";
import { useStatisticsFromLocalStorage } from "./_useStatisticsFromLocalStorage";
import { useNavigationBetweenStagesMethods } from "./_useNavigationBetweenStagesMethods";
import { requstDOMNode } from "@/components/pages/landing_page/PicturesMatchingGame/utils/getDOMNode";
// Types
import type { FunctionComponent, ReactNode } from "react";
import type { PicturesMatchingGameContextInterface } from "@/@types/pages/PicturesMatchingGame/context";
import type { Difficulty, PictureToMatch, UserChoiceAnimation } from "@/@types/pages/PicturesMatchingGame";

const ANIMATION_DURATIONS: Record<UserChoiceAnimation | "GAMEPLAY_PREPARATION", number> = Object.seal({
    INVALID_CHOICE: 350,
    CORRECT_CHOICE: 350,
    GAMEPLAY_PREPARATION: 500,
});

export const PicturesMatchingGameContext = createContext<PicturesMatchingGameContextInterface>({} as any);

export const PicturesMatchingGameContextProvider: FunctionComponent<{ children: ReactNode }> = (props) => {
    const [difficulty, _setDifficulty] = useState<Difficulty>("MEDIUM");
    const [pictureToDisplayInFullsize, setPictureToDisplayInFullsize] = useState<PicturesMatchingGameContextInterface["pictureToDisplayInFullsize"]>(null);
    const [statistics, saveGame] = useStatisticsFromLocalStorage();
    const [gameplay, dispatch] = useGameplayReducer();

    const navigation = useNavigationBetweenStagesMethods({
        dispatch,
        difficulty,
        gameplay,
        saveGame,
    });

    const setDifficulty: PicturesMatchingGameContextInterface["methods"]["setDifficulty"] = (params) => {
        if (params instanceof Object) {
            _setDifficulty(params.value);
            navigation.startNewGame(params.value);
        } else {
            _setDifficulty(params);
        }
    };

    const handlePictureOnClick = (clickedPicture: PictureToMatch) => {
        dispatch({ type: "HANDLE_ON_CLICK", payload: clickedPicture });
    };

    const incrementTime = () => dispatch({ type: "INCREMENT_TIME" });

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

            requstDOMNode("GAME_BUTTONS_WRAPPER").style.animationDelay = `${delay + 500}ms`;

            setTimeout(() => {
                dispatch({
                    type: "END_ANIMATION",
                    payload: {
                        startCountingTime: true,
                    },
                });
            }, delay);
        }
    }, [gameplay.animation, difficulty, dispatch]);

    return (
        <PicturesMatchingGameContext.Provider
            value={{
                navigation,

                statistics,
                pictureToDisplayInFullsize,
                difficulty,
                gameplay,
                methods: {
                    incrementTime,
                    setDifficulty,
                    handlePictureOnClick,
                    setPictureToDisplayInFullsize,
                },
            }}
        >
            {props.children}
        </PicturesMatchingGameContext.Provider>
    );
};
