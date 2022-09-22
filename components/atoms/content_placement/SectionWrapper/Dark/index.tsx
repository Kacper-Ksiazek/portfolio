// Tools
import { styled } from "@mui/system";
// Types
import type { SxProps } from "@mui/system";
import type { FunctionComponent, ReactNode } from "react";
// Other components
import Header from "./Header";
import VisibilitySensor from "@/components/utils/VisibilitySensor";
// Styled components
import DarkWrapperBase from "./DarkWrapperBase";
import BackgroundShape from "./BackgroundShape";
import ContentWrapper from "../_ContentWrapper";

const ShapesWrapper = styled("div")(({ theme }) => ({
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "flex",
    top: "0",
    left: 0,
    alignItems: "center",
    justifyContent: "center",
}));

const StyledContentWrapper = styled(ContentWrapper)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    color: "#fff",
}));

interface DarkSectionWrapperProps {
    children: ReactNode;
    /**
     * Specifies the rotation of two background rectangles.
     */
    shapesDirection?: "left" | "right";
    /**
     * Handles section's premade header along with its smaller label
     */
    header: {
        main: string;
        label: string;
    };
    /**
     *  Custom `MaterialUI` styles to be applied to the `sx` attribute of the **section main element**
     */
    sx?: SxProps;
    /**
     * allback which is fired once when the element appears on the screen
     * */
    onVisible?: () => void;
}

const DarkSectionWrapper: FunctionComponent<DarkSectionWrapperProps> = (props) => {
    return (
        <VisibilitySensor onVisible={props.onVisible} offsetTop={0}>
            <DarkWrapperBase sx={props.sx}>
                <StyledContentWrapper>
                    <Header {...props.header}></Header>
                    {props.children}
                </StyledContentWrapper>

                <ShapesWrapper>
                    <BackgroundShape className={`${props.shapesDirection} background-shape`} />
                    <BackgroundShape className={`${props.shapesDirection} background-shape`} />
                </ShapesWrapper>
            </DarkWrapperBase>
        </VisibilitySensor>
    );
};

DarkSectionWrapper.defaultProps = {
    shapesDirection: "left",
};
export default DarkSectionWrapper;
