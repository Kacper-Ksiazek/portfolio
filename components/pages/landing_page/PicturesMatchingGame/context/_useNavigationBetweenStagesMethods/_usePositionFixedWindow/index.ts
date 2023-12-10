// Tools
import * as utils from "./utils";
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

    // Open the position fixed window
    const open = useCallback(() => {
        const userScroll = window.scrollY;
        setTimeout(() => {
            // Hide the footer
            utils.hideLayoutFooter();

            // Move the relevent nodes to the top of the screen
            utils.performActionOnEveryReleventNode((node) => {
                node.style.top = `${userScroll - 20}px`;
            });

            // Scroll to the anchor
            setTimeout(utils.scrollToTheAnchor, 100);
        }, 2);

        hideNavigationBar();
        disableUserScroll();
    }, [disableUserScroll, hideNavigationBar]);

    // Close the position fixed window
    const close = useCallback(() => {
        setTimeout(() => {
            // Show the footer
            utils.showLayoutFooter();

            // Move the relevent nodes to the top of the screen
            utils.performActionOnEveryReleventNode((node) => {
                node.style.top = `0`;
            });

            // Scroll to the anchor
            enableUserScroll();
        }, 2);
    }, [enableUserScroll]);

    return { open, close };
};
