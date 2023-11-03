// Types
import type { FunctionComponent } from "react";
import type { ReadMoreButtonProps } from "../@types";
// Styled components
import ReadMoreButtonWrapperBase from "./Base";

const ReadMoreButton: FunctionComponent<ReadMoreButtonProps> = (props) => {
    const content: string = props.showEntireText ? "SHOW LESS" : "READ MORE";

    function onClick() {
        props.setShowEntireText((val) => !val);
    }

    return (
        <ReadMoreButtonWrapperBase role="button" onClick={onClick}>
            <span>{content}</span>
        </ReadMoreButtonWrapperBase>
    );
};

export default ReadMoreButton;
