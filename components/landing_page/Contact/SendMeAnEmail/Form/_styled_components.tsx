// Tools
import { styled } from "@mui/system";
import fadeFromLeft from "@/components/_keyframes/fadeFromLeft";
import fadeFromTop from "@/components/_keyframes/fadeFromTop";
import fadeToBottom from "@/components/_keyframes/fadeToBottom";
import fadeFromBottom from "@/components/_keyframes/fadeFromBottom";
// Styled components
export const Header = styled("h4")(({ theme }) => ({
    fontSize: "32px",
    margin: "0 0 20px 0",
    fontFamily: "Montserrat Alternates",
    fontWeight: 700,
    userSelect: "none",
    animation: `${fadeFromLeft} .2s both linear .1s`,
}));

export const LengthNotification = styled("span")(({ theme }) => ({
    fontSize: "14px",
    marginTop: "4px",
    marginBottom: "32px",
    animation: `${fadeFromTop} .2s .4s linear both`,
}));

export const FormWrapper = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    "&.outro-animation": {
        animation: `${fadeToBottom} .3s linear both`,
    },
    ".MuiFormControl-root": {
        "&:nth-of-type(1)": {
            animation: `${fadeFromLeft} .2s linear both`,
        },
        "&:nth-of-type(2)": {
            animation: `${fadeFromLeft} .2s .1s linear both`,
        },
        "&:nth-of-type(3)": {
            animation: `${fadeFromLeft} .2s .2s linear both`,
        },
    },
    "&>button": {
        animation: `${fadeFromLeft} .2s .3s linear both`,
    },
}));

export const ButtonsBottomWrapper = styled("footer")(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
}));
