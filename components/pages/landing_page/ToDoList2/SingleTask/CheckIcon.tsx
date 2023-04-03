// Tools
import { CLASSES } from "../css_references";
import { styled, alpha } from "@mui/material";
// Types
import type { FunctionComponent } from "react";
// Material UI Components
import CheckRounded from "@mui/icons-material/CheckRounded";
// Material UI Components
import Tooltip from "@mui/material/Tooltip";
// Styled components
const CheckIconBase = styled("button")(({ theme }) => ({
    border: "2px solid #fff",
    width: "46px",
    height: "46px",
    ...theme.mixins.flex_center,
    borderRadius: "5px",
    opacity: 0.4,
    background: alpha("#000", 0.4),
    color: "#fff",
    cursor: "pointer",
    svg: {
        fontSize: "34px",
        opacity: 0,
        transition: "opacity .3s",
    },
    transition: "all .3s",
    "&:focus, &:hover": {
        outline: "none",
        opacity: 0.6,
        background: alpha("#fff", 0.2),
    },
    marginRight: "12px",
    position: "relative",
}));
interface CheckIconProps {
    isChecked: boolean;
    onClick: () => void;
}

const CheckIcon: FunctionComponent<CheckIconProps> = (props) => {
    return (
        <Tooltip title={`Mark as ${props.isChecked ? "in progress" : "completed"}`} placement="top">
            <CheckIconBase
                onClick={props.onClick} //
                className={[
                    CLASSES.SINGLE_TASK.CHECK_ICON, //
                    props.isChecked ? "checked" : "",
                ].join(" ")}
            >
                <CheckRounded />
            </CheckIconBase>
        </Tooltip>
    );
};

export default CheckIcon;
