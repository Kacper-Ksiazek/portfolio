// Tools
import { useSimpleReducer } from "@/hooks/useSimpleReducer";
// Types
import type { TransitionBetweenPagesReducerState } from "./@types";

export function useControlsReducer() {
    return useSimpleReducer<TransitionBetweenPagesReducerState>({
        displayOutroAnimation: false,
        introAnimationHasEnded: false,
        newPageHasBeenLoaded: false,
        renderElements: false,
    });
}
