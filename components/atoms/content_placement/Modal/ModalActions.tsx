// Types
import type { FunctionComponent } from "react";
import type { ActionButtonProps } from "./@types";
// Styled components
import { StyledButton } from "@/components/atoms/forms";
import FlexBox from "@/components/atoms/content_placement/FlexBox";

interface ModalActionsProps {
    actionButton: ActionButtonProps;

    closeModal: () => void;
}

const ModalActions: FunctionComponent<ModalActionsProps> = (props) => {
    const { actionButton } = props;

    // DOPISAC LOGIKE DO USUWANIA LABELOW
    // BO WSZYSTKO WYGLADA ALE NIC NIE DZIALA

    function onActionButtonClick() {
        if (actionButton.disabled === true) return;

        actionButton.onClick();
        props.closeModal();
    }

    return (
        <FlexBox sx={{ mt: "24px" }}>
            <StyledButton color="error" onClick={props.closeModal}>
                Cancel
            </StyledButton>

            <StyledButton
                color="primary" //
                onClick={onActionButtonClick}
                disabled={actionButton.disabled}
            >
                {actionButton.prompt}
            </StyledButton>
        </FlexBox>
    );
};

export default ModalActions;
