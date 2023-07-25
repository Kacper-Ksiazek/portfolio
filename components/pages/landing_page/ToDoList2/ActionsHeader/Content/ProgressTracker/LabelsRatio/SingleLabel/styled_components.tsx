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
    color: alpha("#fff", 0.8),
    position: "relative",
    transition: "color .3s",
    // fontWeight: "300",
    fontSize: "16px",
    strong: {
        transition: "color .2s",
    },
    "@media (max-width:940px)": {
        fontSize: "14px",
    },
    "@media (max-width:700px)": {
        fontSize: "16px",
    },
}));

interface CompletionTrackerProps {
    strikeThroughColor?: string | null;
    isCompleted: boolean;
}
function shouldForwardProp(prop: string): boolean {
    return !(["strikeThroughColor", "isCompleted"] as (keyof CompletionTrackerProps)[]).includes(prop as any);
}

export const CompletionTracker = styled(_InformationAboutLabel, { shouldForwardProp })<CompletionTrackerProps>(({ theme, ...props }) => ({
    margin: "4px 0 0 0",
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
