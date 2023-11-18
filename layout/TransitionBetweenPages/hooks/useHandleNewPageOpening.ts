// Tools
import { useEffect } from "react";
import { OUTRO_ANIMATION_DURATION } from "../constants";
// Types
import type { UpdateControls, TransitionBetweenPagesReducerState } from "./@types";

export function useHandleNewPageOpening(controls: TransitionBetweenPagesReducerState, updateControls: UpdateControls) {
    useEffect(() => {
        const { renderElements, newPageHasBeenLoaded, introAnimationHasEnded } = controls;

        if (introAnimationHasEnded && renderElements && newPageHasBeenLoaded) {
            updateControls({ displayOutroAnimation: true });

            setTimeout(() => {
                updateControls({
                    renderElements: false,
                    displayOutroAnimation: false,
                    newPageHasBeenLoaded: false,
                    introAnimationHasEnded: false,
                });
            }, OUTRO_ANIMATION_DURATION);
        }
    }, [controls, updateControls]);
}
