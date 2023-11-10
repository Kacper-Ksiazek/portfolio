// Tools
import { styled } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import useWindowSizes from "@/hooks/useWindowSizes";
// Types
import type { FunctionComponent, ReactNode } from "react";
// Other components
import Image from "next/image";
import { fadeSimple } from "@/components/keyframes/intro";
import { fadeSimpleOUT } from "@/components/keyframes/outro";
// Styled components
const AppLoaderWrapper = styled("div")(({ theme }) => ({
    position: "fixed",
    top: 0,
    left: 0,
    ...theme.mixins.flex_center,
    flexDirection: "column",
    width: "100vw",
    height: "100vh",

    "&.outro": {
        animation: `${fadeSimpleOUT} .3s .3s ease-in-out both`,
    },

    "div.img-wrapper": {
        width: "240px",
        position: "relative",
        aspectRatio: "400/259",
        opacity: 1,
    },
}));

const ActualContentWrapper = styled("div")(({ theme }) => ({
    animation: `${fadeSimple} 1s .1s ease-in-out both`,
}));

const LOADER_OUTRO_ANIMATION_DURATION: TimeInMS = 600;

const AppLoader: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
    const { width } = useWindowSizes();

    const appHasBeenMarkedAsLoaded = useRef<boolean>(false);
    const [renderActualContent, setRenderActualContent] = useState<boolean>(false);
    const [appHasBeenLoaded, setAppHasBeenLoaded] = useState<boolean>(false);
    const [loadingOutroAnimation, setLoadingOutroAnimation] = useState<boolean>(false);

    // By checking the width of the window, we can know if the app has been loaded or not
    useEffect(() => {
        if (appHasBeenMarkedAsLoaded.current === true) return;

        if (width !== 0) {
            appHasBeenMarkedAsLoaded.current = true;

            setLoadingOutroAnimation(true);

            setTimeout(() => {
                setRenderActualContent(true);
            }, LOADER_OUTRO_ANIMATION_DURATION / 2);

            setTimeout(() => {
                setAppHasBeenLoaded(true);
            }, LOADER_OUTRO_ANIMATION_DURATION);
        }
    }, [width]);

    return (
        <>
            {renderActualContent && <ActualContentWrapper>{children}</ActualContentWrapper>}

            {(() => {
                if (appHasBeenLoaded === false) {
                    return (
                        <AppLoaderWrapper className={loadingOutroAnimation ? "outro" : ""}>
                            <div className="img-wrapper">
                                <Image
                                    src={`/main-page-logo/app-loader.png`} //
                                    alt="page-logo"
                                    layout="fill"
                                    priority
                                />
                            </div>
                        </AppLoaderWrapper>
                    );
                }
            })()}
        </>
    );
};

export default AppLoader;
