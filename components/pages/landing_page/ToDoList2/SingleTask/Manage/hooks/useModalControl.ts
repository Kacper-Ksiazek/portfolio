// Tools
import { useRef, useEffect } from "react";
import useWindowSizes from "@/hooks/useWindowSizes";
import { useSimpleReducer } from "@/hooks/useSimpleReducer";
import useBlockUserScroll from "@/hooks/useBlockUserScroll";
import { useMainNavigationBarContext } from "@/hooks/useMainNavigation";
// Types
import type { MutableRefObject, Dispatch, SetStateAction } from "react";

interface LeftTopPosition {
    top: number;
    left: number;
}

interface UseModalControlResult {
    open: () => void;
    close: () => void;
    buttonElementRef: MutableRefObject<HTMLButtonElement | null>;
    position: LeftTopPosition;
}

export function useModalControl(isOpened: boolean, setUnwindMenu: Dispatch<SetStateAction<boolean>>): UseModalControlResult {
    const { width } = useWindowSizes();
    const { disableUserScroll, enableUserScroll } = useBlockUserScroll();
    const [position, dispatch] = useSimpleReducer<LeftTopPosition>({ top: 0, left: 0 });
    const { hideNavigationBar, showNavigationBar } = useMainNavigationBarContext();

    const buttonElementRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        if (isOpened && buttonElementRef.current) {
            const rect = buttonElementRef.current.getBoundingClientRect();
            dispatch({
                top: rect.top,
                left: rect.left,
            });
            disableUserScroll();
            hideNavigationBar();
        }
    }, [width, isOpened, dispatch, disableUserScroll, hideNavigationBar]);

    function open() {
        setUnwindMenu(true);
    }

    function close() {
        enableUserScroll();
        setUnwindMenu(false);
        showNavigationBar();
    }

    return {
        buttonElementRef,
        position,
        close,
        open,
    };
}
