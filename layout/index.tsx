// Tools
// Types
import type { FunctionComponent, ReactNode } from "react";
// Other components
import Footer from "./Footer";
import Navigation from "./Navigation";
import ScrollButton from "./ScrollButton";
import TransitionBetweenPages from "./TransitionBetweenPages";
// Styled components
import MainWrapper from "./MainWrapper";

interface LayoutProps {
    children: ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = (props) => {
    return (
        <>
            <Navigation />
            <MainWrapper>{props.children}</MainWrapper>
            <ScrollButton />
            <Footer />
            <TransitionBetweenPages />
        </>
    );
};

export default Layout;
