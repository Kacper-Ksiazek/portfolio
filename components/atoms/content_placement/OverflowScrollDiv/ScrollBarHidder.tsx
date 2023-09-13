// Tools
import { styled } from "@mui/material";
import { fadeSimpleOUT } from "@/components/keyframes/outro";
// Styled components
interface ScrollBarHidderProps {
    introAnimationDelay?: number;
    alternativeBackground?: string;
}

function shouldForwardProp(prop: string): boolean {
    return !(
        [
            "alternativeBackground", //
            "introAnimationDelay",
        ] as (keyof ScrollBarHidderProps)[]
    ).includes(prop as any);
}

export default styled("div", { shouldForwardProp })<ScrollBarHidderProps>(({ theme, ...props }) => ({
    position: "absolute",
    top: "0",
    right: 0,
    width: "8px",
    height: "100%",
    animation: `${fadeSimpleOUT} .3s ${props.introAnimationDelay}ms linear both`,
    background: props.alternativeBackground ?? theme.palette.background.lightSectionBackground,
}));
