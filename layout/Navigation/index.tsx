// Tools
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useStylesOnScoll from "./hooks/useStylesOnScoll";
import useMobileMenuHandlers from "./hooks/useMobileMenuHandlers";
import useHideWhileScrollingDown from "./hooks/useHideWhileScrollingDown";
// Types
import type { FunctionComponent } from "react";
import type { MUIStyledCommonProps } from "@mui/system";
// Material UI Components
import Fade from "@mui/material/Fade";
// Other components
import Logo from "./Logo";
import MobileMenuButton from "./MobileMenuButton";
// Styled Components
import SingleNavigationRoute from "./SingleNavigationRoute";
import RoutesWrapper from "./styled_components/RoutesWrapper";
import NavigationBase from "./styled_components/NavigationBase";

const Navigation: FunctionComponent<MUIStyledCommonProps> = (props) => {
    const applyAfterScrollStyles = useStylesOnScoll();
    const { mobileMenuIsOpened, toggleMobileMenuIsOpened, renderMobileMenuButton, routesWrapperElementCSSClass } = useMobileMenuHandlers();
    const { hideNavigaton, scrollingAnimationToDisplay, forceShowingNavigaton } = useHideWhileScrollingDown();

    const [displayContrastStyles, setDisplayContrastStyles] = useState<boolean>(false);
    const [landingPageIntroAnimation, setLandingPageIntroAnimation] = useState<null | "landing-page-intro" | "landing-page-intro-faster">(null);

    const router = useRouter();

    useEffect(() => {
        // Handle reversed contrast
        const ROUTES_WITH_REVERSED_CONTRAST: string[] = ["/"];
        setDisplayContrastStyles(ROUTES_WITH_REVERSED_CONTRAST.includes(router.pathname));
        // Handle landing page intro animation
        if (router.pathname === "/") {
            setLandingPageIntroAnimation(router.query.hasOwnProperty("skipIntroductionAnimationEvenThoughItsCool") ? "landing-page-intro-faster" : "landing-page-intro");
        } else {
            setLandingPageIntroAnimation(null);
        }
    }, [router.pathname, router.query]);

    return (
        <Fade in={!hideNavigaton}>
            <div>
                <NavigationBase
                    className={[
                        !mobileMenuIsOpened && applyAfterScrollStyles ? "after-scroll-styles" : "", //
                        displayContrastStyles || routesWrapperElementCSSClass === "opened" ? "contrast-colors" : "",
                        scrollingAnimationToDisplay !== null ? `display-${scrollingAnimationToDisplay}-animation` : "",
                        landingPageIntroAnimation,
                    ].join(" ")}
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
                            <SingleNavigationRoute idOfElementToScroll="about-me" forceShowingNavigaton={forceShowingNavigaton}>
                                About me
                            </SingleNavigationRoute>
                            <SingleNavigationRoute idOfElementToScroll="projects" forceShowingNavigaton={forceShowingNavigaton}>
                                Projects
                            </SingleNavigationRoute>
                            <SingleNavigationRoute idOfElementToScroll="contact " forceShowingNavigaton={forceShowingNavigaton}>
                                Contact
                            </SingleNavigationRoute>
                        </RoutesWrapper>
                    </div>
                </NavigationBase>
            </div>
        </Fade>
    );
};

export default Navigation;
