// Tools
import { CSS_REFERENCES } from "../../css_references";
// Types
import type { FunctionComponent, ReactNode } from "react";
// Other components
import FancyShape from "./FancyShape";

interface CompletionButtonWrapperProps {
    isUrgent: boolean;
    isCompleted: boolean;
    isInEditMode: boolean;
    hasDescription: boolean;

    /** Slot for **ActulatCompletionButton** */
    children: ReactNode;
}

const CompletionButtonWrapper: FunctionComponent<CompletionButtonWrapperProps> = (props) => {
    const { isCompleted, isInEditMode, isUrgent, hasDescription } = props;

    return (
        <div
            className={CSS_REFERENCES.COMPLETION_BUTTON}
            style={{
                marginRight: "12px",
                alignSelf: "flex-start",
                marginTop: "4px",
            }}
        >
            {(hasDescription || isInEditMode) && (
                <FancyShape
                    urgent={isUrgent} //
                    completed={isCompleted}
                    inEditMode={isInEditMode}
                />
            )}

            {props.children}
        </div>
    );
};

export default CompletionButtonWrapper;
