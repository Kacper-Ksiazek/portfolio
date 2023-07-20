// Tools
import { CSS_REFERENCES } from "./css_references";
// Types
import type { FunctionComponent, ReactNode } from "react";
// Styled components
import LabelsListBase from "./Base";
import OverflowScrollDiv from "@/components/atoms/content_placement/OverflowScrollDiv";

interface LabelsListWrapperProps {
    children: ReactNode;
}

const LabelsListWrapper: FunctionComponent<LabelsListWrapperProps> = (props) => {
    return (
        <OverflowScrollDiv
            id={CSS_REFERENCES.LABELS_LIST.MAIN_WRAPPER} //
            mimimumViewportWidthToKeepScrollability="0px"
        >
            <LabelsListBase>{props.children}</LabelsListBase>
        </OverflowScrollDiv>
    );
};

export default LabelsListWrapper;
