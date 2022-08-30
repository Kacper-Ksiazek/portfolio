// Tools
import { styled } from "@mui/system";
import fadeToLeft from "@/components/_keyframes/outro/fadeToLeft";
// Material UI Components
import Alert from "@mui/material/Alert";
import MUISnackbar from "@mui/material/Snackbar";

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

export const StyledSnackbar = styled(MUISnackbar)(({ theme }) => ({
    zIndex: 2000,
    ".outro": {
        animation: `${fadeToLeft} .3s both`,
    },
}));
