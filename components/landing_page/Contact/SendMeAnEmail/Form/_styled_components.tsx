// Tools
import { styled } from "@mui/system";
import fadeFromLeft from "@/components/_keyframes/fadeFromLeft";
import fadeToBottom from "@/components/_keyframes/fadeToBottom";
// Styled components
export const Header = styled("h4")(({ theme }) => ({
    fontSize: "32px",
    margin: "0 0 10px 0",
    fontFamily: "Montserrat Alternates",
    fontWeight: 700,
    userSelect: "none",
    animation: `${fadeFromLeft} .2s both linear .1s`,
}));

export const FormWrapper = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    flexGrow: 1,
    "&.outro-animation": {
        animation: `${fadeToBottom} .3s linear both`,
    },
    "&>button": {
        animation: `${fadeFromLeft} .2s .3s linear both`,
    },
}));

export const StageWrapper = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    flexGrow: "1",
    marginBottom: "10px",
}));
