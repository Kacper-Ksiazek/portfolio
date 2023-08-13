// Tools
import { useAddNewTaskContext } from "../hooks/useAddNewTaskContext";
// Types
import type { FunctionComponent } from "react";
// Styled components
import StyledInput from "@/components/atoms/forms/StyledInput";
import WrapperWithWitdthIndicator from "./_WrapperWithLengthIndicator";

const TaskTitleInput: FunctionComponent<{ id: string }> = ({ id }) => {
    const { newTaskBody, updateNewTaskBody } = useAddNewTaskContext();

    function updateTitle(val: string) {
        updateNewTaskBody("title", val);
    }

    return (
        <WrapperWithWitdthIndicator
            id={id} //
            lengthIndicator={{
                currentLength: newTaskBody.title.length, //
                max: 64,
                width: "46px",
            }}
        >
            <StyledInput
                placeholder="What do you have to do?" //
                value={newTaskBody.title}
                onChange={(e) => updateTitle(e.target.value)}
            />
        </WrapperWithWitdthIndicator>
    );
};

export default TaskTitleInput;
