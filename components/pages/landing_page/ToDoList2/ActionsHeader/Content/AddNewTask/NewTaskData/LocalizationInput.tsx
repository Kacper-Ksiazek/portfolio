// Tools
import { useAddNewTaskContext } from "../hooks/useAddNewTaskContext";
// Types
import type { FunctionComponent } from "react";
// Other components
import WrapperWithWitdthIndicator from "./WrapperWithLengthIndicator";
import LocalizationInput from "landing_page/ToDoList2/atoms/modifiers/LocalizationInput";

const TaskTitleInput: FunctionComponent<{ id: string }> = ({ id }) => {
    const { newTaskBody, updateNewTaskBody } = useAddNewTaskContext();

    function updateLocalization(val: string | null) {
        updateNewTaskBody("localization", val);
    }

    return (
        <WrapperWithWitdthIndicator
            id={id}
            lengthIndicator={{
                currentLength: newTaskBody.localization?.length ?? 0, //
                max: 32,
                width: "46px",
            }}
        >
            <LocalizationInput
                value={newTaskBody.localization} //
                placeholder="Localization"
                updateValue={(val) => updateLocalization(val)}
            />
        </WrapperWithWitdthIndicator>
    );
};

export default TaskTitleInput;
