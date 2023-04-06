// Tools
import { styled } from "@mui/material";
import { CLASSES } from "../css_references";
// Types
import type { FunctionComponent } from "react";

const BackgroundBase = styled("span")(({ theme }) => ({
    ...theme.mixins.absolute_full,
    background: theme.palette.secondary.main,
    zIndex: -1,
    transform: "scaleX(0)",
    transition: "transform .3s",
    transformOrigin: "left",
    "&.active": {
        transform: "scaleX(1)",
    },
}));

interface BackgroundProps {
    isUrgent: boolean;
}

const Background: FunctionComponent<BackgroundProps> = (props) => {
    return (
        <BackgroundBase
            className={[
                props.isUrgent ? "active" : "", //
                CLASSES.SINGLE_TASK.BACKGROUND,
            ].join(" ")}
        />
    );
};

export default Background;
