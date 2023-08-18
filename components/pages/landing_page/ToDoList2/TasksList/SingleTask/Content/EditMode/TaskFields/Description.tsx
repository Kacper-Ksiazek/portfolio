// Tools
import { useEditModeContext } from "landing_page/ToDoList2/TasksList/SingleTask/hooks/useEditModeContext";
// Types
import type { FunctionComponent } from "react";
// Styled components
import StyledInput from "@/components/atoms/forms/StyledInput";

const EditTaskDescriptionInput: FunctionComponent<{ className?: string; isInvalid?: boolean }> = (props) => {
    const editModeContext = useEditModeContext();

    function updateDescription(val: string | null) {
        editModeContext.updateNewState({ description: val });
    }

    return (
        <StyledInput
            value={editModeContext.newState.description} //
            onChange={(e) => updateDescription(e.target.value === "" ? null : (e.target.value as string))}
            placeholder="Provide more context or instructions for this task"
            error={props.isInvalid}
            componentThemeID="TRANSPARENT_WHITE"
            className={props.className}
            multiline
            sx={{
                width: "100%",
                height: "64px",
                ".MuiOutlinedInput-root": {
                    padding: "4px 12px",
                },
                textarea: {
                    padding: "0",
                    width: "100%",
                    fontSize: "16px",
                },
            }}
        />
    );
};

export default EditTaskDescriptionInput;
