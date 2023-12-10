// Tools
import { SELECTORS as LAYOUT_FOOTER } from "@/layout/Footer/css_references";
import { SELECTORS as LANDING_PAGE_SECTIONS } from "landing_page/css_references";

type ReleventHTMLElement =
    | "SVG_BACKGROUND" //
    | "MAIN_WRAPPER"
    | "PICTURES_WRAPPER_SCROLL_ANCHOR"
    | "USER_CHOICE_ANIMATION_BASE"
    | "GAME_BUTTONS_WRAPPER"
    | "BODY_OF_GAMES_HISTORY_TABLE"
    | "LAYOUT_FOOTER";

const selectors: Record<ReleventHTMLElement, string> = Object.seal({
    SVG_BACKGROUND: `${LANDING_PAGE_SECTIONS.PICTURES_MATCHING_GAME} .dark-section-wrapper-background-svg`,
    MAIN_WRAPPER: LANDING_PAGE_SECTIONS.PICTURES_MATCHING_GAME,
    LAYOUT_FOOTER: LAYOUT_FOOTER.MAIN_FOOTER_WRAPPER,
    PICTURES_WRAPPER: "#picture-matching-game-pictures-wrapper",
    PICTURES_WRAPPER_SCROLL_ANCHOR: "#picture-matching-game-pictures-wrapper-user-scroll-anchor",
    USER_CHOICE_ANIMATION_BASE: "#user-choice-animaiton-base",
    /** Those two button at the bottom during gameplay **Surrender** and **Continue** */
    GAME_BUTTONS_WRAPPER: "#picture-matching-game-buttons-wrapper",
    BODY_OF_GAMES_HISTORY_TABLE: "#pictures-matching-game-games-history-table>tbody",
});

export const requstDOMNode = (element: ReleventHTMLElement): HTMLElement => {
    const result = document.querySelector(selectors[element]);
    if (result) return result as HTMLElement;

    throw new Error(`Element labeled **${element}** with a selector ${selectors[element]} could not have been accessed`);
};
