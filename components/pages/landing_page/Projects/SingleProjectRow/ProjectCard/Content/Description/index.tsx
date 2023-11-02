// Tools
import { CSS_REFERENCES } from "../../../css_references";
import { useExpansiveText } from "./hooks/useExpansiveText";
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

const SimpleDescription: FunctionComponent<SimpleDescriptionProps> = (props) => {
    const { text, textExpandAnimation } = useExpansiveText({
        originalText: props.content,
        showEntireText: props.showEntireText,
    });

    const className = `${CSS_REFERENCES.PROJECT_CARD.DESCRIPTION} ${textExpandAnimation}`;

    return (
        <ProjectDescriptionBase className={className}>
            <span>{formatTextViaBolding(text)}</span>

            <ReadMoreButton
                showEntireText={props.showEntireText} //
                setShowEntireText={props.setShowEntireText}
            />
        </ProjectDescriptionBase>
    );
};

export default SimpleDescription;
