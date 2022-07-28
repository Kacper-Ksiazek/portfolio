// Tools
import { useState } from "react";
// Types
import type { FunctionComponent } from "react";
// Material UI Icons
import Close from "@mui/icons-material/Close";
import Check from "@mui/icons-material/Check";
// Styled components
import StyledInput from "../_styled_components/StyledInput";
import StyledButton from "../_styled_components/StyledButton";
import EditModeBase from "../_styled_components/EditModeBase";

interface SingleTaskEditModeProps {
    currentTask: string;
    exitEditMode: () => void;
    handleModification: (val: string) => void;
}

const SingleTaskEditMode: FunctionComponent<SingleTaskEditModeProps> = (props) => {
    const [modifiedTask, setModifiedTask] = useState<string>(props.currentTask);
    const [animation, setAnimation] = useState<"intro" | "outro">("intro");

    const close = () => {
        setAnimation("outro");
        setTimeout(() => {
            props.exitEditMode();
        }, 910);
    };

    const handleModification = () => {
        close();
        setTimeout(() => {
            props.handleModification(modifiedTask);
        }, 900);
    };

    return (
        <EditModeBase className={animation}>
            <StyledInput
                type="text" //
                placeholder="Type a new task here..."
                value={modifiedTask}
                onChange={(e) => setModifiedTask(e.target.value)}
            />
            <StyledButton tabIndex={-1} disabled={props.currentTask === modifiedTask || modifiedTask.length < 5 || modifiedTask.length > 100} onClick={handleModification}>
                <Check />
            </StyledButton>
            <StyledButton tabIndex={-1} onClick={close}>
                <Close />
            </StyledButton>
        </EditModeBase>
    );
};

export default SingleTaskEditMode;
