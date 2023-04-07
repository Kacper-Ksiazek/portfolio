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
    "&.urgency": {
        marginRight: "0px",
        width: 0,
        padding: "2px 0",
        transform: "scaleX(0)",
        transition: "all .3s",
        transformOrigin: "left",
        borderColor: "transparent",
        background: theme.palette.primary.main,
        span: {
            opacity: 0,
            transition: "opacity .3s",
        },
        "&.active": {
            transform: "scaleX(1)",
            width: "auto",
            marginRight: "8px",
            padding: "2px 6px",
            transition: "all .3s",
            span: {
                opacity: 1,
                transition: "opacity .3s .3s",
            },
        },
    },
}));

interface PropsWithLabel {
    label: string;
}
interface PropsIndicatingUrgency {
    indicateUrgency: boolean;
}

function isUrgencyIndicating(props: unknown): props is PropsIndicatingUrgency {
    return typeof props === "object" && props !== null && ("indicateUrgency" as keyof PropsIndicatingUrgency) in props;
}

const Label: FunctionComponent<PropsWithLabel | PropsIndicatingUrgency> = (props) => {
    const { getCorrespondingColor } = useLabelsContext();
    const className = CLASSES.SINGLE_TASK.LABEL;

    if (isUrgencyIndicating(props)) {
        return (
            <LabelBase className={`${className} urgency ${props.indicateUrgency ? "active" : ""}`}>
                <span>URGENT</span>
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
