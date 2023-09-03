// Types
import type { FunctionComponent } from "react";
// Other components
import Tooltip from "./Tooltip";
import ActualCompletionButton from "./ActualCompletionButton";
import CompletionButtonWrapper from "./CompletionButtonWrapper";

const CompletionButton: FunctionComponent = () => {
    return (
        <CompletionButtonWrapper>
            <Tooltip>
                <ActualCompletionButton />
            </Tooltip>
        </CompletionButtonWrapper>
    );
};

export default CompletionButton;
