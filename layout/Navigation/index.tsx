// Tools
import dynamic from "next/dynamic";
import useStylesOnScoll from "./hooks/useOnScollStyles";
import { useStylesBasedOnURL } from "./hooks/useStylesBasedOnURL";
import useMobileMenuHandlers from "./hooks/useMobileMenuHandlers";
import { useMainNavigationBarContext } from "../global/MainNavigationBarContext/useMainNavigationBarContext";
// Types
import type { FunctionComponent } from "react";
import type { MUIStyledCommonProps } from "@mui/system";
// Other components
import Logo from "./Logo";
const MobileMenuButton = dynamic(() => import("./MobileMenuButton"));
// Styled Components
import MobileAuthor from "./styled_components/MobileAuthor";
import SingleNavigationRoute from "./SingleNavigationRoute";
import RoutesWrapper from "./styled_components/RoutesWrapper";
import NavigationBase from "./styled_components/NavigationBase";

const Navigation: FunctionComponent<MUIStyledCommonProps> = () => {
    const applyOnScrollStyles = useStylesOnScoll();
    const { appearingAnimation } = useMainNavigationBarContext();
    const { improveContrast, introAnimation } = useStylesBasedOnURL();
    const { mobileMenuIsOpened, toggleMobileMenuIsOpened, renderMobileMenuButton, routesWrapperElementCSSClass } = useMobileMenuHandlers();

    return (
        <NavigationBase
            className={[
                !mobileMenuIsOpened && applyOnScrollStyles ? "on-scroll-styles" : "", //
                improveContrast || routesWrapperElementCSSClass === "opened" ? "contrast-colors" : "",
                appearingAnimation !== null ? `display-${appearingAnimation}-animation` : "",
            ].join(" ")}
            sx={introAnimation}
        >
            <div id="main-navigation-content">
                <Logo />

                {(() => {
                    if (renderMobileMenuButton) {
                        return (
                            <MobileMenuButton
                                onClick={toggleMobileMenuIsOpened} //
                                isOpened={mobileMenuIsOpened}
                            />
                        );
                    }
                })()}

                <RoutesWrapper className={routesWrapperElementCSSClass ?? ""}>
                    <SingleNavigationRoute idOfElementToScroll="about-me">About me</SingleNavigationRoute>
                    <SingleNavigationRoute idOfElementToScroll="projects">Projects</SingleNavigationRoute>
                    <SingleNavigationRoute idOfElementToScroll="contact">Contact</SingleNavigationRoute>
                    <MobileAuthor>
                        <span id="mobile-menu-bottom-card-name">Kacper Książek</span>
                        <span id="mobile-menu-bottom-card-year">{new Date(Date.now()).getUTCFullYear()}</span>
                    </MobileAuthor>
                </RoutesWrapper>
            </div>
        </NavigationBase>
    );
};

export default Navigation;
