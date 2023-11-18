export interface TransitionBetweenPagesReducerState {
    renderElements: boolean;
    newPageHasBeenLoaded: boolean;
    displayOutroAnimation: boolean;
    introAnimationHasEnded: boolean;
}

export type UpdateControls = (newState: Partial<TransitionBetweenPagesReducerState>) => void;
