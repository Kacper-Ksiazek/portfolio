// Tools
import { useMemo } from "react";
import { CLASSES } from "../css_references";
import { styled, alpha } from "@mui/material";
// Types
import type { FunctionComponent } from "react";
// Material UI Icons
import CheckRounded from "@mui/icons-material/CheckRounded";
import ModeEditOutlineOutlined from "@mui/icons-material/ModeEditOutlineOutlined";
// Material UI Components
import Tooltip from "@mui/material/Tooltip";
// Styled components
const CompletionButtonBase = styled("button")(({ theme }) => ({
    border: "2px solid",
    width: "46px",
    height: "46px",
    ...theme.mixins.flex_center,
    borderRadius: "5px",
    background: alpha("#000", 0.4),
    color: alpha("#fff", 0.4),
    position: "relative",
    transition: "all .3s",
    svg: {
        fontSize: "34px",
        opacity: 0,
        transition: "opacity .3s",
        ...theme.mixins.absolute_center,
    },
    "&:not(&.in-edit-mode)": {
        cursor: "pointer",
        "&:focus, &:hover": {
            outline: "none",
            color: alpha("#fff", 0.6),
            background: alpha("#fff", 0.1),
        },
    },
    "&.in-edit-mode": {
        "svg.check-icon": {
            opacity: "0 !important",
        },
        "svg.edit-mode-icon": {
            opacity: "1 !important",
            transition: "opacity .3s .3s",
        },
    },
}));

interface CompletionButtonProps {
    isCompleted: boolean;
    isInEditMode: boolean;

    toggleCompletion: () => void;
}

const CompletionButton: FunctionComponent<CompletionButtonProps> = (props) => {
    const { isCompleted, isInEditMode } = props;

    const tooltipTitle = useMemo<string>(() => {
        if (isInEditMode) return "Edit mode is active";
        return `Mark as ${isCompleted ? "in progress" : "completed"}`;
    }, [isCompleted, isInEditMode]);

    return (
        <div className={CLASSES.SINGLE_TASK.CHECK_ICON} style={{ marginRight: "12px" }}>
            <Tooltip
                placement="top" //
                title={tooltipTitle}
            >
                <span>
                    <CompletionButtonBase
                        onClick={props.toggleCompletion} //
                        className={[
                            isCompleted ? "checked" : "", //
                            isInEditMode ? "in-edit-mode" : "",
                        ].join(" ")}
                        disabled={isInEditMode}
                    >
                        <CheckRounded className="check-icon" />
                        <ModeEditOutlineOutlined className="edit-mode-icon" />
                    </CompletionButtonBase>
                </span>
            </Tooltip>
        </div>
    );
};

export default CompletionButton;
