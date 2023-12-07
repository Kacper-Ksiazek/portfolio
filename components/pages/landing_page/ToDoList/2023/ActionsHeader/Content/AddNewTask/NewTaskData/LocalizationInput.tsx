// Tools
import { useAddNewTaskContext } from "../hooks/useAddNewTaskContext";
import { LOCALIZATION_RESTRICTIONS } from "landing_page/ToDoList/2023/validators/length_restrictions";
// Types
import type { FunctionComponent } from "react";
// Other components
import LengthIndicatorWrapper from "./_LengthIndicatorWrapper";
import LocalizationInput from "landing_page/ToDoList/2023/atoms/modifiers/LocalizationInput";

const TaskLocalizationInput: FunctionComponent<{ id: string; isInvalid: boolean }> = (props) => {
    const { newTaskBody, updateNewTaskBody } = useAddNewTaskContext();

    function updateLocalization(val: string | null) {
        updateNewTaskBody("localization", val);
    }

    return (
        <LengthIndicatorWrapper
            id={props.id} //
            width="62px"
            restrictions={LOCALIZATION_RESTRICTIONS}
            length={newTaskBody.localization?.length ?? 0}
        >
            <LocalizationInput
                value={newTaskBody.localization ?? ""} //
                placeholder="Localization (optional)"
                updateValue={(val) => updateLocalization(val === "" ? null : val)}
                error={props.isInvalid}
            />
        </LengthIndicatorWrapper>
    );
};

export default TaskLocalizationInput;
