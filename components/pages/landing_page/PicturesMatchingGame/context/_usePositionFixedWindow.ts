// Tools
import { requstDOMNode } from "../utils/getDOMNode";
import { useCallback } from "react";
import useBlockUserScroll from "@/hooks/useBlockUserScroll";
import { useMainNavigationBarContext } from "@/hooks/useMainNavigation";

interface UsePositionFixedWindowResult {
    open: () => void;
    close: () => void;
}

export const usePositionFixedWindow = (): UsePositionFixedWindowResult => {
    const { disableUserScroll, enableUserScroll } = useBlockUserScroll();
    const { hideNavigationBar } = useMainNavigationBarContext();

    const open = useCallback(() => {
        console.log("fixed is opening");
        const userScroll = window.scrollY;
        const mainWrapper = requstDOMNode("MAIN_WRAPPER");

        setTimeout(() => {
            [mainWrapper, requstDOMNode("SVG_BACKGROUND"), requstDOMNode("USER_CHOICE_ANIMATION_BASE")].forEach((node) => {
                console.log(node);
                node.style.top = `${userScroll - 20}px`;
            });
            setTimeout(() => {
                requstDOMNode("PICTURES_WRAPPER_SCROLL_ANCHOR").scrollIntoView();
            }, 100);
        }, 2);

        hideNavigationBar();
        disableUserScroll();
    }, [disableUserScroll, hideNavigationBar]);

    const close = useCallback(() => {
        console.log("fixed is closing");

        const mainWrapper = requstDOMNode("MAIN_WRAPPER");
        // mainWrapper.classList.remove("gameplay-on");

        setTimeout(() => {
            [mainWrapper, requstDOMNode("SVG_BACKGROUND"), requstDOMNode("USER_CHOICE_ANIMATION_BASE")].forEach((node) => {
                node.style.top = `0`;
            });
            enableUserScroll();
        }, 2);
    }, [enableUserScroll]);

    return { open, close };
};
