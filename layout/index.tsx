// Tools
import { useRouter } from "next/router";
// Types
import type { FunctionComponent, ReactNode } from "react";
// Other components
import Footer from "./Footer";
import Snackbar from "./Snackbar";
import Navigation from "./Navigation";
import ScrollButton from "./ScrollButton";
import LazyLoadedImages from "./LazyLoadedImagesWrapper";
import TransitionBetweenPages from "./TransitionBetweenPages";
import { SnackbarContextProvider } from "./global/SnackbarContext";
import { MainNavigationBarContextProvider } from "./global/MainNavigationBarContext";
// Styled components
import MainWrapper from "./MainWrapper";

interface LayoutProps {
    children: ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = (props) => {
    const router = useRouter();

    return (
        <MainNavigationBarContextProvider pathname={router.asPath}>
            <SnackbarContextProvider>
                <Navigation />
                <MainWrapper key={`${router.asPath}-content-wrapper`}>{props.children}</MainWrapper>
                <ScrollButton />
                <Footer />
                <TransitionBetweenPages />
                <Snackbar />

                <LazyLoadedImages key={`${router.asPath}-lazy-loaded-images`} />
            </SnackbarContextProvider>
        </MainNavigationBarContextProvider>
    );
};

export default Layout;
