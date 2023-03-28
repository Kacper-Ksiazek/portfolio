// Tools
import { styled } from "@mui/material";
import { useLabelsContext } from "../hooks/useLabelsContext";
// Types
import type { FunctionComponent } from "react";
// Styled components
const LabelBase = styled("span")(({ theme }) => ({
    border: "2px solid",
    fontSize: "14px",
    padding: "2px 6px",
    borderRadius: "3px",
    userSelect: "none",
    display: "flex",
    alignItems: "center",
}));

interface LabelProps {
    label: string;
}

const Label: FunctionComponent<LabelProps> = (props) => {
    const { getCorrespondingColor } = useLabelsContext();
    const color = getCorrespondingColor(props.label);

    return (
        <LabelBase
            sx={{
                color,
                borderColor: color,
            }}
            className="single-task-label"
        >
            {props.label}
        </LabelBase>
    );
};

export default Label;
