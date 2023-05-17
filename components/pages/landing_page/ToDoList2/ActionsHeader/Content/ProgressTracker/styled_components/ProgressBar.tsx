// Tools
import { scaleFromLeft } from "@/components/keyframes/intro";
import { styled, alpha } from "@mui/material";

interface ProgressBarProps {
    labelColor: string | null;
    completion: `${string}%`;
}

function shouldForwardProp(prop: string): boolean {
    return !(["labelColor", "completion"] as (keyof ProgressBarProps)[]).includes(prop as any);
}

export const ProgressBar = styled("span", { shouldForwardProp })<ProgressBarProps>(({ theme, ...props }) => {
    const background = props.labelColor ?? theme.palette.primary.main;

    return {
        width: "100%",
        background: alpha(background, 0.5),
        borderRadius: "2px",
        position: "relative",
        height: "10px",
        overflow: "hidden",
        "&::after": {
            content: "''",
            background,
            ...theme.mixins.absolute_full,
            transition: "width .3s",
            width: props.completion,
            animation: props.completion === "100.00%" ? "" : `${scaleFromLeft} .5s .2s both`,
        },
    };
});
