// Tools
// Types
import type { FunctionComponent, ReactNode } from "react";
// Material UI Components
import Tooltip from "@mui/material/Tooltip";
// Styled components
import TooltipChildrenWrapper from "./_styled_components/TooltipChildrenWrapper";

interface RedirectionWrapperProps {
    tooltip?: string;
    children: ReactNode;
}
const RedirectionWrapper: FunctionComponent<RedirectionWrapperProps> = (props) => {
    if (props.tooltip) {
        return (
            <Tooltip title={props.tooltip} placement="top">
                <TooltipChildrenWrapper>{props.children}</TooltipChildrenWrapper>
            </Tooltip>
        );
    }
    return <TooltipChildrenWrapper>{props.children}</TooltipChildrenWrapper>;
};

export default RedirectionWrapper;
