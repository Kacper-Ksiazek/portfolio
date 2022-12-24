// Tools
// Types
import type { FunctionComponent } from "react";
// Other components
import Clock from "./Clock";
// Styled components
import { ProgressWrapper } from "./styled_components";

const Progress: FunctionComponent = () => {
    return (
        <ProgressWrapper id="pictures-matching-progress-wrapper">
            <Clock />
        </ProgressWrapper>
    );
};

export default Progress;
