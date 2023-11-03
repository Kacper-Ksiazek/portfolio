// Tools
import { useState, useRef } from "react";
import { shortenText } from "./utils/_functions";
import { useAnimationUpdater, useTextUpdater } from "./hooks";
// Types
import type { TextExpandAnimation, TextStage, UseExpansiveTextParams, UseExpansiveTextResult } from "./@types";

export function useExpansiveText(params: UseExpansiveTextParams): UseExpansiveTextResult {
    const { showEntireText, originalText } = params;

    const textHaveBeenNeverExpanded = useRef<boolean>(true);
    const latestTextStage = useRef<TextStage>("collapse");

    const [text, setText] = useState<string>(shortenText(originalText));
    const [textExpandAnimation, setTextExpandAnimation] = useState<TextExpandAnimation>("none");

    useTextUpdater({ originalText, textExpandAnimation, setText, latestTextStage });

    useAnimationUpdater({ setTextExpandAnimation, showEntireText, textHaveBeenNeverExpanded });

    return {
        text,
        textExpandAnimation,
    };
}
