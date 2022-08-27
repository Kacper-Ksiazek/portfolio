// Tools
import { useState } from "react";
// Types
import type { FunctionComponent } from "react";
// Material UI Icons
import Check from "@mui/icons-material/Check";
import Close from "@mui/icons-material/Close";
// Other components
import TaskManagementButton from "../TaskManagementButton";
// Styled Components
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

            <div>
                <TaskManagementButton
                    tooltip="Delete"
                    icon={<Check />}
                    onClick={() => {
                        setHasBeenDeleted(true);
                        props.handleDelete();
                    }}
                    tabIndex={animation === "intro" ? 1 : -1}
                />
                <TaskManagementButton
                    tooltip="Cancel" //
                    icon={<Close />}
                    onClick={close}
                    tabIndex={animation === "intro" ? 1 : -1}
                />
            </div>
        </DeleteTaskConfirmationBase>
    );
};

export default DeleteTaskConfirmation;
