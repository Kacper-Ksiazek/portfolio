// Tools
import { CSS_REFERENCES } from "../../../css_references";
import { useExpansiveText, useMobileLayout } from "./hooks";
import formatTextViaBolding from "@/utils/client/formatTextViaBolding";
// Types
import type { FunctionComponent } from "react";
import type { Order, ReadMoreButtonProps } from "./@types";
// Styled components
import ReadMoreButton from "./ReadMoreButton";
import { ProjectDescriptionBase } from "./_Base";

interface SimpleDescriptionProps extends ReadMoreButtonProps {
    content: string;
    order: Order;
}

const SimpleDescription: FunctionComponent<SimpleDescriptionProps> = (props) => {
    const applyMobileLayout = useMobileLayout();

    const { text, textExpandAnimation } = useExpansiveText({
        originalText: props.content,
        showEntireText: props.showEntireText,
        applyMobileLayout,
    });

    const className = `${CSS_REFERENCES.PROJECT_CARD.DESCRIPTION} ${textExpandAnimation}`;

    return (
        <ProjectDescriptionBase
            order={props.order} //
            className={className}
        >
            <span>{formatTextViaBolding(text)}</span>

            <ReadMoreButton
                showEntireText={props.showEntireText} //
                setShowEntireText={props.setShowEntireText}
            />
        </ProjectDescriptionBase>
    );
};

export default SimpleDescription;
