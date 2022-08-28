// Types
import type { FunctionComponent, ReactNode } from "react";
// Other components
import Footer from "./Footer";
import Snackbar from "./Snackbar";
import Navigation from "./Navigation";
import ScrollButton from "./ScrollButton";
import { GlobalContextProvider } from "./GlobalContext";
import TransitionBetweenPages from "./TransitionBetweenPages";
// Styled components
import MainWrapper from "./MainWrapper";

interface LayoutProps {
    children: ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = (props) => {
    return (
        <GlobalContextProvider>
            <Navigation />
            <MainWrapper>{props.children}</MainWrapper>
            <ScrollButton />
            <Footer />
            <TransitionBetweenPages />
            <Snackbar />
        </GlobalContextProvider>
    );
};

export default Layout;
