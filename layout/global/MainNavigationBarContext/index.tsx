// Tools
import { reducer } from "./reducer";
import { createContext, useReducer, useCallback, useRef, useEffect } from "react";
// Types
import type { FunctionComponent, ReactNode } from "react";
import type { NavigationBarReducerState } from "./reducer/@types";

export interface MainNavigationBarContext extends NavigationBarReducerState {
    showNavigationBar: (params?: {
        /** Expressed in **ms** */
        keepNavigationVisibleFor: number;
    }) => any;
    hideNavigationBar: (params?: {
        /** Expressed in **ms** */
        keepNavigationHiddenFor: number;
    }) => any;
}

export const MainNavigationBarContext = createContext<MainNavigationBarContext>({} as any);

interface MainNavigationBarContextProviderProps {
    pathname: string;
    children: ReactNode;
}

export const MainNavigationBarContextProvider: FunctionComponent<MainNavigationBarContextProviderProps> = (props) => {
    const START_HIDING_THRESHOLD: number = 400; // scrollY expressed in **px**
    const INTRO_ANIMATION_DURATION: number = 500; // in ms
    const OUTRO_ANIMATION_DURATION: number = 500; // in ms

    const previousScrollY = useRef<number>(0);
    const [{ appearingAnimation, blockOnScrollTriggering }, dispatch] = useReducer(reducer, {
        appearingAnimation: null,
        blockOnScrollTriggering: false,
    } as NavigationBarReducerState);

    const showNavigationBar = useCallback<MainNavigationBarContext["showNavigationBar"]>((params) => {
        if (scrollY > START_HIDING_THRESHOLD) {
            dispatch({ type: "MOUNT" });
            setTimeout(() => {
                dispatch({ type: "ENABLE_ON_SCROLL" });
            }, INTRO_ANIMATION_DURATION + (params ? params.keepNavigationVisibleFor : 0));
        }
    }, []);

    const hideNavigationBar = useCallback<MainNavigationBarContext["hideNavigationBar"]>((params) => {
        if (scrollY > START_HIDING_THRESHOLD) {
            dispatch({ type: "PLAY_OUTRO_ANIMATION" });
            setTimeout(() => {
                dispatch({
                    type: "UNMOUNT",
                    payload: {
                        enableOnScroll: params === undefined,
                    },
                });
                if (params !== undefined) {
                    setTimeout(() => dispatch({ type: "ENABLE_ON_SCROLL" }), params.keepNavigationHiddenFor);
                }
            }, OUTRO_ANIMATION_DURATION);
        }
    }, []);

    const handleOnScroll = useCallback(() => {
        if (blockOnScrollTriggering) return;
        // Page has not been already loaded case
        if (previousScrollY.current === null || scrollY <= START_HIDING_THRESHOLD) {
            previousScrollY.current = scrollY;
            return;
        }

        // Hide currently displaying navigation bar
        if (previousScrollY.current < scrollY && appearingAnimation !== "outro") {
            hideNavigationBar();
        }
        // Display hidden navigation bar again
        else if (previousScrollY.current > scrollY && appearingAnimation !== "intro") {
            showNavigationBar();
        }

        previousScrollY.current = scrollY;
    }, [appearingAnimation, blockOnScrollTriggering, hideNavigationBar, showNavigationBar]);

    useEffect(() => {
        window.addEventListener("scroll", handleOnScroll);
        return () => {
            window.removeEventListener("scroll", handleOnScroll);
        };
    }, [handleOnScroll]);

    useEffect(() => dispatch({ type: "RESET" }), [props.pathname]);

    return (
        <MainNavigationBarContext.Provider
            value={{
                appearingAnimation, //
                blockOnScrollTriggering,
                showNavigationBar,
                hideNavigationBar,
            }}
        >
            {props.children}
        </MainNavigationBarContext.Provider>
    );
};
