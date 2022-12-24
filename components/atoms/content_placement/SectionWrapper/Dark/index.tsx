// Tools
import { styled } from "@mui/system";
// Types
import type { FunctionComponent } from "react";
import type { DarkSectionWrapperProps } from "./@types";
// Other components
import Header from "./Header";
import GitHubRedirection from "./GitHubRedirection";
import VisibilitySensor from "@/components/utils/VisibilitySensor";
// Styled components
import DarkWrapperBase from "./DarkWrapperBase";
import ContentWrapper from "../_ContentWrapper";

const StyledContentWrapper = styled(ContentWrapper)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    color: "#fff",
}));

const DarkSectionWrapperBackgroundSVG = styled("span")(({ theme }) => ({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundRepeat: "no-repeat !important",
    backgroundPosition: "center ",
    backgroundSize: "cover !important",
    "&.left": {
        background: "url(/images/components/dark-section-wrapper/left.svg)",
    },
    "&.right": {
        background: "url(/images/components/dark-section-wrapper/right.svg)",
    },
}));

const DarkSectionWrapper: FunctionComponent<DarkSectionWrapperProps> = (props) => {
    return (
        <VisibilitySensor onVisible={props.onVisible} offsetTop={0}>
            <DarkWrapperBase
                id={props.id}
                sx={props.sx} ///
                className={props.className}
            >
                <DarkSectionWrapperBackgroundSVG
                    className={[
                        "dark-section-wrapper-background-svg", //
                        props.shapesDirection,
                    ].join(" ")}
                />
                {props.childrenOutsideContent}
                <StyledContentWrapper>
                    {props.renderHeader && <Header {...props.header}></Header>}

                    {props.children}
                    <GitHubRedirection href={props.githubURL} />
                </StyledContentWrapper>
            </DarkWrapperBase>
        </VisibilitySensor>
    );
};

DarkSectionWrapper.defaultProps = {
    shapesDirection: "left",
    renderHeader: true,
};
export default DarkSectionWrapper;
