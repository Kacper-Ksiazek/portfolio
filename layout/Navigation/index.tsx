// Tools
import { styled } from "@mui/system";
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
    return (
        <NavigationBase>
            <Logo />
            <SingleFlexWrapper>
                <SingleNavigationRoute>About me</SingleNavigationRoute>
                <SingleNavigationRoute>Projects</SingleNavigationRoute>
                <SingleNavigationRoute>Contact</SingleNavigationRoute>
            </SingleFlexWrapper>
        </NavigationBase>
    );
};

export default Navigation;
