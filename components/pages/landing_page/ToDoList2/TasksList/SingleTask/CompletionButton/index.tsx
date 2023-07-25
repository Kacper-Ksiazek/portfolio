// Tools
import { useMemo } from "react";
import { CSS_REFERENCES } from "../css_references";
// Types
import type { FunctionComponent } from "react";
// Material UI Icons
import CheckRounded from "@mui/icons-material/CheckRounded";
import ModeEditOutlineOutlined from "@mui/icons-material/ModeEditOutlineOutlined";
// Material UI Components
import Tooltip from "@mui/material/Tooltip";
// Styled components
import CompletionButtonBase from "./Base";

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
        <div className={CSS_REFERENCES.CHECK_ICON} style={{ marginRight: "12px" }}>
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
