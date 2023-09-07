// Tools
import { useDelayedState } from "@/hooks/useDelayedState";
// Types
import type { Dispatch, SetStateAction } from "react";

interface UseMenuVisibilityResult {
    menuIsVisible: boolean;
    applyOutroAnimation: boolean;

    setMenuVisibility: Dispatch<SetStateAction<boolean>>;
}

export function useMenuVisibility(defaultDelay: number = 500): UseMenuVisibilityResult {
    const {
        value: _menuModalIsOpened, // it's just an auxiliary propetry
        isChanging: menuVisibilityIsChanging,
        setValue: setMenuVisibility,
    } = useDelayedState<boolean>(false, defaultDelay);

    const menuIsVisible: boolean = _menuModalIsOpened === true || (_menuModalIsOpened === false && menuVisibilityIsChanging === true);

    const applyOutroAnimation: boolean = _menuModalIsOpened === true && menuVisibilityIsChanging === true;

    return {
        menuIsVisible,
        applyOutroAnimation,

        setMenuVisibility,
    };
}
