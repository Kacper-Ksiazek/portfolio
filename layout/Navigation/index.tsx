// Tools
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import useStylesOnScoll from "./hooks/useOnScollStyles";
import { useStylesBasedOnURL } from "./hooks/useStylesBasedOnURL";
import { useMobileMenuHandlers } from "./hooks/useMobileMenuHandlers";
import { useMainNavigationBarContext } from "@/hooks/useMainNavigation";
// Types
import type { FunctionComponent } from "react";
import type { MUIStyledCommonProps } from "@mui/system";
// Other components
import Logo from "./Logo";
import ColorThemeSwitch from "./ColorThemeSwitch";
const MobileMenuButton = dynamic(() => import("./MobileMenuButton"));
// Styled Components
import MobileAuthor from "./styled_components/MobileAuthor";
import SingleNavigationRoute from "./SingleNavigationRoute";
import RoutesWrapper from "./styled_components/RoutesWrapper";
import NavigationBase from "./styled_components/NavigationBase";

const Navigation: FunctionComponent<MUIStyledCommonProps> = () => {
    const OUTRO_ANIMATION_DURATION = 700;

    const applyOnScrollStyles = useStylesOnScoll();
    const { appearingAnimation } = useMainNavigationBarContext();
    const { improveContrast, introAnimation } = useStylesBasedOnURL();
    const { status: mobileMenuStatus, renderMobileMenuButton, toogleVisibility } = useMobileMenuHandlers();

    const [keepContrastFontColor, setKeepContrastFontColor] = useState<boolean>(false);

    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout> | null = null;

        if (mobileMenuStatus === "closed") {
            setKeepContrastFontColor(true);
            timeout = setTimeout(() => {
                setKeepContrastFontColor(false);
            }, OUTRO_ANIMATION_DURATION);
        }

        return () => {
            if (timeout !== null) clearTimeout(timeout);
        };
    }, [mobileMenuStatus]);

    return (
        <NavigationBase
            key={introAnimation}
            className={[
                mobileMenuStatus !== "opened" && applyOnScrollStyles ? "on-scroll-styles" : "", //
                improveContrast || mobileMenuStatus === "opened" ? "contrast-colors" : "",
                appearingAnimation !== null ? `display-${appearingAnimation}-animation` : "",
                introAnimation,
                keepContrastFontColor ? "keep-contrast-font-color" : "",
            ].join(" ")}
        >
            <div id="main-navigation-content">
                <Logo
                    mobileMenuIsOpened={mobileMenuStatus === "opened"} //
                    closeMobileMenu={toogleVisibility}
                />

                {(() => {
                    if (renderMobileMenuButton) {
                        return (
                            <MobileMenuButton
                                onClick={toogleVisibility} //
                                isOpened={mobileMenuStatus === "opened"}
                            />
                        );
                    }
                })()}

                <RoutesWrapper className={mobileMenuStatus ?? ""}>
                    <SingleNavigationRoute
                        idOfElementToScroll="about-me" //
                        mobileMenuIsOpened={mobileMenuStatus === "opened"}
                        closeMobileMenu={toogleVisibility}
                    >
                        About me
                    </SingleNavigationRoute>
                    <SingleNavigationRoute
                        idOfElementToScroll="projects" //
                        mobileMenuIsOpened={mobileMenuStatus === "opened"}
                        closeMobileMenu={toogleVisibility}
                    >
                        Projects
                    </SingleNavigationRoute>
                    <SingleNavigationRoute
                        idOfElementToScroll="contact" //
                        mobileMenuIsOpened={mobileMenuStatus === "opened"}
                        closeMobileMenu={toogleVisibility}
                    >
                        Contact
                    </SingleNavigationRoute>

                    <ColorThemeSwitch closeMobileMenu={toogleVisibility} />

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
