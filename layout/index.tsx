// Tools
import { useRouter } from "next/router";
// Types
import type { FunctionComponent, ReactNode } from "react";
// Other components
import Footer from "./Footer";
import Snackbar from "./Snackbar";
import Navigation from "./Navigation";
import ScrollButton from "./ScrollButton";
import { SnackbarContextProvider } from "./SnackbarContext";
import TransitionBetweenPages from "./TransitionBetweenPages";
// Styled components
import MainWrapper from "./MainWrapper";

interface LayoutProps {
    children: ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = (props) => {
    const router = useRouter();

    return (
        <SnackbarContextProvider>
            <Navigation />
            <MainWrapper key={router.asPath}>{props.children}</MainWrapper>
            <ScrollButton />
            <Footer />
            <TransitionBetweenPages />
            <Snackbar />
        </SnackbarContextProvider>
    );
};

export default Layout;
