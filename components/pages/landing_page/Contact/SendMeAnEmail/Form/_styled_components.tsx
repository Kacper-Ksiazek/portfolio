// Tools
import { styled } from "@mui/system";
import fadeFromLeft from "@/components/keyframes/intro/fadeFromLeft";
import fadeToBottom from "@/components/keyframes/outro/fadeToBottom";
// Styled components

export const FormWrapper = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    flexGrow: 1,
    height: "100%",
    "&.outro-animation": {
        animation: `${fadeToBottom} .3s linear both`,
    },
    "&>button": {
        animation: `${fadeFromLeft} .2s .3s linear both`,
    },
    ".MuiFormControl-root": {
        "&:not(&:nth-of-type(1))": {
            marginTop: "16px",
        },
    },
}));

export const StageWrapper = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    flexGrow: "1",
    marginBottom: "10px",
}));
