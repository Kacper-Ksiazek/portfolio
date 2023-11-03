// Tools
import { useEffect, useRef } from "react";
// Types
import type { TextExpandAnimation } from "../@types";
import type { MutableRefObject, Dispatch, SetStateAction } from "react";

interface UseAnimationUpdaterParams {
    showEntireText: boolean;
    applyMobileLayout: boolean;
    textHaveBeenNeverExpanded: MutableRefObject<boolean>;

    setTextExpandAnimation: Dispatch<SetStateAction<TextExpandAnimation>>;
}

export function useAnimationUpdater(params: UseAnimationUpdaterParams): void {
    const expandAnimationBeforeMobileDesignHasBeenApplied = useRef<TextExpandAnimation | null>(null);

    const { setTextExpandAnimation, showEntireText, textHaveBeenNeverExpanded, applyMobileLayout } = params;

    useEffect(() => {
        if (applyMobileLayout) {
            if (expandAnimationBeforeMobileDesignHasBeenApplied.current === null) {
                setTextExpandAnimation((currentValue) => {
                    expandAnimationBeforeMobileDesignHasBeenApplied.current = currentValue === "expand" ? "expand" : "collapse";
                    return "expand";
                });
            }
            return;
        }

        if (applyMobileLayout === false && expandAnimationBeforeMobileDesignHasBeenApplied.current !== null) {
            setTextExpandAnimation(expandAnimationBeforeMobileDesignHasBeenApplied.current);
            expandAnimationBeforeMobileDesignHasBeenApplied.current = null;
            textHaveBeenNeverExpanded.current = false;
            return;
        }

        // If the text have been never expanded, we don't want to animate the text
        if (textHaveBeenNeverExpanded.current == true && showEntireText == false) return;

        setTextExpandAnimation(showEntireText ? "expand" : "collapse");
        textHaveBeenNeverExpanded.current = false;
    }, [applyMobileLayout, setTextExpandAnimation, showEntireText, textHaveBeenNeverExpanded]);
}
