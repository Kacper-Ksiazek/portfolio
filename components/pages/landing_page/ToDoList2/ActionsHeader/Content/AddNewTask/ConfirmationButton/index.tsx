// Tools
import { useAddNewTaskContext } from "../hooks/useAddNewTaskContext";
import { useConfirmationButtonDisability, useAddTaskButtonOnClick } from "./hooks";
// Types
import type { FunctionComponent } from "react";
// Material UI Icons
import AddRounded from "@mui/icons-material/AddRounded";
// Styled components
import StyledButton from "@/components/atoms/forms/StyledButton";

interface ConfirmationButtonProps {
    id: string;
    foldActionsHeaderPanel: (() => void) | null;
}

const ConfirmationButton: FunctionComponent<ConfirmationButtonProps> = (props) => {
    const { hideThisPanelAfterAdding, newTaskBody, resetNewTaskBody } = useAddNewTaskContext();
    const disableOnClick: boolean = useConfirmationButtonDisability(newTaskBody);

    const onClick: () => void = useAddTaskButtonOnClick({
        disableOnClick,
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
            disabled={disableOnClick}
            id={props.id}
        >
            <AddRounded />
            Add new task
        </StyledButton>
    );
};

export default ConfirmationButton;
