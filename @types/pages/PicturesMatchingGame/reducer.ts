// Types
import type { AnimationToDisplay, PictureToMatch } from "./index";

export interface GameplayReducerPropsToBeUsed {
    pictures: PictureToMatch[];
    isOver: boolean;
    isExiting: boolean;
    animation: AnimationToDisplay;
    moves: {
        inTotal: number;
        mistakes: number;
    };
    time: {
        count: boolean;
        minutes: number;
        seconds: number;
    };
}

export interface GameplayReducer extends GameplayReducerPropsToBeUsed {
    _amountOfRemainingPictures: number;
    _previouslyClickedPicture: PictureToMatch | null;
}

export type GameplayAction = OnClickAction | GoToNextTurnAction | StartNewGameAction | EndAnimationAction | ClearCurrentGameAction | StartExiting | IncrementTime | StartTimeCounting;

type OnClickAction = {
    type: "HANDLE_ON_CLICK";
    payload: PictureToMatch;
};

type GoToNextTurnAction = {
    type: "PROCEED";
    payload: PictureToMatch;
};

type StartNewGameAction = {
    type: "START_NEW_GAME";
    payload: {
        amountOfPictures: number;
    };
};

type EndAnimationAction = {
    type: "END_ANIMATION";
    payload?: {
        startCountingTime?: boolean;
    };
};

type ClearCurrentGameAction = {
    type: "CLEAR_CURRENT_GAME";
};

type StartExiting = {
    type: "START_EXITING";
};

type IncrementTime = {
    type: "INCREMENT_TIME";
};

type StartTimeCounting = {
    type: "START_TIME_COUNTING";
};
