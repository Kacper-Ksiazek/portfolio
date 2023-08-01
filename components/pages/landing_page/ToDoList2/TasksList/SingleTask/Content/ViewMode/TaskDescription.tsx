// Tools
import { styled } from "@mui/material";
import { CSS_REFERENCES } from "../../css_references";
// Types
import type { FunctionComponent } from "react";
// Styled components
export const TaskDescriptionBase = styled("div")(({ theme }) => ({
    width: "100%",
    display: "flex",
    h4: {
        position: "relative",
        cursor: "default",
        userSelect: "none",
        transition: "color .3s",
        minHeight: "28px",
        fontSize: "20px",
        fontWeight: "400",
        margin: 0,
        "&::before": {
            content: "''",
            transform: "scaleX(0)",
            position: "absolute",
            top: "40%",
            width: "100%",
            height: "4px",
            background: theme.palette.primary.main,
            left: 0,
            transition: "transform .3s",
            transformOrigin: "left",
        },
    },
}));

interface TaskDescriptionProps {
    description: string;
}

const TaskDescription: FunctionComponent<TaskDescriptionProps> = (props) => {
    return (
        <TaskDescriptionBase className={CSS_REFERENCES.VIEW_MODE.DESCRIPTION}>
            <h4>
                <span>{props.description}</span>
            </h4>
        </TaskDescriptionBase>
    );
};

export default TaskDescription;
