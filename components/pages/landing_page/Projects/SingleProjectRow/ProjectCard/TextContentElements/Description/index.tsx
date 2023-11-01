// Tools
import { CSS_REFERENCES } from "../../../css_references";
import formatTextViaBolding from "@/utils/client/formatTextViaBolding";
// Types
import type { Dispatch, FunctionComponent, SetStateAction } from "react";
// Styled components
import ReadMoreButton from "./ReadMoreButton";
import { ProjectDescriptionBase } from "./_Base";

interface SimpleDescriptionProps {
    content: string;
    showEntireText: boolean;
    setShowEntireText: Dispatch<SetStateAction<boolean>>;
}

const MAXIMUM_LENGTH: number = 140;

const SimpleDescription: FunctionComponent<SimpleDescriptionProps> = (props) => {
    const text: string = props.content.slice(0, MAXIMUM_LENGTH);
    const threeDots: string = props.content.length > MAXIMUM_LENGTH ? " ..." : "";

    return (
        <ProjectDescriptionBase className={CSS_REFERENCES.PROJECT_CARD.DESCRIPTION}>
            <span>{formatTextViaBolding(text)}</span>
            <span>{threeDots}</span>

            <ReadMoreButton />
        </ProjectDescriptionBase>
    );
};

export default SimpleDescription;
