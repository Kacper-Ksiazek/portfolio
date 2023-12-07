// Tools
import { useAddNewTaskContext } from "../hooks/useAddNewTaskContext";
import { TITLE_RESTRICTIONS } from "landing_page/ToDoList/2023/validators/length_restrictions";
// Types
import type { FunctionComponent } from "react";
// Other components
import LengthIndicatorWrapper from "./_LengthIndicatorWrapper";
// Styled components
import StyledInput from "@/components/atoms/forms/StyledInput";

const TaskTitleInput: FunctionComponent<{ id: string; isInvalid: boolean }> = (props) => {
    const { newTaskBody, updateNewTaskBody } = useAddNewTaskContext();

    const titleLength: number = newTaskBody.title.length;

    function updateTitle(val: string) {
        updateNewTaskBody("title", val);
    }

    return (
        <LengthIndicatorWrapper
            id={props.id} //
            width="50px"
            length={titleLength}
            restrictions={TITLE_RESTRICTIONS}
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
        </LengthIndicatorWrapper>
    );
};

export default TaskTitleInput;
