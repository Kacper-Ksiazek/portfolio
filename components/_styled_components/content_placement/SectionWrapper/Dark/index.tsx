// Tools
import { styled } from "@mui/system";
// Types
import type { SxProps } from "@mui/system";
import type { FunctionComponent, ReactNode } from "react";
// Other components
import Header from "./Header";
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
    shapesDirection: "left" | "right";
    header: {
        main: string;
        label: string;
    };
    sx?: SxProps;
}

const DarkSectionWrapper: FunctionComponent<DarkSectionWrapperProps> = (props) => {
    return (
        <DarkWrapperBase sx={props.sx}>
            <StyledContentWrapper>
                <Header {...props.header}></Header>
                {props.children}
            </StyledContentWrapper>

            <ShapesWrapper>
                <BackgroundShape className={props.shapesDirection} />
                <BackgroundShape className={props.shapesDirection} />
            </ShapesWrapper>
        </DarkWrapperBase>
    );
};

export default DarkSectionWrapper;
