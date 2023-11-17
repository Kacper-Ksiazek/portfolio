export const TIME_TO_UNLOCK_SCROLL: TimeInMS = 2800;
export const LINES_INTRO_ANIMATION_DURATION: TimeInMS = 3350;

type DelayVariants = "SMALL_VIEWPORTS" | "REGULAR";

export const CONTENT_RENDERING_DELAY_WHEN_LINES_ANIMATIONS_ARE_DISABLED: Record<DelayVariants, TimeInMS> = {
    SMALL_VIEWPORTS: 700,
    REGULAR: 300,
};

/** Introduction Screen Screen Background Shapes Animation */
export const URL_QUERY_NAME: string = "skip-introduction-screen-rectangle-animations";
