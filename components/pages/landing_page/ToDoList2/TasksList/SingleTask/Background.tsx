// Tools
import { styled } from "@mui/material";
import { CSS_REFERENCES } from "./css_references";
// Types
import type { FunctionComponent } from "react";

const BackgroundBase = styled("span", {
    shouldForwardProp: (prop: string): boolean => {
        return !(["isInEditMode", "isUrgent"] as (keyof BackgroundProps)[]).includes(prop as any);
    },
})<BackgroundProps>(({ theme, ...props }) => ({
    ...theme.mixins.absolute_full,
    zIndex: -1,
    transition: "transform .24s linear",
    transformOrigin: "left",
    background: props.isInEditMode ? "#000" : theme.palette.secondary.main,
    transform: `scaleX(${props.isUrgent || props.isInEditMode ? 1 : 0})`,
}));

interface BackgroundProps {
    isUrgent: boolean;
    isInEditMode: boolean;
}

const Background: FunctionComponent<BackgroundProps> = (props) => {
    return <BackgroundBase {...props} className={CSS_REFERENCES.BACKGROUND} />;
};

export default Background;
