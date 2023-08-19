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
import FancyShape from "./FancyShape";

interface CompletionButtonProps {
    isUrgent: boolean;
    isCompleted: boolean;
    isInEditMode: boolean;
    hasDescription: boolean;

    toggleCompletion: () => void;
}

const CompletionButton: FunctionComponent<CompletionButtonProps> = (props) => {
    const { isCompleted, isInEditMode, isUrgent, hasDescription } = props;

    const tooltipTitle = useMemo<string>(() => {
        if (isInEditMode) return "Edit mode is active";
        return `Mark as ${isCompleted ? "in progress" : "completed"}`;
    }, [isCompleted, isInEditMode]);

    return (
        <div
            className={CSS_REFERENCES.COMPLETION_BUTTON}
            style={{
                marginRight: "12px", //
                alignSelf: "flex-start",
                marginTop: "4px",
            }}
        >
            {(hasDescription || isInEditMode) && (
                <FancyShape
                    urgent={isUrgent} //
                    completed={isCompleted}
                    inEditMode={isInEditMode}
                />
            )}

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
