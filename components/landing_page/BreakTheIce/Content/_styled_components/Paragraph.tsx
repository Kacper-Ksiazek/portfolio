// Tools
import { styled } from "@mui/system";
import fadeFromLeft from "@/components/_keyframes/fadeFromLeft";
// Styled components
export default styled("p", {
    shouldForwardProp: (prop: string) => !["animationDelay"].includes(prop),
})<{ animationDelay: number }>(({ theme, ...props }) => ({
    fontSize: "18px",
    margin: "20px 0 0 0",
    strong: {
        color: theme.palette.secondary.main,
    },
    animation: `${fadeFromLeft} .3s ${props.animationDelay}s both`,
    "&:nth-of-type(1)": {
        margin: "0",
    },
}));
