// Tools
import { useState } from "react";
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
    const [isVisible, setIsVisible] = useState<boolean>(false);

    return (
        <DarkWrapperBase
            id={props.id}
            sx={props.sx} ///
            className={props.className}
        >
            <Background direction={props.shapesDirection} />

            {props.childrenOutsideContent}
            <StyledContentWrapper className="dark-section-content-wrapper">
                <Header {...props.header} setIsVisible={setIsVisible} />

                {props.children}

                {isVisible && <GitHubRedirection href={props.githubURL} />}
            </StyledContentWrapper>
        </DarkWrapperBase>
    );
};

DarkSectionWrapper.defaultProps = {
    shapesDirection: "left",
};
export default DarkSectionWrapper;
