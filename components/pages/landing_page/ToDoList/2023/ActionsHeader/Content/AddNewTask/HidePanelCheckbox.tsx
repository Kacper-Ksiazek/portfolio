// Tools
import { useAddNewTaskContext } from "./hooks/useAddNewTaskContext";
// Types
import type { FunctionComponent } from "react";
// Styled components
import StyledCheckbox from "@/components/atoms/forms/StyledCheckbox";

const TaskTitleInput: FunctionComponent<{ id: string }> = ({ id }) => {
    const { hideThisPanelAfterAdding, setHideThisPanelAfterAdding } = useAddNewTaskContext();

    return (
        <StyledCheckbox
            label="Hide this panel" //
            value={hideThisPanelAfterAdding}
            id={id}
            //
            updateValue={(val: boolean) => setHideThisPanelAfterAdding(val)}
        />
    );
};

export default TaskTitleInput;
