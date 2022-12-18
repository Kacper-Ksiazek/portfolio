// Tools
import { useCallback } from "react";
import useBlockUserScroll from "@/hooks/useBlockUserScroll";
import { useMainNavigationBarContext } from "@/hooks/useMainNavigation";

interface UsePositionFixedWindowResult {
    open: () => void;
    close: () => void;
}

type ReleventHTMLElement = "SVG_BACKGROUND" | "MAIN_WRAPPER" | "PICTURES_WRAPPER" | "USER_CHOICE_ANIMATION_BASE";

const selectors: Record<ReleventHTMLElement, string> = Object.seal({
    SVG_BACKGROUND: "#picture-matching-game-main-wrapper>.dark-section-wrapper-background-svg",
    MAIN_WRAPPER: "#picture-matching-game-main-wrapper",
    PICTURES_WRAPPER: "#picture-matching-game-pictures-wrapper",
    USER_CHOICE_ANIMATION_BASE: "#user-choice-animaiton-base",
});

const getNode = (element: ReleventHTMLElement): HTMLElement => {
    return document.querySelector(selectors[element]) as HTMLElement;
};

export const usePositionFixedWindow = (): UsePositionFixedWindowResult => {
    const { disableUserScroll, enableUserScroll } = useBlockUserScroll();
    const { hideNavigationBar } = useMainNavigationBarContext();

    const open = useCallback(() => {
        const userScroll = window.scrollY;
        const mainWrapper = getNode("MAIN_WRAPPER");
        mainWrapper.classList.add("gameplay-on");

        setTimeout(() => {
            [mainWrapper, getNode("SVG_BACKGROUND"), getNode("USER_CHOICE_ANIMATION_BASE")].forEach((node) => {
                node.style.top = `${userScroll - 20}px`;
            });
            setTimeout(() => {
                getNode("PICTURES_WRAPPER").scrollIntoView();
            }, 2);
        }, 2);

        hideNavigationBar();
        disableUserScroll();
    }, [disableUserScroll, hideNavigationBar]);

    const close = useCallback(() => {
        //
    }, []);

    return { open, close };
};
