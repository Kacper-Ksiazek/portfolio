// Tools
import { useMainNavigationBarContext } from "@/layout/global/MainNavigationBarContext/useMainNavigationBarContext";
// Types
import type { MainNavigationBarContext } from "@/layout/global/MainNavigationBarContext";

interface UseMainNavigationResult {
    showNavigationBar: MainNavigationBarContext["showNavigationBar"];
    hideNavigationBar: MainNavigationBarContext["hideNavigationBar"];
    blockOnScroll: MainNavigationBarContext["blockOnScroll"];
}

export const useMainNavigation = (): UseMainNavigationResult => {
    const { hideNavigationBar, showNavigationBar, blockOnScroll } = useMainNavigationBarContext();

    return { hideNavigationBar, showNavigationBar, blockOnScroll };
};
