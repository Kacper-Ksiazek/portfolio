// Tools
import { useAddNewTaskContext } from "../hooks/useAddNewTaskContext";
import { LOCALIZATION_RESTRICTIONS } from "../validators/length_restrictions";
// Types
import type { FunctionComponent } from "react";
// Other components
import WrapperWithWitdthIndicator from "./_WrapperWithLengthIndicator";
import LocalizationInput from "landing_page/ToDoList2/atoms/modifiers/LocalizationInput";

const TaskLocalizationInput: FunctionComponent<{ id: string; isInvalid: boolean }> = (props) => {
    const { newTaskBody, updateNewTaskBody } = useAddNewTaskContext();

    function updateLocalization(val: string | null) {
        updateNewTaskBody("localization", val);
    }

    return (
        <WrapperWithWitdthIndicator
            id={props.id}
            lengthIndicator={{
                currentLength: newTaskBody.localization?.length ?? 0, //
                max: LOCALIZATION_RESTRICTIONS.max,
                min: LOCALIZATION_RESTRICTIONS.min,
                width: "58px",
            }}
        >
            <LocalizationInput
                value={newTaskBody.localization ?? ""} //
                placeholder="Localization"
                updateValue={(val) => updateLocalization(val)}
                error={props.isInvalid}
            />
        </WrapperWithWitdthIndicator>
    );
};

export default TaskLocalizationInput;
