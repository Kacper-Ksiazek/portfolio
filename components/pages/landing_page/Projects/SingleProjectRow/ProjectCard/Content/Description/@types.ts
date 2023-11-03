// Types
import type { Dispatch, SetStateAction } from "react";

export type Order = "even" | "odd";

export interface ReadMoreButtonProps {
    showEntireText: boolean;
    setShowEntireText: Dispatch<SetStateAction<boolean>>;
}
