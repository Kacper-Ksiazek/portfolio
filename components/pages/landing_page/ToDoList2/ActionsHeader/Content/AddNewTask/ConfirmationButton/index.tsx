// Tools
import { useConfirmationButtonDisability, useAddTaskButtonOnClick } from "./hooks";
// Types
import type { FunctionComponent } from "react";
import type { NewTaskBody } from "landing_page/ToDoList2/@types";
// Material UI Icons
import AddRounded from "@mui/icons-material/AddRounded";
// Styled components
import StyledButton from "@/components/atoms/forms/StyledButton";

interface ConfirmationButtonProps {
    newTaskBody: NewTaskBody;

    resetNewTaskBody: () => void;
    foldActionsHeaderPanel: (() => void) | null;
}

const ConfirmationButton: FunctionComponent<ConfirmationButtonProps> = (props) => {
    const disableOnClick: boolean = useConfirmationButtonDisability(props.newTaskBody);

    const onClick: () => void = useAddTaskButtonOnClick({
        disableOnClick,
        ...props,
    });

    return (
        <StyledButton
            sx={{
                px: "18px", //
                height: "42px",
                mr: "8px",
            }}
            color="primary"
            onClick={onClick}
            disabled={disableOnClick}
        >
            <AddRounded />
            Add new task
        </StyledButton>
    );
};

export default ConfirmationButton;
