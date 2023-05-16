// Types
import type { FunctionComponent } from "react";
// Styled components
import { StyledInput } from "@/components/atoms/forms";

interface TaskTitleInputProps {
    value: string;
    setValue: (val: string) => void;
}

const TaskTitleInput: FunctionComponent<TaskTitleInputProps> = (props) => {
    return (
        <StyledInput
            placeholder="What do you have to do?"
            sx={{
                width: "100%", //
                ".MuiOutlinedInput-root": {
                    height: "42px",
                },
                input: { padding: "8px 12px" },
            }}
            value={props.value}
            onChange={(e) => props.setValue(e.target.value)}
        />
    );
};

export default TaskTitleInput;
