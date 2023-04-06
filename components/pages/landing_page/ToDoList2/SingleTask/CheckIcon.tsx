// Tools
import { CLASSES } from "../css_references";
import { styled, alpha } from "@mui/material";
// Types
import type { FunctionComponent } from "react";
// Material UI Components
import CheckRounded from "@mui/icons-material/CheckRounded";
// Material UI Components
import Tooltip from "@mui/material/Tooltip";
import { useSingleTaskContext } from "./hooks/useSingleTaskContext";
// Styled components
const CheckIconBase = styled("button")(({ theme }) => ({
    border: "2px solid",
    width: "46px",
    height: "46px",
    ...theme.mixins.flex_center,
    borderRadius: "5px",
    background: alpha("#000", 0.4),
    color: alpha("#fff", 0.4),
    cursor: "pointer",
    svg: {
        fontSize: "34px",
        opacity: 0,
        transition: "opacity .3s",
    },
    transition: "all .3s",
    "&:focus, &:hover": {
        outline: "none",
        color: alpha("#fff", 0.6),
        background: alpha("#fff", 0.1),
    },
    position: "relative",
}));

const CheckIcon: FunctionComponent = () => {
    const { data, actions } = useSingleTaskContext();
    const { isCompleted } = data;

    return (
        <div className={CLASSES.SINGLE_TASK.CHECK_ICON} style={{ marginRight: "12px" }}>
            <Tooltip title={`Mark as ${isCompleted ? "in progress" : "completed"}`} placement="top">
                <CheckIconBase
                    onClick={actions.toggleCompletion} //
                    className={isCompleted ? "checked" : ""}
                >
                    <CheckRounded />
                </CheckIconBase>
            </Tooltip>
        </div>
    );
};

export default CheckIcon;
