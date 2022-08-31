// Tools
import { styled, keyframes } from "@mui/system";
import fadeSimple from "@/components/_keyframes/intro/fadeSimple";
import fadeSimpleOUT from "@/components/_keyframes/outro/fadeSimpleOUT";
// Material UI Components
import Alert from "@mui/material/Alert";

export const StyledAlert = styled(Alert)(({ theme }) => ({
    width: "100%",
    display: "flex",
    alignItems: "center",
    fontSize: "16px",
    "&>.MuiAlert-message": {
        flexGrow: 1,
        justifyContent: "space-between",
        display: "flex",
        alignItems: "center",
        padding: "3px 10px",
        userSelect: "none",
    },
    "&.MuiAlert-filledInfo": {
        background: theme.palette.primary.main,
        border: "1px solid #fff",
    },
}));

export const CounterWrapper = styled("div")(({ theme }) => ({
    width: "40px",
    height: "40px",
    position: "relative",
    marginLeft: "8px",
    overflow: "hidden",
    cursor: "pointer",
    ".MuiCircularProgress-svg": {
        color: "#fff",
    },
    ".close-icon": {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
    },
}));

const snackbarOutroAnimation = keyframes({
    "0%": {
        maxHeight: "58px",
        opacity: 1,
    },
    "50%": {
        maxHeight: "58px",
        opacity: 0,
    },
    "100%": {
        maxHeight: "0px",
        opacity: 0,
    },
});

export const StyledSnackbar = styled("div")(({ theme }) => ({
    marginTop: "8px",
    animation: `${fadeSimple} .15s linear`,
    overflow: "hidden",
    "&.outro": {
        animation: `${snackbarOutroAnimation} .3s linear both`,
    },
}));
