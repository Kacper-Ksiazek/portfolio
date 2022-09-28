// Tools
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useWindowSizes from "@/hooks/useWindowSizes";
import useBlockUserScroll from "@/hooks/useBlockUserScroll";
import { useMainNavigation } from "@/hooks/useMainNavigation";
// Types
// import type { Dispatch, SetStateAction } from "react";

type RroutesWrapperElementCSSClass = "opened" | "closed" | null;

interface UseMobileMenuHandlerResult {
    mobileMenuIsOpened: boolean;
    /** Defines which animation should be triggered*/
    routesWrapperElementCSSClass: RroutesWrapperElementCSSClass;
    renderMobileMenuButton: boolean;
    toggleMobileMenuIsOpened: any;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (): UseMobileMenuHandlerResult => {
    const router = useRouter();
    const { width } = useWindowSizes();
    const { showNavigationBar } = useMainNavigation();
    const { disableUserScroll, enableUserScroll } = useBlockUserScroll();
    const [mobileMenuIsOpened, setMobileMenuIsOpened] = useState<boolean>(false);
    const [mobileMenuHasBeenOpenedAtLeastOnece, setMobileeMenuHasBeenOpenedAtLeastOnece] = useState<boolean>(false);
    const [routesWrapperElementCSSClass, setRoutesWrapperElementCSSClass] = useState<RroutesWrapperElementCSSClass>(null);

    // Set `mobileMenuIsOpened` to `false` after menaul resizing exceeds the threshold
    useEffect(() => {
        if (width > 1000) {
            setMobileMenuIsOpened(false);
        }
    }, [width]);
    // Block scrolling
    useEffect(() => {
        if (mobileMenuIsOpened) {
            disableUserScroll();
        } else {
            showNavigationBar({ keepNavigationVisibleFor: 500 });
            enableUserScroll();
        }
    }, [mobileMenuIsOpened, disableUserScroll, enableUserScroll, showNavigationBar]);
    // routersWrapperElementCSSClass
    useEffect(() => {
        if (width > 1000 && mobileMenuHasBeenOpenedAtLeastOnece) {
            setMobileeMenuHasBeenOpenedAtLeastOnece(false);
            setRoutesWrapperElementCSSClass(null);
            return;
        }

        if (mobileMenuIsOpened) {
            setMobileeMenuHasBeenOpenedAtLeastOnece(true);
            setRoutesWrapperElementCSSClass("opened");
        } else if (mobileMenuHasBeenOpenedAtLeastOnece) {
            setRoutesWrapperElementCSSClass("closed");
        }
    }, [mobileMenuHasBeenOpenedAtLeastOnece, width, mobileMenuIsOpened]);
    //
    useEffect(() => {
        setMobileMenuIsOpened(false);
        setMobileeMenuHasBeenOpenedAtLeastOnece(false);
        setRoutesWrapperElementCSSClass(null);
    }, [router.pathname]);
    return {
        mobileMenuIsOpened, //
        renderMobileMenuButton: width <= 1000,
        toggleMobileMenuIsOpened: () => setMobileMenuIsOpened((val) => !val),
        routesWrapperElementCSSClass,
    };
};
