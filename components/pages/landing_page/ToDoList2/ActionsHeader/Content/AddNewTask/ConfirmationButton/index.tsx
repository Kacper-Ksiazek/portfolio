// Tools
import { useAddNewTaskContext } from "../hooks/useAddNewTaskContext";
import { useAddTaskButtonOnClick } from "./hooks/useAddTaskButtonOnClick";
// Types
import type { FunctionComponent } from "react";
// Material UI Icons
import AddRounded from "@mui/icons-material/AddRounded";
// Styled components
import StyledButton from "@/components/atoms/forms/StyledButton";

interface ConfirmationButtonProps {
    id: string;
    disabled: boolean;
    foldActionsHeaderPanel: (() => void) | null;
}

const ConfirmationButton: FunctionComponent<ConfirmationButtonProps> = (props) => {
    const { hideThisPanelAfterAdding, newTaskBody, resetNewTaskBody } = useAddNewTaskContext();

    const onClick: () => void = useAddTaskButtonOnClick({
        disableOnClick: props.disabled,
        newTaskBody,
        resetNewTaskBody,
        foldActionsHeaderPanel: hideThisPanelAfterAdding ? props.foldActionsHeaderPanel : null,
    });

    return (
        <StyledButton
            sx={{
                px: "18px", //
                height: "42px",
                width: "240px",
            }}
            componentThemeID="PRIMARY"
            onClick={onClick}
            disabled={props.disabled}
            id={props.id}
        >
            <AddRounded />
            Add new task
        </StyledButton>
    );
};

export default ConfirmationButton;
