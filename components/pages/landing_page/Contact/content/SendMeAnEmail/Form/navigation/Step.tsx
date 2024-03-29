// Tools
import { styled, alpha } from "@mui/material";
// Types
import type { FunctionComponent } from "react";
// Material UI Icons
import Check from "@mui/icons-material/Check";
// Styled components
const StyledStep = styled("div")(({ theme }) => ({
    display: "flex",
    userSelect: "none",
    alignItems: "center",
    fontSize: "18px",
    cursor: "pointer",
    position: "relative",
    "span.index": {
        marginRight: "8px",
        color: "#fff",
        fontWeight: 500,
        width: "32px",
        height: "32px",
        fontSize: "20px",
        position: "relative",
        background:
            theme.palette.mode === "light" //
                ? alpha(theme.palette.text.primary, 0.7)
                : alpha(theme.palette.text.primary, 0.2),
        borderRadius: "10px 4px 10px 4px",
        zIndex: 1,
        overflow: "hidden",
        "&::before": {
            zIndex: 1,
            borderRadius: "10px 4px 10px 4px",
            content: "''",
            position: "absolute",
            top: "0%",
            left: "0",
            background: theme.palette.primary.main,
            width: "32px",
            height: "32px",
            transition: "transform .3s",
            transform: "translateY(110%)",
        },
        "span.content": {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            zIndex: 1,
            transition: "opacity .3s",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            svg: {
                fontSize: "24px",
            },
        },
    },
    "&.active": {
        cursor: "default",
        "span.index::before": {
            transform: "translateY(0)",
        },
    },
    "&.blocked": {
        cursor: "default",
    },
    "&.completed": {
        "span.index": {
            background: theme.palette.success.main,
        },
        "span.index span.content.incomplete": {
            opacity: 0,
        },
        "span.index span.content.complete": {
            opacity: 1,
        },
    },
    "&.incompleted": {
        "span.index span.content.incomplete": {
            opacity: 1,
        },
        "span.index span.content.complete": {
            opacity: 0,
        },
    },
    "@media (max-width:700px)": {
        fontSize: "16px",
    },
}));

interface StepProps {
    index: number;
    label: string;
    active: boolean;
    blocked: boolean;
    completed: boolean;
    onClick: () => void;
}

const Step: FunctionComponent<StepProps> = (props) => {
    return (
        <StyledStep
            role="button"
            className={[
                `${props.active ? "active" : ""}`, //
                `${props.blocked ? "blocked" : ""}`,
                `${props.completed ? "completed" : "incompleted"}`,
                "single-nagivation-step",
            ].join(" ")}
            onClick={() => {
                if (props.active || props.blocked) return;
                props.onClick();
            }}
        >
            <span className="index">
                <span className="content incomplete">{props.index}</span>
                <span className="content complete">
                    <Check />
                </span>
            </span>
            <span>{props.label}</span>
        </StyledStep>
    );
};

export default Step;
