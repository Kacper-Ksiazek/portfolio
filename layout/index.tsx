// Tools
import { useRouter } from "next/router";
// Types
import type { FunctionComponent, ReactNode } from "react";
// Other components
import Footer from "./Footer";
import Snackbar from "./Snackbar";
import Navigation from "./Navigation";
import ScrollButton from "./ScrollButton";
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
                <MainWrapper key={router.asPath}>{props.children}</MainWrapper>
                <ScrollButton />
                <Footer />
                <TransitionBetweenPages />
                <Snackbar />
            </SnackbarContextProvider>
        </MainNavigationBarContextProvider>
    );
};

export default Layout;
