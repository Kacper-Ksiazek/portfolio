// Tools
import { useEditModeContext } from "landing_page/ToDoList2/TasksList/SingleTask/hooks/useEditModeContext";
// Types
import type { FunctionComponent } from "react";
// Styled components
import StyledInput from "@/components/atoms/forms/StyledInput";

const EditTaskTitleInput: FunctionComponent<{ className?: string; isInvalid?: boolean }> = (props) => {
    const editModeContext = useEditModeContext();

    function updateTitle(val: string) {
        editModeContext.updateNewState({ title: val });
    }

    return (
        <StyledInput
            className={props.className}
            value={editModeContext.newState.title} //
            onChange={(e) => updateTitle(e.target.value as string)}
            componentThemeID="TRANSPARENT_WHITE"
            sx={{
                width: "100%",
                input: {
                    padding: "4px 12px",
                    width: "100%",
                    fontSize: "16px",
                },
            }}
        />
    );
};

export default EditTaskTitleInput;
