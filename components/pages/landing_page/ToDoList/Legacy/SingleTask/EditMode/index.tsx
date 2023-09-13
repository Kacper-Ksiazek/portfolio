// Tools
import { useState } from "react";
// Types
import type { FunctionComponent } from "react";
// Material UI Icons
import Close from "@mui/icons-material/Close";
import Check from "@mui/icons-material/Check";
// Other components
import TaskManagementButton from "../TaskManagementButton";
// Styled components
import EditModeBase from "./EditModeBase";
import StyledInput from "../../_styled_components/StyledInput";

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

    const disableApplyChangesButton = props.currentTask === modifiedTask || modifiedTask.length < 5 || modifiedTask.length > 100;

    return (
        <EditModeBase className={animation}>
            <StyledInput
                type="text" //
                placeholder="Type a new task here..."
                value={modifiedTask}
                onChange={(e) => setModifiedTask(e.target.value)}
            />

            <TaskManagementButton
                tooltip="Apply changes" //
                icon={<Check />}
                onClick={handleModification}
                componentThemeID="SUCCESS"
                disabled={disableApplyChangesButton}
            />

            <TaskManagementButton
                tooltip="Discard changes" //
                icon={<Close />}
                onClick={close}
            />
        </EditModeBase>
    );
};

export default SingleTaskEditMode;
