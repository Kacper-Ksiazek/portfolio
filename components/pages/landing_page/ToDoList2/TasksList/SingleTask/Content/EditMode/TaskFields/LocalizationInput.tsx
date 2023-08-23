// Tools
import { LOCALIZATION_RESTRICTIONS } from "landing_page/ToDoList2/validators/length_restrictions";
import { useEditModeContext } from "landing_page/ToDoList2/TasksList/SingleTask/hooks/useEditModeContext";
// Types
import type { FunctionComponent } from "react";
// Other components
import WrapperWithWitdthIndicator from "components/atoms/forms/LengthIndicator/WithWrapper";
// Styled components
import LocalizationInput from "landing_page/ToDoList2/atoms/modifiers/LocalizationInput";

const EditTaskDueTimePickerInput: FunctionComponent<{ className?: string; isInvalid?: boolean }> = (props) => {
    const editModeContext = useEditModeContext();

    function updateLocalization(val: string | null) {
        editModeContext.updateNewState({ localization: val });
    }

    return (
        <WrapperWithWitdthIndicator
            lengthIndicator={{
                currentLength: editModeContext.newState.localization?.length ?? 0,
                max: LOCALIZATION_RESTRICTIONS.max,
                min: LOCALIZATION_RESTRICTIONS.min,
                width: "62px",
            }}
            wrapperProps={{
                className: props.className,
                sx: {
                    justifyContent: "flex-start",
                    width: "100%",
                    "&>div": {
                        flexGrow: `0 !important`,
                    },
                },
            }}
        >
            <LocalizationInput
                value={editModeContext.newState.localization ?? ""} //
                placeholder="Localization"
                updateValue={(val) => updateLocalization(val === "" ? null : val)}
                error={props.isInvalid}
                small
            />
        </WrapperWithWitdthIndicator>
    );
};

export default EditTaskDueTimePickerInput;
