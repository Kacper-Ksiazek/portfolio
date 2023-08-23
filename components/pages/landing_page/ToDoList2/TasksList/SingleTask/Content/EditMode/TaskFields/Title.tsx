// Tools
import { TITLE_RESTRICTIONS } from "landing_page/ToDoList2/validators/length_restrictions";
import { useEditModeContext } from "landing_page/ToDoList2/TasksList/SingleTask/hooks/useEditModeContext";
// Types
import type { FunctionComponent } from "react";
// Other components
import WrapperWithWitdthIndicator from "components/atoms/forms/LengthIndicator/WithWrapper";
// Styled components
import StyledInput from "@/components/atoms/forms/StyledInput";

const EditTaskTitleInput: FunctionComponent<{ className?: string; isInvalid?: boolean }> = (props) => {
    const editModeContext = useEditModeContext();

    function updateTitle(val: string) {
        editModeContext.updateNewState({ title: val });
    }

    return (
        <WrapperWithWitdthIndicator
            lengthIndicator={{
                currentLength: editModeContext.newState.title.length,
                max: TITLE_RESTRICTIONS.max,
                min: TITLE_RESTRICTIONS.min,
                width: "66px",
            }}
            wrapperProps={{
                style: {
                    width: "100%",
                },
            }}
        >
            <StyledInput
                value={editModeContext.newState.title} //
                placeholder="Task title"
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
        </WrapperWithWitdthIndicator>
    );
};

export default EditTaskTitleInput;
