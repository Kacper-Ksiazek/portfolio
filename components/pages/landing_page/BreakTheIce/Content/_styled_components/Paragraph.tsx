// Tools
import { styled, alpha } from "@mui/material";
import { fadeFromLeft } from "@/components/keyframes/intro";
// Styled components
export default styled("p", {
    shouldForwardProp: (prop: string) => !["animationDelay"].includes(prop),
})<{ animationDelay: number }>(({ theme, ...props }) => ({
    fontSize: "18px",
    margin: "20px 0 0 0",
    color: alpha(theme.palette.text.primary, 0.8),
    animation: `${fadeFromLeft} .3s ${props.animationDelay}s both`,
    "&:nth-of-type(1)": {
        margin: "0",
    },
}));
