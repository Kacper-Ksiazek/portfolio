// Tools
import { CSS_REFERENCES } from "../../../css_references";
import formatTextViaBolding from "@/utils/client/formatTextViaBolding";
// Types
import type { FunctionComponent } from "react";
import type { ReadMoreButtonProps } from "./@types";
// Styled components
import ReadMoreButton from "./ReadMoreButton";
import { ProjectDescriptionBase } from "./_Base";

interface SimpleDescriptionProps extends ReadMoreButtonProps {
    content: string;
}

const MAXIMUM_LENGTH: number = 140;

const SimpleDescription: FunctionComponent<SimpleDescriptionProps> = (props) => {
    const text: string = props.showEntireText ? props.content : props.content.slice(0, MAXIMUM_LENGTH);
    const threeDots: string = !props.showEntireText && props.content.length > MAXIMUM_LENGTH ? " ..." : "";

    return (
        <ProjectDescriptionBase className={CSS_REFERENCES.PROJECT_CARD.DESCRIPTION}>
            <span>{formatTextViaBolding(text)}</span>
            <span>{threeDots}</span>

            <ReadMoreButton
                showEntireText={props.showEntireText} //
                setShowEntireText={props.setShowEntireText}
            />
        </ProjectDescriptionBase>
    );
};

export default SimpleDescription;
