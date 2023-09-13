// Tools
import { TITLE_RESTRICTIONS } from "landing_page/ToDoList/2023/validators/length_restrictions";
import { useEditModeContext, useValidationResultContext } from "landing_page/ToDoList/2023/TasksList/SingleTask/hooks";
// Types
import type { FunctionComponent } from "react";
// Other components
import WrapperWithWitdthIndicator from "components/atoms/forms/LengthIndicator/WithWrapper";
// Styled components
import StyledInput from "@/components/atoms/forms/StyledInput";

interface EditTaskTitleInputProps {
    className?: string;
    small?: boolean;
}

const EditTaskTitleInput: FunctionComponent<EditTaskTitleInputProps> = (props) => {
    const editModeContext = useEditModeContext();
    const { titleIsInvalid } = useValidationResultContext();

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
                className: props.className,
                style: {
                    width: "100%",
                },
            }}
        >
            <StyledInput
                value={editModeContext.newState.title} //
                placeholder="Task title"
                onChange={(e) => updateTitle(e.target.value as string)}
                componentThemeID={titleIsInvalid ? "ERROR" : "MUI"}
                error={titleIsInvalid}
                sx={{
                    width: "100%",
                    input: {
                        padding: props.small ? "4px 16px" : "10px 16px",
                        width: "100%",
                        fontSize: "16px",
                    },
                }}
            />
        </WrapperWithWitdthIndicator>
    );
};

export default EditTaskTitleInput;
