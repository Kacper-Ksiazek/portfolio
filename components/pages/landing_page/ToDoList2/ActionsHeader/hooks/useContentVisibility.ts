// Tools
import { useSimpleReducer } from "@/hooks/useSimpleReducer";

const HIDING_ANIMATION_DURATION: TimeInMS = 300;

interface UseContentVisibilityResult {
    contentVisibility: ContentVisibilityState;
    toggleContentVisibility: () => void;
}

interface ContentVisibilityState {
    renderContent: boolean;
    preventOnClick: boolean;
    contentIsHidden: boolean;
}

export function useContentVisibility(): UseContentVisibilityResult {
    const [state, updateState] = useSimpleReducer<ContentVisibilityState>({
        contentIsHidden: false,
        preventOnClick: false,
        renderContent: true,
    });

    function toggleContentVisibility() {
        if (state.preventOnClick) return;

        // When content has been already hidden
        if (state.contentIsHidden) {
            updateState({
                contentIsHidden: false,
                renderContent: true,
            });
        }
        // When conent is visible
        else {
            // First trigger hiding animation
            updateState({
                contentIsHidden: true,
                preventOnClick: true,
            });
            // Then wait until it's done
            setTimeout(() => {
                // and eventually stop the content from being rendered
                updateState({
                    preventOnClick: false,
                    renderContent: false,
                });
            }, HIDING_ANIMATION_DURATION);
        }
    }

    return {
        contentVisibility: state,
        toggleContentVisibility,
    };
}
