// Tools
import { useState, useEffect, useRef, useMemo } from "react";

export type TextExpandAnimation = "expand" | "collapse" | "none";

interface UseExpansiveTextParams {
    originalText: string;
    showEntireText: boolean;
}

interface UseExpansiveTextResult {
    text: string;
    textExpandAnimation: TextExpandAnimation;
}

const MAXIMUM_LENGTH: number = 140;
const ANIMATION_DURATION: TimeInMS = 300;

function shortenText(text: string): string {
    let result: string = text.slice(0, MAXIMUM_LENGTH);
    if (text.length > MAXIMUM_LENGTH) result += "...";

    return result;
}

export function useExpansiveText(params: UseExpansiveTextParams): UseExpansiveTextResult {
    const { showEntireText, originalText } = params;

    const textHaveBeenNeverExpanded = useRef<boolean>(true);
    const latestTextStage = useRef<Exclude<TextExpandAnimation, "none">>("collapse");

    const [text, setText] = useState<string>(shortenText(originalText));
    const [textExpandAnimation, setTextExpandAnimation] = useState<TextExpandAnimation>("none");

    useEffect(() => {
        let timeout: NodeJS.Timeout | null = null;

        if (textExpandAnimation !== "none" && latestTextStage.current !== textExpandAnimation) {
            timeout = setTimeout(() => {
                const newTextValue: string = textExpandAnimation === "expand" ? originalText : shortenText(originalText);

                setText(newTextValue);
                latestTextStage.current = textExpandAnimation;
            }, ANIMATION_DURATION);
        }

        return () => {
            if (timeout !== null) clearTimeout(timeout);
        };
    }, [originalText, showEntireText, textExpandAnimation]);

    useEffect(() => {
        // If the text have been never expanded, we don't want to animate the text
        if (textHaveBeenNeverExpanded.current == true && showEntireText == false) return;

        setTextExpandAnimation(showEntireText ? "expand" : "collapse");
        textHaveBeenNeverExpanded.current = false;
    }, [showEntireText]);

    return {
        text,
        textExpandAnimation,
    };
}
