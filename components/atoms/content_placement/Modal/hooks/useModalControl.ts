// Tools
import { useState } from "react";

const OUTRO_ANIMATION_DURATION: TimeInMS = 300;
export function useModalControl(markModalAsClosed: () => void): [boolean, () => void] {
    const [displayModal, setDisplayModal] = useState<boolean>(true);

    function closeModal() {
        setDisplayModal(false);
        setTimeout(markModalAsClosed, OUTRO_ANIMATION_DURATION);
    }

    return [displayModal, closeModal];
}
