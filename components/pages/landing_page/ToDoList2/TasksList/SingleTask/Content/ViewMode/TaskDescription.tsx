// Tools
import { styled } from "@mui/material";
// Types
import type { FunctionComponent } from "react";
// Styled components
const TaskDescriptionBase = styled("p")(({ theme }) => ({
    margin: "0", //
    opacity: 0.8,
    order: 1,
    cursor: "default",
    transition: "color .3s",
    width: "100%",
}));

const TaskDescription: FunctionComponent<{ description: string | null }> = (props) => {
    if (props.description === null) return <></>;

    return (
        <TaskDescriptionBase>
            <span>{props.description}</span>
        </TaskDescriptionBase>
    );
};

export default TaskDescription;
