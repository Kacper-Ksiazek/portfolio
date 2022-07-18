// Tools
import { styled } from "@mui/system";
import fadeFromLeft from "@/components/_keyframes/intro/fadeFromLeft";
// Styled components
export default styled("h4", {
    shouldForwardProp: (prop: string) => !["animationDelay"].includes(prop),
})<{ animationDelay: number }>(({ theme, ...props }) => ({
    fontSize: "20px",
    margin: "20px 0 10px 0",
    fontFamily: "Montserrat Alternates",
    animation: `${fadeFromLeft} .3s ${props.animationDelay}s both`,
}));
