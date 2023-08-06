import { useState } from "react";
import { useSnackbar } from "@/hooks/useSnackbar";

const DELETION_ANIMATION_DURATION: TimeInMS = 1100;

export function useTaskRemover(_remove: () => void) {
    const { displaySnackbar } = useSnackbar();
    const [isTaskBeingRemoved, setIsTaskBeingRemoved] = useState<boolean>(false);

    function remove() {
        setIsTaskBeingRemoved(true);
        setTimeout(() => {
            _remove();
            displaySnackbar({
                msg: "Task has been removed successfully",
                severity: "success",
            });
        }, DELETION_ANIMATION_DURATION);
    }

    return { remove, isTaskBeingRemoved };
}
