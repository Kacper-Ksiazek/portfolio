// Tools
import { useEffect } from "react";
import { getNewTextValue } from "../utils/_functions";
import { ANIMATION_DURATION } from "../utils/_constants";
// Types
import type { TextExpandAnimation, TextStage } from "../@types";
import type { MutableRefObject, Dispatch, SetStateAction } from "react";

interface UseTextUpdaterParams {
    originalText: string;
    textExpandAnimation: TextExpandAnimation;
    setText: Dispatch<SetStateAction<string>>;
    latestTextStage: MutableRefObject<TextStage>;
}

export function useTextUpdater(params: UseTextUpdaterParams): void {
    const { latestTextStage, setText, textExpandAnimation, originalText } = params;

    useEffect(() => {
        let timeout: NodeJS.Timeout | null = null;

        if (textExpandAnimation !== "none" && latestTextStage.current !== textExpandAnimation) {
            timeout = setTimeout(() => {
                setText(getNewTextValue(textExpandAnimation, originalText));
                latestTextStage.current = textExpandAnimation;
            }, ANIMATION_DURATION);
        }

        return () => {
            if (timeout !== null) clearTimeout(timeout);
        };
    }, [latestTextStage, originalText, setText, textExpandAnimation]);
}
