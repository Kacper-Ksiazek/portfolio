// Types
import type { AnimationToDisplay, PictureToMatch } from "./index";

export interface Gameplay {
    pictures: PictureToMatch[];
    isOver: boolean;
    isExiting: boolean;
    animation: AnimationToDisplay;
    moves: {
        inTotal: number;
        mistakes: number;
    };
    time: Time;
}

export interface Time {
    start: number;
    end: number;
    isCounting: boolean;
}

export interface GameplayReducer extends Gameplay {
    _amountOfRemainingPictures: number;
    _previouslyClickedPicture: PictureToMatch | null;
}

export type GameplayAction = OnClickAction | GoToNextTurnAction | StartNewGameAction | EndAnimationAction | ClearCurrentGameAction | StartExiting | RecordTimeAction;

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

export type RecordTimeAction = {
    type: "RECORD_TIME";
    payload: "start" | "stop";
};
