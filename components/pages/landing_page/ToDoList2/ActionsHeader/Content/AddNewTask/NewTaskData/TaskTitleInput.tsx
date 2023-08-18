// Tools
import { TITLE_RESTRICTIONS } from "../validators/length_restrictions";
import { useAddNewTaskContext } from "../hooks/useAddNewTaskContext";
// Types
import type { FunctionComponent } from "react";
// Styled components
import StyledInput from "@/components/atoms/forms/StyledInput";
import WrapperWithWitdthIndicator from "./_WrapperWithLengthIndicator";

const TaskTitleInput: FunctionComponent<{ id: string; isInvalid: boolean }> = (props) => {
    const { newTaskBody, updateNewTaskBody } = useAddNewTaskContext();

    const titleLength: number = newTaskBody.title.length;

    function updateTitle(val: string) {
        updateNewTaskBody("title", val);
    }

    return (
        <WrapperWithWitdthIndicator
            id={props.id} //
            lengthIndicator={{
                currentLength: titleLength, //
                min: TITLE_RESTRICTIONS.min,
                max: TITLE_RESTRICTIONS.max,
                width: "50px",
            }}
        >
            <StyledInput
                placeholder="What do you have to do?" //
                value={newTaskBody.title}
                onChange={(e) => updateTitle(e.target.value)}
                error={titleLength > 1 && props.isInvalid}
                sx={{
                    input: {
                        padding: "8px 16px",
                    },
                }}
            />
        </WrapperWithWitdthIndicator>
    );
};

export default TaskTitleInput;
