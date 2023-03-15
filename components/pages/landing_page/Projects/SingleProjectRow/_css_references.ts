type AllElements =
    | "YEAR_DIGIT"
    // PROJECT_CARD_
    | "TITLE"
    | "DURATION"
    | "DESCRIPTION"
    | "REDIRECTIONS"
    | "TECHNOLOGIES"
    // INTRO_ANIMATION_
    | "PRIMARY"
    | "SECONDARY"
    // TIMELINE_
    | "CORE"
    | "CONNECTION"
    | "LEFT_DOT"
    | "RIGHT_DOT";

type CssClassSelector = `.${string}` | `${string}.${string}`;

type ContentElements = Extract<
    AllElements,
    | "TITLE" //
    | "DURATION"
    | "DESCRIPTION"
    | "REDIRECTIONS"
    | "TECHNOLOGIES"
>;

type TimelineElements = Extract<
    AllElements,
    | "CORE" //
    | "LEFT_DOT"
    | "RIGHT_DOT"
    | "CONNECTION"
>;

type IntroBarAnimationElements = Extract<
    AllElements,
    | "PRIMARY" //
    | "SECONDARY"
>;

interface OrganizedCSSStructure<T extends string> {
    YEAR_DIGIT: T;
    THUMBNAIL: T;
    PROJECT_CARD: Required<Record<ContentElements, T>>;
    TIMELINE: Required<Record<TimelineElements, T>>;
    INTRO_BAR_ANIMATIONS: Required<Record<IntroBarAnimationElements, T>>;
}

export const CSS_CLASSES: OrganizedCSSStructure<string> = {
    YEAR_DIGIT: "year-indicator-digit",
    THUMBNAIL: "thumbnail-wrapper",
    /** The order of following properties MATTERS A LOT */
    PROJECT_CARD: {
        TECHNOLOGIES: "technologies-wrapper",
        TITLE: "project-title",
        DESCRIPTION: "project-description",
        DURATION: "duration",
        REDIRECTIONS: "redirections",
    },
    INTRO_BAR_ANIMATIONS: {
        PRIMARY: "intro-bar-primary",
        SECONDARY: "intro-bar-secondary",
    },
    TIMELINE: {
        CORE: "timeline-core",
        CONNECTION: "timeline-connection",
        LEFT_DOT: "left-dot",
        RIGHT_DOT: "right-dot",
    },
};

export const SELECTORS: OrganizedCSSStructure<CssClassSelector> = {
    YEAR_DIGIT: `.${CSS_CLASSES.YEAR_DIGIT}`,
    THUMBNAIL: `.${CSS_CLASSES.THUMBNAIL}`,
    /** The order of following properties MATTERS A LOT */
    PROJECT_CARD: {
        TECHNOLOGIES: `ul.${CSS_CLASSES.PROJECT_CARD.TECHNOLOGIES}`,
        TITLE: `h4.${CSS_CLASSES.PROJECT_CARD.TITLE}`,
        DESCRIPTION: `p.${CSS_CLASSES.PROJECT_CARD.DESCRIPTION}`,
        DURATION: `div.${CSS_CLASSES.PROJECT_CARD.DURATION}`,
        REDIRECTIONS: `div.${CSS_CLASSES.PROJECT_CARD.REDIRECTIONS}`,
    },
    TIMELINE: {
        CORE: `span.${CSS_CLASSES.TIMELINE.CORE}`,
        LEFT_DOT: `span.${CSS_CLASSES.TIMELINE.LEFT_DOT}`,
        RIGHT_DOT: `span.${CSS_CLASSES.TIMELINE.RIGHT_DOT}`,
        CONNECTION: `span.${CSS_CLASSES.TIMELINE.CONNECTION}`,
    },
    INTRO_BAR_ANIMATIONS: {
        PRIMARY: `span.${CSS_CLASSES.INTRO_BAR_ANIMATIONS.PRIMARY}`,
        SECONDARY: `span.${CSS_CLASSES.INTRO_BAR_ANIMATIONS.SECONDARY}`,
    },
};

/** Selectors in proper order to match animations sequence */
export const PROJECT_CARD_ELEMENTS_CONTENTS: string[] = [
    `${SELECTORS.PROJECT_CARD.TECHNOLOGIES}>*`,
    `${SELECTORS.PROJECT_CARD.TITLE}>*`,
    `${SELECTORS.PROJECT_CARD.DURATION}>*`,
    `${SELECTORS.PROJECT_CARD.DESCRIPTION}>*`,
];
