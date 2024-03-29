// Tools
import { alpha } from "@mui/material";
import { DESCRIPTION_RESTRICTIONS } from "landing_page/ToDoList/2023/validators/length_restrictions";
import { useEditModeContext, useValidationResultContext } from "landing_page/ToDoList/2023/TasksList/SingleTask/hooks";
// Types
import type { FunctionComponent } from "react";
// Other components
import WrapperWithWitdthIndicator from "components/atoms/forms/LengthIndicator/WithWrapper";
// Styled components
import StyledInput from "@/components/atoms/forms/StyledInput";
import OptionalPropertyIndicator from "@/components/atoms/forms/OptionalPropertyIndicator";

interface EditTaskDescriptionInputProps {
    className?: string;
    small?: boolean;
}

const EditTaskDescriptionInput: FunctionComponent<EditTaskDescriptionInputProps> = (props) => {
    const editModeContext = useEditModeContext();
    const { descriptionIsInvalid } = useValidationResultContext();

    function updateDescription(val: string | null) {
        editModeContext.updateNewState({ description: val });
    }

    return (
        <WrapperWithWitdthIndicator
            column={props.small !== true}
            lengthIndicator={{
                currentLength: editModeContext.newState.description?.length ?? 0,
                max: DESCRIPTION_RESTRICTIONS.max,
                min: DESCRIPTION_RESTRICTIONS.min,
                optional: true,
                sx: {
                    width: "66px",
                    color: alpha("#fff", 0.6),
                },
            }}
            wrapperProps={{
                className: props.className,
                style: {
                    width: "100%",
                    marginBottom: "8px",
                },
            }}
        >
            <OptionalPropertyIndicator />

            <StyledInput
                value={editModeContext.newState.description} //
                onChange={(e) => updateDescription(e.target.value === "" ? null : (e.target.value as string))}
                placeholder="Provide more context or instructions for this task (optional)"
                error={descriptionIsInvalid}
                componentThemeID={descriptionIsInvalid ? "ERROR" : "MUI"}
                multiline
                sx={{
                    width: "100%",
                    height: "64px",
                    ".MuiOutlinedInput-root": {
                        padding: "4px 8px 4px 16px !important",
                    },
                    textarea: {
                        padding: "0",
                        width: "100%",
                        fontSize: "16px",
                    },
                }}
            />
        </WrapperWithWitdthIndicator>
    );
};

export default EditTaskDescriptionInput;
