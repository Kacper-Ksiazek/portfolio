// Tools
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useStylesOnScoll from "./hooks/useStylesOnScoll";
import useHideWhileScrollingDown from "./hooks/useHideWhileScrollingDown";
// Types
import type { FunctionComponent } from "react";
import type { MUIStyledCommonProps } from "@mui/system";
// Material UI Components
import Fade from "@mui/material/Fade";
// Other components
import Logo from "./Logo";
// Styled Components
import NavigationBase from "./styled_components/NavigationBase";
import SingleFlexWrapper from "./styled_components/SimpleFlexWrapper";
import SingleNavigationRoute from "./SingleNavigationRoute";

const Navigation: FunctionComponent<MUIStyledCommonProps> = (props) => {
    const applyAfterScrollStyles = useStylesOnScoll();
    const { hideNavigaton, scrollingAnimationToDisplay } = useHideWhileScrollingDown();

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
                        applyAfterScrollStyles ? "after-scroll-styles" : "", //
                        displayContrastStyles ? "contrast-colors" : "",
                        scrollingAnimationToDisplay !== null ? `display-${scrollingAnimationToDisplay}-animation` : "",
                        landingPageIntroAnimation,
                    ].join(" ")}
                >
                    <div id="main-navigation-content">
                        <Logo />
                        <SingleFlexWrapper>
                            <SingleNavigationRoute>About me</SingleNavigationRoute>
                            <SingleNavigationRoute>Projects</SingleNavigationRoute>
                            <SingleNavigationRoute>Contact</SingleNavigationRoute>
                        </SingleFlexWrapper>
                    </div>
                </NavigationBase>
            </div>
        </Fade>
    );
};

export default Navigation;
