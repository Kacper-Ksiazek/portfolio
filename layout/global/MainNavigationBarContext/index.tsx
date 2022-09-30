// Tools
import { createContext, useState, useCallback, useRef, useEffect } from "react";
// Types
import type { FunctionComponent, ReactNode } from "react";

export interface MainNavigationBarContext {
    appearingAnimation: null | "intro" | "outro";
    showNavigationBar: (params?: {
        /** Expressed in **ms** */
        keepNavigationVisibleFor: number;
    }) => any;
    hideNavigationBar: (params?: {
        /** Expressed in **ms** */
        keepNavigationHiddenFor: number;
    }) => any;
    blockOnScroll: (params: {
        /** Expressed in **ms** */
        time: number;
    }) => void;
}

export const MainNavigationBarContext = createContext<MainNavigationBarContext>({} as any);

interface MainNavigationBarContextProviderProps {
    pathname: string;
    children: ReactNode;
}

export const MainNavigationBarContextProvider: FunctionComponent<MainNavigationBarContextProviderProps> = (props) => {
    const START_HIDING_THRESHOLD: number = 400; // scrollY expressed in **px**
    const INTRO_ANIMATION_DURATION: number = 600;
    const OUTRO_ANIMATION_DURATION: number = 600;

    const _previousScrollY = useRef<number>(0);
    const _blockOnScroll = useRef<boolean>(false);
    const _latestAppliedAnimation = useRef<MainNavigationBarContext["appearingAnimation"]>(null);

    const [appearingAnimation, setAppearingAnimation] = useState<MainNavigationBarContext["appearingAnimation"]>(null);

    const showNavigationBar = useCallback<MainNavigationBarContext["showNavigationBar"]>((params) => {
        setAppearingAnimation("intro");
        _latestAppliedAnimation.current = "intro";
        _blockOnScroll.current = true;

        setTimeout(() => {
            _blockOnScroll.current = false;
        }, INTRO_ANIMATION_DURATION + (params ? params.keepNavigationVisibleFor : 0));
    }, []);

    const hideNavigationBar = useCallback<MainNavigationBarContext["hideNavigationBar"]>((params) => {
        setAppearingAnimation("outro");
        _latestAppliedAnimation.current = "outro";
        _blockOnScroll.current = true;

        setTimeout(() => {
            _blockOnScroll.current = false;
        }, OUTRO_ANIMATION_DURATION + (params ? params.keepNavigationHiddenFor : 0));
    }, []);

    const handleOnScroll = useCallback(() => {
        if (_blockOnScroll.current) return;
        // Page has not been already loaded case
        if (_previousScrollY.current === null) {
            _previousScrollY.current = scrollY;
            return;
        }

        if (scrollY <= START_HIDING_THRESHOLD && _latestAppliedAnimation.current === "outro") {
            showNavigationBar();
        } else if (scrollY > START_HIDING_THRESHOLD) {
            // Hide currently displaying navigation bar
            if (_previousScrollY.current < scrollY && _latestAppliedAnimation.current !== "outro") {
                hideNavigationBar();
            }
            // Display hidden navigation bar again
            if (_previousScrollY.current > scrollY && _latestAppliedAnimation.current !== "intro") {
                showNavigationBar();
            }
        }

        _previousScrollY.current = scrollY;
    }, [hideNavigationBar, showNavigationBar]);

    const preventOnScroll = useCallback<MainNavigationBarContext["blockOnScroll"]>((params) => {
        _blockOnScroll.current = true;
        setTimeout(() => {
            _blockOnScroll.current = false;
        }, params.time);
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleOnScroll);
        return () => {
            window.removeEventListener("scroll", handleOnScroll);
        };
    }, [handleOnScroll]);

    return (
        <MainNavigationBarContext.Provider
            value={{
                appearingAnimation,
                hideNavigationBar,
                showNavigationBar,
                blockOnScroll: preventOnScroll,
            }}
        >
            {props.children}
        </MainNavigationBarContext.Provider>
    );
};
