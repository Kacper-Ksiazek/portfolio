// Tools
import { useEffect, useState } from "react";
import useWindowSizes from "@/hooks/useWindowSizes";
import useBlockUserScroll from "@/hooks/useBlockUserScroll";
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
    const { width } = useWindowSizes();
    const { disableUserScroll, enableUserScroll } = useBlockUserScroll();
    const [mobileMenuIsOpened, setMobileMenuIsOpened] = useState<boolean>(false);
    const [mobleMenuHasBeenOpenedAtLeastOnece, setMobleMenuHasBeenOpenedAtLeastOnece] = useState<boolean>(false);
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
            setTimeout(() => {
                enableUserScroll();
            }, 600);
        }
    }, [mobileMenuIsOpened, disableUserScroll, enableUserScroll]);
    // routersWrapperElementCSSClass
    useEffect(() => {
        if (width > 1000 && mobleMenuHasBeenOpenedAtLeastOnece) {
            setMobleMenuHasBeenOpenedAtLeastOnece(false);
            setRoutesWrapperElementCSSClass(null);
            return;
        }

        if (mobileMenuIsOpened) {
            setMobleMenuHasBeenOpenedAtLeastOnece(true);
            setRoutesWrapperElementCSSClass("opened");
        } else {
            setRoutesWrapperElementCSSClass("closed");
        }
    }, [mobleMenuHasBeenOpenedAtLeastOnece, width, mobileMenuIsOpened]);

    return {
        mobileMenuIsOpened, //
        renderMobileMenuButton: width <= 1000,
        toggleMobileMenuIsOpened: () => setMobileMenuIsOpened((val) => !val),
        routesWrapperElementCSSClass,
    };
};
