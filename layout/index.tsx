// Tools
// Types
import type { FunctionComponent, ReactNode } from "react";
// Other components
import Navigation from "./Navigation";
import ScrollButton from "./ScrollButton";
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
        </>
    );
};

export default Layout;
