// Types
import type { NavigationBarReducerState as State, NavigationBarReducerStateAction as Action } from "./@types";

export const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "MOUNT": {
            return {
                appearingAnimation: "intro",
                blockOnScrollTriggering: true,
            };
        }
        case "UNMOUNT": {
            return {
                ...state,
                blockOnScrollTriggering: !action.payload.enableOnScroll,
            };
        }
        case "PLAY_OUTRO_ANIMATION": {
            return {
                ...state,
                appearingAnimation: "outro",
                blockOnScrollTriggering: true,
            };
        }
        case "ENABLE_ON_SCROLL": {
            return {
                ...state,
                blockOnScrollTriggering: false,
            };
        }
        case "DISABLE_ON_SCROLL": {
            return {
                ...state,
                blockOnScrollTriggering: true,
            };
        }
        case "RESET": {
            return {
                ...state,
                appearingAnimation: null,
            };
        }
    }
};
