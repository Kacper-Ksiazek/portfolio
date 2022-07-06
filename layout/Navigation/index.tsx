// Tools
import { useEffect, useCallback, useState } from "react";
import useStylesOnScoll from "./hooks/useStylesOnScoll";
// Types
import type { FunctionComponent } from "react";
import type { MUIStyledCommonProps } from "@mui/system";
// Other components
import Logo from "./Logo";
// Styled Components
import NavigationBase from "./styled_components/NavigationBase";
import SingleFlexWrapper from "./styled_components/SimpleFlexWrapper";
import SingleNavigationRoute from "./SingleNavigationRoute";

const Navigation: FunctionComponent<MUIStyledCommonProps> = (props) => {
    const applyAfterScrollStyles = useStylesOnScoll();

    return (
        <NavigationBase className={applyAfterScrollStyles ? "applyAfterScrollStyles" : ""}>
            <div id="main-navigation-content">
                <Logo />
                <SingleFlexWrapper>
                    <SingleNavigationRoute>About me</SingleNavigationRoute>
                    <SingleNavigationRoute>Projects</SingleNavigationRoute>
                    <SingleNavigationRoute>Contact</SingleNavigationRoute>
                </SingleFlexWrapper>
            </div>
        </NavigationBase>
    );
};

export default Navigation;
