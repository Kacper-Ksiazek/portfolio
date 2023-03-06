// Tools
import { useState } from "react";
import dynamic from "next/dynamic";
import { useMainNavigationBarContext } from "@/hooks/useMainNavigation";
import { useKeepContrastFontColor, useMobileMenuHandlers, useStylesOnScoll, useStylesBasedOnURL } from "./hooks";
// Types
import type { FunctionComponent } from "react";
// Other components
import Logo from "./Logo";
import ColorThemeSwitch from "./ColorThemeSwitch";

const MobileMenuButton = dynamic(() => import("./MobileMenuButton"));
// Styled Components
import MobileAuthor from "./styled_components/MobileAuthor";
import SingleNavigationRoute from "./SingleNavigationRoute";
import RoutesWrapper from "./styled_components/RoutesWrapper";
import NavigationBase from "./styled_components/NavigationBase";

const Navigation: FunctionComponent = () => {
    const applyOnScrollStyles = useStylesOnScoll();
    const { appearingAnimation } = useMainNavigationBarContext();
    const { improveContrast, introAnimation } = useStylesBasedOnURL();
    const { status: mobileMenuStatus, renderMobileMenuButton, toogleVisibility } = useMobileMenuHandlers();

    const keepContrastFontColor = useKeepContrastFontColor(mobileMenuStatus);
    const [colorThemeMenuIsOpened, setColorThemeMenuIsOpened] = useState<boolean>(false);

    const mobileMenuIsOpened: boolean = mobileMenuStatus === "opened";

    return (
        <NavigationBase
            key={introAnimation}
            className={[
                !mobileMenuIsOpened && applyOnScrollStyles ? "on-scroll-styles" : "", //
                improveContrast || mobileMenuIsOpened ? "contrast-colors" : "",
                appearingAnimation !== null ? `display-${appearingAnimation}-animation` : "",
                introAnimation,
                keepContrastFontColor ? "keep-contrast-font-color" : "",
                colorThemeMenuIsOpened ? "color-theme-menu-is-opened" : "",
            ].join(" ")}
        >
            <div id="main-navigation-content">
                <Logo
                    mobileMenuIsOpened={mobileMenuIsOpened} //
                    closeMobileMenu={toogleVisibility}
                />

                {(() => {
                    if (renderMobileMenuButton) {
                        return (
                            <MobileMenuButton
                                onClick={toogleVisibility} //
                                isOpened={mobileMenuIsOpened}
                            />
                        );
                    }
                })()}

                <RoutesWrapper className={mobileMenuStatus ?? ""}>
                    <SingleNavigationRoute
                        idOfElementToScroll="about-me" //
                        mobileMenuIsOpened={mobileMenuIsOpened}
                        closeMobileMenu={toogleVisibility}
                    >
                        About me
                    </SingleNavigationRoute>
                    <SingleNavigationRoute
                        idOfElementToScroll="projects" //
                        mobileMenuIsOpened={mobileMenuIsOpened}
                        closeMobileMenu={toogleVisibility}
                    >
                        Projects
                    </SingleNavigationRoute>
                    <SingleNavigationRoute
                        idOfElementToScroll="contact" //
                        mobileMenuIsOpened={mobileMenuIsOpened}
                        closeMobileMenu={toogleVisibility}
                    >
                        Contact
                    </SingleNavigationRoute>

                    <ColorThemeSwitch
                        closeMobileMenu={() => mobileMenuIsOpened && toogleVisibility()} //
                        setColorThemeMenuIsOpened={setColorThemeMenuIsOpened}
                    />

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
