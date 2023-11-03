export type TextExpandAnimation = "expand" | "collapse" | "none";
export type TextStage = Exclude<TextExpandAnimation, "none">;

export interface UseExpansiveTextParams {
    originalText: string;
    showEntireText: boolean;
    applyMobileLayout: boolean;
}

export interface UseExpansiveTextResult {
    text: string;
    textExpandAnimation: TextExpandAnimation;
}
