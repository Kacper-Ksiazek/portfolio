// Types
import type { FunctionComponent } from "react";
// Other components
import ActualCompletionButton from "./ActualCompletionButton";
import CompletionButtonWrapper from "./CompletionButtonWrapper";

interface CompletionButtonProps {
    isUrgent: boolean;
    isCompleted: boolean;
    isInEditMode: boolean;
    hasDescription: boolean;

    toggleCompletion: () => void;
}

const CompletionButton: FunctionComponent<CompletionButtonProps> = (props) => {
    const { toggleCompletion, ...propsToForward } = props;

    return (
        <CompletionButtonWrapper {...propsToForward}>
            <ActualCompletionButton
                isCompleted={props.isCompleted} //
                toggleCompletion={props.toggleCompletion}
            />
        </CompletionButtonWrapper>
    );
};

export default CompletionButton;
