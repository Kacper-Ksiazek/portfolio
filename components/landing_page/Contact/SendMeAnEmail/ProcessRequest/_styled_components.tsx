// Tools
import { styled } from "@mui/system";
import fadeSimple from "@/components/_keyframes/fadeSimple";
import fadeToLeft from "@/components/_keyframes/fadeToLeft";
import fadeFromTop from "@/components/_keyframes/fadeFromTop";
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
    fontSize: "18px",
    userSelect: "none",
    "&.outro": {
        animation: `${fadeToLeft} .3s both`,
    },
    "svg.main-icon": {
        fontSize: "64px",
    },
    "&.success": {
        svg: {
            color: theme.palette.success.main,
        },
        strong: {
            color: theme.palette.success.main,
        },
    },
    "&.error": {
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
}));
