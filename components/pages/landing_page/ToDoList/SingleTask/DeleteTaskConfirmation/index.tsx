// Tools
import { useState } from "react";
// Types
import type { FunctionComponent } from "react";
// Material UI Icons
import Check from "@mui/icons-material/Check";
import Close from "@mui/icons-material/Close";
// Styled Components
import StyledButton from "../../_styled_components/StyledButton";
import DeleteTaskConfirmationBase from "./DeleteTaskConfirmationBase";

interface DeleteTaskConfirmationProps {
    handleDelete: () => void;
    closeDeletionConfirmation: () => void;
}

const DeleteTaskConfirmation: FunctionComponent<DeleteTaskConfirmationProps> = (props) => {
    const [hasBeenDeleted, setHasBeenDeleted] = useState<boolean>(false);
    const [animation, setAnimation] = useState<"intro" | "outro">("intro");

    const close = () => {
        setAnimation("outro");
        setTimeout(() => {
            props.closeDeletionConfirmation();
        }, 710);
    };

    return (
        <DeleteTaskConfirmationBase className={[hasBeenDeleted ? "deleted" : "", animation].join(" ")}>
            <span className="label">Are you sure?</span>
            <StyledButton
                onClick={() => {
                    setHasBeenDeleted(true);
                    props.handleDelete();
                }}
                tabIndex={animation === "intro" ? 1 : -1}
            >
                <Check />
            </StyledButton>
            <StyledButton
                onClick={close} //
                tabIndex={animation === "intro" ? 1 : -1}
            >
                <Close />
            </StyledButton>
        </DeleteTaskConfirmationBase>
    );
};

export default DeleteTaskConfirmation;
