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
        <LabelsListBase>
            <OverflowScrollDiv
                id={CSS_REFERENCES.LABELS_LIST.MAIN_WRAPPER} //
                mimimumViewportWidthToKeepScrollability="0px"
            >
                {props.children}
            </OverflowScrollDiv>
        </LabelsListBase>
    );
};

export default LabelsListWrapper;
