// Tools
import { useAddNewTaskContext } from "../hooks/useAddNewTaskContext";
import { LOCALIZATION_RESTRICTIONS } from "landing_page/ToDoList/2023/validators/length_restrictions";
// Types
import type { FunctionComponent } from "react";
// Other components
import LocalizationInput from "landing_page/ToDoList/2023/atoms/modifiers/LocalizationInput";
import WrapperWithWitdthIndicator from "components/atoms/forms/LengthIndicator/WithWrapper";

const TaskLocalizationInput: FunctionComponent<{ id: string; isInvalid: boolean }> = (props) => {
    const { newTaskBody, updateNewTaskBody } = useAddNewTaskContext();

    function updateLocalization(val: string | null) {
        updateNewTaskBody("localization", val);
    }

    return (
        <WrapperWithWitdthIndicator
            wrapperProps={{
                id: props.id,
            }}
            lengthIndicator={{
                currentLength: newTaskBody.localization?.length ?? 0, //
                max: LOCALIZATION_RESTRICTIONS.max,
                min: LOCALIZATION_RESTRICTIONS.min,
                optional: true,
                width: "62px",
            }}
        >
            <LocalizationInput
                value={newTaskBody.localization ?? ""} //
                placeholder="Localization (optional)"
                updateValue={(val) => updateLocalization(val === "" ? null : val)}
                error={props.isInvalid}
            />
        </WrapperWithWitdthIndicator>
    );
};

export default TaskLocalizationInput;
