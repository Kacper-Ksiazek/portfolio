import { requstDOMNode } from "../../../utils/getDOMNode";

/**
 * Request all the DOM nodes that are relevant for the position fixed window
 */
export function getReleventElements(): HTMLElement[] {
    return [
        requstDOMNode("MAIN_WRAPPER"), //
        requstDOMNode("SVG_BACKGROUND"),
        requstDOMNode("USER_CHOICE_ANIMATION_BASE"),
    ];
}

/**
 * Perform an action on every relevent node
 */
export function performActionOnEveryReleventNode(action: (node: HTMLElement) => void): void {
    getReleventElements().forEach(action);
}

export function scrollToTheAnchor(): void {
    requstDOMNode("PICTURES_WRAPPER_SCROLL_ANCHOR").scrollIntoView();
}

export function hideLayoutFooter(): void {
    requstDOMNode("LAYOUT_FOOTER").style.display = "none";
}

export function showLayoutFooter(): void {
    requstDOMNode("LAYOUT_FOOTER").style.display = "flex";
}
