// Tools
import { LOCALIZATION_RESTRICTIONS } from "landing_page/ToDoList2/validators/length_restrictions";
import { useEditModeContext, useValidationResultContext } from "landing_page/ToDoList2/TasksList/SingleTask/hooks";
// Types
import type { FunctionComponent } from "react";
// Other components
import WrapperWithWitdthIndicator from "components/atoms/forms/LengthIndicator/WithWrapper";
// Styled components
import LocalizationInput from "landing_page/ToDoList2/atoms/modifiers/LocalizationInput";

interface LocalizationInputProps {
    small?: boolean;
    className?: string;
}

const EditTaskDueTimePickerInput: FunctionComponent<LocalizationInputProps> = (props) => {
    const editModeContext = useEditModeContext();
    const { localizationIsInvalid } = useValidationResultContext();

    function updateLocalization(val: string | null) {
        editModeContext.updateNewState({ localization: val });
    }

    return (
        <WrapperWithWitdthIndicator
            lengthIndicator={{
                currentLength: editModeContext.newState.localization?.length ?? 0,
                max: LOCALIZATION_RESTRICTIONS.max,
                min: LOCALIZATION_RESTRICTIONS.min,
                optional: true,
                width: "60px",
            }}
            wrapperProps={{
                className: props.className,
                sx: {
                    justifyContent: "flex-start",
                },
            }}
        >
            <LocalizationInput
                value={editModeContext.newState.localization ?? ""} //
                placeholder="Localization (optional)"
                updateValue={(val) => updateLocalization(val === "" ? null : val)}
                error={localizationIsInvalid}
                small={props.small}
            />
        </WrapperWithWitdthIndicator>
    );
};

export default EditTaskDueTimePickerInput;
