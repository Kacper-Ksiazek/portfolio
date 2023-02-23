// Types
import type { FunctionComponent } from "react";
import type { DarkSectionWrapperProps } from "./@types";
// Other components
import Header from "./Header";
import Background from "./Background";
import GitHubRedirection from "./GitHubRedirection";
// Styled components
import { DarkWrapperBase, StyledContentWrapper } from "./styled_components";

const DarkSectionWrapper: FunctionComponent<DarkSectionWrapperProps> = (props) => {
    return (
        <DarkWrapperBase
            id={props.id}
            sx={props.sx} ///
            className={props.className}
        >
            <Background direction={props.shapesDirection} />

            {props.childrenOutsideContent}
            <StyledContentWrapper className="dark-section-content-wrapper">
                {props.renderHeader && <Header {...props.header}></Header>}

                {props.children}
                <GitHubRedirection href={props.githubURL} />
            </StyledContentWrapper>
        </DarkWrapperBase>
    );
};

DarkSectionWrapper.defaultProps = {
    shapesDirection: "left",
    renderHeader: true,
};
export default DarkSectionWrapper;
