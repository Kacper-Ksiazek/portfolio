// Tools
import { useState } from "react";

const DELETION_ANIMATION_DURATION: TimeInMS = 1100;

export function useTaskRemover(_remove: () => void) {
    const [isTaskBeingRemoved, setIsTaskBeingRemoved] = useState<boolean>(false);

    function remove() {
        setIsTaskBeingRemoved(true);
        setTimeout(() => {
            _remove();
        }, DELETION_ANIMATION_DURATION);
    }

    return { remove, isTaskBeingRemoved };
}
