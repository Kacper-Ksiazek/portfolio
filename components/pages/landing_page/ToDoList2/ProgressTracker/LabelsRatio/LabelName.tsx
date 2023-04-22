// Tools
import { alpha, styled } from "@mui/material";
// Types
import type { FunctionComponent, ReactNode } from "react";
// Styled Components
const LabelNameBase = styled("span", {
    shouldForwardProp: (prop: string) => !["strikeThroughColor"].includes(prop),
})<{ strikeThroughColor?: string }>(({ theme, ...props }) => ({
    userSelect: "none",
    marginTop: "2px",
    fontSize: "14px",
    color: alpha("#fff", 0.8),
    position: "relative",
    transition: "color .3s",
    strong: {
        transition: "color .2s",
    },

    "&::after": {
        content: "''",
        position: "absolute",
        top: "50%",
        width: "100%",
        transformOrigin: "left",
        transform: "scaleX(0) translateY(-50%)",
        height: "2px",
        background: props.strikeThroughColor ?? theme.palette.primary.main,
        left: 0,
        transition: "transform.3s",
    },
    "&.completed": {
        color: alpha("#fff", 0.3),
        strong: {
            color: alpha("#fff", 0.3),
        },
        "&::after": {
            transform: "scaleX(1) translateY(-50%)",
        },
    },
}));

interface LabelNameProps {
    label: ReactNode;
    isLabelCompleted: boolean;
    strikeThroughColor?: string;
}
const LabelName: FunctionComponent<LabelNameProps> = (props) => {
    return (
        <LabelNameBase
            strikeThroughColor={props.strikeThroughColor} //
            className={props.isLabelCompleted ? "completed" : ""}
        >
            {props.label}
            {/*  */}
        </LabelNameBase>
    );
};

export default LabelName;
