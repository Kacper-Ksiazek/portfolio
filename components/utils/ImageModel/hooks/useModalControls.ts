// Tools
import { useEffect } from "react";
import { useSimpleReducer } from "@/hooks/useSimpleReducer";
// Types
import type { UseFullscreenResult } from "./useFullscreen";

interface ModalState {
    displayModal: boolean;
    displayImageLoader: boolean;
    displayOutroAnimation: boolean;
}
interface UseModalControlsParams extends UseFullscreenResult {
    modalIsOpened: boolean;
    onClose: () => void;
}

interface UseModalControlsResult {
    state: ModalState;

    closeModal: () => void;
    onImageLoad: () => void;
}

function _useModalState(displayModal: boolean) {
    return useSimpleReducer<ModalState>({
        displayModal,
        displayImageLoader: true,
        displayOutroAnimation: false,
    });
}

export function useModalControls(params: UseModalControlsParams): UseModalControlsResult {
    const [state, updateState] = _useModalState(params.modalIsOpened);

    useEffect(() => {
        updateState({
            displayModal: params.modalIsOpened,
            displayOutroAnimation: false,
        });
    }, [params.modalIsOpened, updateState]);

    function closeModal() {
        updateState({ displayOutroAnimation: true });

        setTimeout(() => {
            updateState({ displayModal: false });

            setTimeout(() => {
                if (params.isFullscreenOpened) {
                    params.handleFullsizeToggle();
                    setTimeout(() => {
                        params.onClose();
                    }, 30);
                } else {
                    params.onClose();
                }
            }, 150);
        }, 120);
    }

    function onImageLoad() {
        updateState({ displayImageLoader: false });
    }

    return {
        state,
        closeModal,
        onImageLoad,
    };
}
