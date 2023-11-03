// Tools
import { useEffect } from "react";
// Types
import type { TextExpandAnimation } from "../@types";
import type { MutableRefObject, Dispatch, SetStateAction } from "react";

interface UseAnimationUpdaterParams {
    textHaveBeenNeverExpanded: MutableRefObject<boolean>;
    showEntireText: boolean;
    setTextExpandAnimation: Dispatch<SetStateAction<TextExpandAnimation>>;
}

export function useAnimationUpdater(params: UseAnimationUpdaterParams): void {
    const { setTextExpandAnimation, showEntireText, textHaveBeenNeverExpanded } = params;

    useEffect(() => {
        // If the text have been never expanded, we don't want to animate the text
        if (textHaveBeenNeverExpanded.current == true && showEntireText == false) return;

        setTextExpandAnimation(showEntireText ? "expand" : "collapse");
        textHaveBeenNeverExpanded.current = false;
    }, [setTextExpandAnimation, showEntireText, textHaveBeenNeverExpanded]);
}
