// Tools
import { styled } from "@mui/material";
import { CSS_REFERENCES } from "./css_references";
// Types
import type { Theme } from "@mui/material";
import type { FunctionComponent } from "react";

function getBackgroundColor(isUrgent: boolean, isInEditMode: boolean, theme: Theme): string {
    if (isUrgent && !isInEditMode) return theme.palette.secondary.main;
    else if (theme.palette.mode === "dark") return "#000"; // If the theme is dark, the background should be black
    return theme.palette.background.MUIFormElementsBackground; // If the theme is light, the background should be corresponding to MUI elements
}

const BackgroundBase = styled("span", {
    shouldForwardProp: (prop: string): boolean => {
        return !(["isInEditMode", "isUrgent"] as (keyof BackgroundProps)[]).includes(prop as any);
    },
})<BackgroundProps>(({ theme, ...props }) => ({
    ...theme.mixins.absolute_full,
    zIndex: -1,
    transition: `transform .24s linear, background .3s`,
    transformOrigin: "left",
    background: getBackgroundColor(props.isUrgent, props.isInEditMode, theme),
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
