// Tools
import { CSS_REFERENCES } from "./css_references";
// Types
import type { FunctionComponent } from "react";
import type { ActionButtonProps } from "./@types";
// Styled components
import StyledButton from "@/components/atoms/forms/StyledButton";
import FlexBox from "@/components/atoms/content_placement/FlexBox";

interface ModalActionsProps {
    actionButton: ActionButtonProps;

    closeModal: () => void;
}

const OUTRO_ANIMATION_DURATION: TimeInMS = 0;

const ModalActions: FunctionComponent<ModalActionsProps> = (props) => {
    const { actionButton } = props;

    function onActionButtonClick() {
        if (actionButton.disabled === true) return;

        props.closeModal();

        setTimeout(() => {
            actionButton.onClick();
        }, OUTRO_ANIMATION_DURATION);
    }

    return (
        <FlexBox sx={{ mt: "24px" }}>
            <StyledButton
                componentThemeID="ERROR"
                onClick={props.closeModal} //
                className={CSS_REFERENCES.BUTTON}
            >
                Cancel
            </StyledButton>

            <StyledButton
                componentThemeID="PRIMARY" //
                onClick={onActionButtonClick}
                disabled={actionButton.disabled}
                className={CSS_REFERENCES.BUTTON}
            >
                {actionButton.prompt}
            </StyledButton>
        </FlexBox>
    );
};

export default ModalActions;
