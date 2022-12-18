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

const DarkSectionWrapper: FunctionComponent<DarkSectionWrapperProps> = (props) => {
    return (
        <VisibilitySensor onVisible={props.onVisible} offsetTop={0}>
            <DarkWrapperBase
                id={props.id}
                sx={props.sx} ///
                className={[props.shapesDirection, props.className].join(" ")}
            >
                {props.childrenOutsideContent}
                <StyledContentWrapper>
                    <Header {...props.header}></Header>
                    {props.children}
                    <GitHubRedirection href={props.githubURL} />
                </StyledContentWrapper>
            </DarkWrapperBase>
        </VisibilitySensor>
    );
};

DarkSectionWrapper.defaultProps = {
    shapesDirection: "left",
};
export default DarkSectionWrapper;
