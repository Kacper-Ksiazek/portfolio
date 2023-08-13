// Tools
import { useAddNewTaskContext } from "../hooks/useAddNewTaskContext";
// Types
import type { FunctionComponent } from "react";
// Styled components
import StyledInput from "@/components/atoms/forms/StyledInput";
import WrapperWithWitdthIndicator from "./WrapperWithLengthIndicator";
import OptionalPropertIndicator from "@/components/atoms/forms/OptionalPropertyIndicator";

const TaskTitleInput: FunctionComponent<{ id: string }> = ({ id }) => {
    const { newTaskBody, updateNewTaskBody } = useAddNewTaskContext();

    function updateDescription(val: string) {
        updateNewTaskBody("description", val);
    }

    return (
        <WrapperWithWitdthIndicator
            id={id}
            lengthIndicator={{
                currentLength: newTaskBody.description?.length ?? 0, //
                max: 256,
                width: "62px",
            }}
        >
            <OptionalPropertIndicator />

            <StyledInput
                placeholder="Provide more context or instructions for this task" //
                value={newTaskBody.description}
                onChange={(e) => updateDescription(e.target.value)}
                sx={{
                    input: {
                        paddingLeft: "16px !important",
                    },
                }}
            />
        </WrapperWithWitdthIndicator>
    );
};

export default TaskTitleInput;
