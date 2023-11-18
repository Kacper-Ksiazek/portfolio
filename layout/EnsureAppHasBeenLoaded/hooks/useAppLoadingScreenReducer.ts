import { useSimpleReducer } from "@/hooks/useSimpleReducer";

interface AppLoadingScreenReducerState {
    renderActualContent: boolean;
    appHasBeenLoaded: boolean;
    loadingOutroAnimation: boolean;
}

export function useAppLoadingScreenReducer() {
    return useSimpleReducer<AppLoadingScreenReducerState>({
        appHasBeenLoaded: false,
        loadingOutroAnimation: false,
        renderActualContent: false,
    });
}
