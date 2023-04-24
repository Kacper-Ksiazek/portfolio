// Tools
import { alpha, styled } from "@mui/material";

export const SingleLabelWrapper = styled("div", {
    shouldForwardProp: (prop: string) => !["width"].includes(prop),
})<{ width: `${string}%` }>(({ theme, ...props }) => ({
    width: props.width,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    "&:not(&:nth-of-type(1))": {
        marginLeft: "6px",
    },
}));

const _InformationAboutLabel = styled("span")(({ theme }) => ({
    userSelect: "none",
    fontSize: "14px",
    color: alpha("#fff", 0.8),
    position: "relative",
    transition: "color .3s",
    strong: {
        transition: "color .2s",
    },
}));

interface CompletionTrackerProps {
    strikeThroughColor?: string;
    isCompleted: boolean;
}
function shouldForwardProp(prop: string): boolean {
    return !(["strikeThroughColor", "isCompleted"] as (keyof CompletionTrackerProps)[]).includes(prop as any);
}

export const CompletionTracker = styled(_InformationAboutLabel, { shouldForwardProp })<CompletionTrackerProps>(({ theme, ...props }) => ({
    margin: 0,
    "&::after": {
        content: "''",
        position: "absolute",
        top: "50%",
        width: "100%",
        transformOrigin: "left",
        transform: `scaleX(${Number(props.isCompleted)}) translateY(-50%)`,
        height: "2px",
        background: props.strikeThroughColor ?? theme.palette.primary.main,
        left: 0,
        transition: "transform.3s",
    },

    ...(props.isCompleted && {
        color: alpha("#fff", 0.3),
        strong: {
            color: alpha("#fff", 0.3),
        },
    }),
}));

export const LabelName = styled(_InformationAboutLabel)(({ theme }) => ({
    margin: "0 0 2px 0",
}));
