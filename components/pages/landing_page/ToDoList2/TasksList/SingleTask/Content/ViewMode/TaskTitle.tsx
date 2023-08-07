// Tools
import { styled } from "@mui/material";
import { VIEW_MODE_CSS_REFERENCES } from "../../css_references";
// Types
import type { FunctionComponent } from "react";
// Styled components
export const TaskTitleBase = styled("div")(({ theme }) => ({
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

interface TaskTitleProps {
    title: string;
}

const TaskTitle: FunctionComponent<TaskTitleProps> = (props) => {
    return (
        <TaskTitleBase className={VIEW_MODE_CSS_REFERENCES.TITLE}>
            <h4>
                <span>{props.title}</span>
            </h4>
        </TaskTitleBase>
    );
};

export default TaskTitle;
