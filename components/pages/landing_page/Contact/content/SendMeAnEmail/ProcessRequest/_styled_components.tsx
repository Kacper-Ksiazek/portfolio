// Tools
import { styled, alpha } from "@mui/material";
import { fadeSimple } from "@/components/keyframes/intro";
import fadeToLeft from "@/components/keyframes/outro/fadeToLeft";
import { fadeFromTop } from "@/components/keyframes/intro";
// Styled components
export const ProcessRequestStageWrapper = styled("div")(({ theme }) => ({
    display: "flex",
    position: "absolute",
    top: "0",
    left: "0",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    animation: `${fadeFromTop} .3s .15s both`,
    fontSize: "20px",
    userSelect: "none",
    "&.outro": {
        animation: `${fadeToLeft} .3s both`,
    },
    "svg.main-icon": {
        fontSize: "96px",
    },
    "&.success": {
        svg: {
            color: theme.palette.success.main,
        },
        strong: {
            color: theme.palette.success.main,
        },
    },
    "&.failure": {
        svg: {
            color: theme.palette.error.main,
        },
        strong: {
            color: theme.palette.error.main,
        },
        button: {
            "&:nth-of-type(1)": {
                animation: `${fadeSimple} .3s .6s both`,
            },
            "&:nth-of-type(2)": {
                animation: `${fadeSimple} .3s .5s both`,
            },
        },
    },
}));

export const BottomInformation = styled("span")(({ theme }) => ({
    marginTop: "10px",
    textAlign: "center",
}));

export const Divider = styled("span")(({ theme }) => ({
    width: "140px",
    height: "1px",
    background: alpha(theme.palette.text.primary, 0.1),
    margin: "10px auto",
}));

export const AbsoluteButtonsWrapper = styled("div")(({ theme }) => ({
    position: "absolute",
    top: "10px",
    right: "10px",
    display: "flex",
}));
