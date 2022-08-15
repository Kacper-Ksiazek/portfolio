/** Returns css aniation delay in format alike: `.5s` */
export const distinguishAnimationDelay = (index: number): string => {
    const FIRST_ANIMATION_DELAY = 0.5;
    const DELAY_BETWEEN_ICONS_ANIMATIONS = 0.1;

    return `${FIRST_ANIMATION_DELAY + (index - 1) * DELAY_BETWEEN_ICONS_ANIMATIONS}s`;
};
