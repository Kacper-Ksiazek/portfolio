type EnableOnScrollAction = { type: "ENABLE_ON_SCROLL" };
type DisableOnScrollAction = { type: "DISABLE_ON_SCROLL" };
type PlayOutroAnimation = { type: "PLAY_OUTRO_ANIMATION" };
type MountAction = { type: "MOUNT" };
type UnmountAction = { type: "UNMOUNT"; payload: { enableOnScroll: boolean } };
type ResetAction = { type: "RESET" };

export type NavigationBarReducerStateAction = EnableOnScrollAction | DisableOnScrollAction | PlayOutroAnimation | MountAction | UnmountAction | ResetAction;

export interface NavigationBarReducerState {
    blockOnScrollTriggering: boolean;
    appearingAnimation: null | "intro" | "outro";
}
