// Tools
import { styled } from "@mui/material";
import { useEffect, useRef } from "react";
import useWindowSizes from "@/hooks/useWindowSizes";
import { useAppLoadingScreenReducer } from "./hooks/useAppLoadingScreenReducer";
// Keyframes
import { fadeSimple } from "@/components/keyframes/intro";
// Types
import type { FunctionComponent, ReactNode } from "react";
// Other components
import AppLoadingScreen from "./AppLoadingScreen";
// Styled components
const ActualContentWrapper = styled("div")(({ theme }) => ({
    animation: `${fadeSimple} 1s .1s ease-in-out both`,
}));

const LOADER_OUTRO_ANIMATION_DURATION: TimeInMS = 600;

const AppLoader: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
    const { width } = useWindowSizes();

    const appHasBeenMarkedAsLoaded = useRef<boolean>(false);
    const [{ appHasBeenLoaded, loadingOutroAnimation, renderActualContent }, updateControls] = useAppLoadingScreenReducer();

    // By checking the width of the window, we can know if the app has been loaded or not
    useEffect(() => {
        // If the app has already been marked as loaded, we don't need to do anything
        if (appHasBeenMarkedAsLoaded.current === true) return;

        // If the width is not 0, it means that the app has been loaded
        if (width !== 0) {
            appHasBeenMarkedAsLoaded.current = true;

            updateControls({ loadingOutroAnimation: true });

            setTimeout(() => {
                updateControls({ renderActualContent: true });
            }, LOADER_OUTRO_ANIMATION_DURATION / 2);

            setTimeout(() => {
                updateControls({ appHasBeenLoaded: true });
            }, LOADER_OUTRO_ANIMATION_DURATION);
        }
    }, [updateControls, width]);

    return (
        <>
            {/* Render the actual content only when it's ready to be rendered */}
            {renderActualContent && <ActualContentWrapper>{children}</ActualContentWrapper>}

            {/* Render the app loader when the app has not been loaded */}
            {appHasBeenLoaded === false && <AppLoadingScreen outro={loadingOutroAnimation} />}
        </>
    );
};

export default AppLoader;
