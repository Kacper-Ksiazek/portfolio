// Types
import type { FunctionComponent } from "react";
// Styled components
import { ForefrontRectangle, SimpleBackgroundRectangle } from "./Rectangles";

export interface IntroBigRectanglesAnimationProps {
    //! DO NOT DELETE THIS INTERFACE
}

const IntroBigRectanglesAnimation: FunctionComponent<IntroBigRectanglesAnimationProps> = (props) => {
    return (
        <>
            <ForefrontRectangle color="BLACK" />
            <ForefrontRectangle color="SECONDARY" />
            <SimpleBackgroundRectangle />
        </>
    );
};

export default IntroBigRectanglesAnimation;
