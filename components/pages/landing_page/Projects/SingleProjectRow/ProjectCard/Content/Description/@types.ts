// Types
import type { Dispatch, SetStateAction } from "react";

export interface ReadMoreButtonProps {
    showEntireText: boolean;
    setShowEntireText: Dispatch<SetStateAction<boolean>>;
}
