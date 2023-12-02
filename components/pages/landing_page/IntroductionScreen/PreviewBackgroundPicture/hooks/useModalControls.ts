import { useReducer } from "react";

namespace ModalControlsReducer {
    export interface State {
        isOpened: boolean;
    }

    type CloseModalAction = {
        type: "CLOSE_MODAL";
    };

    type OpenModalAction = {
        type: "OPEN_MODAL";
    };

    type Action = OpenModalAction | CloseModalAction;

    export function reducer(state: State, action: Action): State {
        switch (action.type) {
            case "OPEN_MODAL":
                return {
                    isOpened: true,
                };
            case "CLOSE_MODAL":
                return {
                    isOpened: false,
                };
        }
        return state;
    }
}

export function useModalControls() {
    return useReducer(ModalControlsReducer.reducer, {
        isOpened: true,
    } as ModalControlsReducer.State);
}
