// Tools
import { styled } from "@mui/material";
import { CSS_REFERENCES } from "../css_references";
// Types
import type { FunctionComponent } from "react";

const BackgroundBase = styled("span")(({ theme }) => ({
    ...theme.mixins.absolute_full,
    zIndex: -1,
    transform: "scaleX(0)",
    transition: "transform .3s",
    transformOrigin: "left",
    background: theme.palette.background.lightAnimationBar,
    "&.active": {
        transform: "scaleX(1)",
        "&:not(&.in-edit-mode)": {
            background: theme.palette.secondary.main,
        },
    },
}));

interface BackgroundProps {
    isUrgent: boolean;
    isInEditMode: boolean;
}

const Background: FunctionComponent<BackgroundProps> = (props) => {
    return (
        <BackgroundBase
            className={[
                props.isUrgent ? "active" : "", //
                props.isInEditMode ? "in-edit-mode" : "",
                CSS_REFERENCES.SINGLE_TASK.BACKGROUND,
            ].join(" ")}
        />
    );
};

export default Background;
