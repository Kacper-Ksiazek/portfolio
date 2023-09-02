// Types
import type { FunctionComponent } from "react";
// Other components
import ActualCompletionButton from "./ActualCompletionButton";
import CompletionButtonWrapper from "./CompletionButtonWrapper";

const CompletionButton: FunctionComponent = () => {
    return (
        <CompletionButtonWrapper>
            <ActualCompletionButton />
        </CompletionButtonWrapper>
    );
};

export default CompletionButton;
