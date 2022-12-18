// Types
import type { AnimationToDisplay, PictureToMatch } from "./index";

export interface GameplayReducerPropsToBeUsed {
    turn: number;
    pictures: PictureToMatch[];
    isOver: boolean;
    animation: AnimationToDisplay;
}

export interface GameplayReducer extends GameplayReducerPropsToBeUsed {
    _amountOfRemainingPictures: number;
    _previouslyClickedPicture: PictureToMatch | null;
}

export type GameplayAction = OnClickAction | GoToNextTurnAction | StartNewGameAction | EndAnimationAction | CloseCurrentGameAction;

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
};

type CloseCurrentGameAction = {
    type: "CLOSE_CURRENT_GAME";
};
