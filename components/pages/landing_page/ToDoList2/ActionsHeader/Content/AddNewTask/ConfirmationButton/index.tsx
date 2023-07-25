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
    id: string;

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
