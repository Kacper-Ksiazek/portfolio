// Tools
import { styled } from "@mui/material";
import { CLASSES } from "../../css_references";
import { useLabelsContext } from "../../hooks/useLabelsContext";
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
    boxSizing: "border-box",
    "&:not(&:nth-of-type(1))": {
        marginLeft: "8px",
    },
}));

interface PropsWithLabel {
    label: string;
}
interface PropsIndicatingUrgency {
    indicateUrgency: true;
}

function isUrgencyIndicating(props: unknown): props is PropsIndicatingUrgency {
    return typeof props === "object" && props !== null && ("indicateUrgency" as keyof PropsIndicatingUrgency) in props;
}

const Label: FunctionComponent<PropsWithLabel | PropsIndicatingUrgency> = (props) => {
    const { getCorrespondingColor } = useLabelsContext();
    const className = CLASSES.SINGLE_TASK.LABEL;

    if (isUrgencyIndicating(props)) {
        return (
            <LabelBase
                sx={(theme) => ({
                    color: "#fff",
                    background: theme.palette.primary.main,
                    borderColor: "transparent",
                })}
                className={className}
            >
                URGENT
            </LabelBase>
        );
    }

    const color = getCorrespondingColor(props.label);

    return (
        <LabelBase
            sx={{
                color,
                borderColor: color,
            }}
            className={className}
        >
            {props.label}
        </LabelBase>
    );
};

export default Label;
