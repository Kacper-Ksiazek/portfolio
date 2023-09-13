// Tools
import { styled, alpha } from "@mui/material";

interface OverflowScrollDivWrapperProps {
    maxHeightWhileScrollable: string;
    scrollabilityThreshold?: `${number}px`;
}

function shouldForwardProp(prop: string): boolean {
    return !(
        [
            "maxHeightWhileScrollable", //
            "scrollabilityThreshold",
        ] as (keyof OverflowScrollDivWrapperProps)[]
    ).includes(prop as any);
}

export const OverflowScrollDivWrapper = styled("div", {
    shouldForwardProp,
})<OverflowScrollDivWrapperProps>(({ theme, ...props }) => ({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    flexGrow: 1,
    boxSizing: "border-box",
    [`@media (min-width:${props.scrollabilityThreshold ?? "1001px"})`]: {
        height: props.maxHeightWhileScrollable,
        paddingRight: "10px",
        overflowY: "scroll",
        overflowX: "hidden",
        "&::-webkit-scrollbar": { width: "8px" },
        "&::-webkit-scrollbar-track": { boxShadow: `inset 0 0 2px ${alpha(theme.palette.primary.main, 0.3)}` },
        "&::-webkit-scrollbar-thumb": {
            backgroundColor: theme.palette.primary.main,
            borderRadius: "2px",
        },
    },
}));
