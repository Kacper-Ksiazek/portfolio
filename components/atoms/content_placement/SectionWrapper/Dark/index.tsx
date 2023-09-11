// Tools
import { useState, forwardRef } from "react";
// Types
import type { DarkSectionWrapperProps } from "./@types";
// Other components
import Header from "./Header";
import Background from "./Background";
import GitHubRedirection from "./GitHubRedirection";
// Styled components
import { DarkWrapperBase, StyledContentWrapper } from "./styled_components";

const DarkSectionWrapper = forwardRef<HTMLDivElement, DarkSectionWrapperProps>((props, ref) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    return (
        <DarkWrapperBase
            ref={ref} //
            id={props.id}
            sx={props.sx}
            className={props.className}
        >
            <Background direction={props.shapesDirection} />

            {props.childrenOutsideContent}
            <StyledContentWrapper className="dark-section-content-wrapper">
                <Header {...props.header} setIsVisible={setIsVisible} />

                {props.children}

                {isVisible && props.header.render != false && <GitHubRedirection href={props.githubURL} />}
            </StyledContentWrapper>
        </DarkWrapperBase>
    );
});

DarkSectionWrapper.displayName = "DarkSectionWrapper";

DarkSectionWrapper.defaultProps = {
    shapesDirection: "left",
};
export default DarkSectionWrapper;
