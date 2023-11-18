// Tools
import { CSS_REFERENCES } from "./css_references";
// Types
import type { FunctionComponent, ReactNode } from "react";
// Styled components
import Content from "./ContentWrapper";
import RotatingCircle from "./RotatingCircle";

export interface ActualContentProps {
    renderBigCircle: boolean;

    children: ReactNode;
    elementsOutsideContent: ReactNode;
}

const ActualContent: FunctionComponent<ActualContentProps> = (props) => {
    return (
        <>
            <RotatingCircle id={CSS_REFERENCES.SMALL_CIRCLE} />
            {props.renderBigCircle && <RotatingCircle id={CSS_REFERENCES.BIG_CIRCLE} />}
            {props.elementsOutsideContent}
            <Content>{props.children}</Content>
        </>
    );
};

export default ActualContent;
