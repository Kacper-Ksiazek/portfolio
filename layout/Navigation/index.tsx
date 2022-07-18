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
    const hideNavigaton = useHideWhileScrollingDown();
    const [displayContrastStyles, setDisplayContrastStyles] = useState<boolean>(false);

    const router = useRouter();
    useEffect(() => {
        setDisplayContrastStyles(router.pathname === "/");
    }, [router.pathname]);

    return (
        <Fade in={!hideNavigaton}>
            <div>
                <NavigationBase
                    className={[
                        applyAfterScrollStyles ? "after-scroll-styles" : "", //
                        displayContrastStyles ? "contrast-colors" : "",
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
