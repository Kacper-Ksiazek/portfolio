// Tools
import { styled } from "@mui/system";
import { useSnackbar } from "@/hooks/useSnackbar";
import { useEffect, useState, useCallback } from "react";
import fadeToLeft from "@/components/_keyframes/outro/fadeToLeft";
// Types
import type { FunctionComponent } from "react";
// Material UI Components
import Alert from "@mui/material/Alert";
import MUISnackbar from "@mui/material/Snackbar";
// Material UI Icons
import Close from "@mui/icons-material/Close";
// Other components
import CircularCounterDown from "@/components/_utils/CircularCounterDown";

const StyledAlert = styled(Alert)(({ theme }) => ({
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

const CounterWrapper = styled("div")(({ theme }) => ({
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

const StyledSnackbar = styled(MUISnackbar)(({ theme }) => ({
    zIndex: 2000,
    ".outro": {
        animation: `${fadeToLeft} .3s both`,
    },
}));

const Snackbar: FunctionComponent = () => {
    const OUTRO_ANIMATION_DURATION: number = 300;
    const { snackbar, closeSnackbar, isSnackbarOpened } = useSnackbar();

    if (snackbar === null) return <></>;

    return (
        <StyledSnackbar
            open={isSnackbarOpened} //
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
            <StyledAlert
                severity={snackbar.severity} //
                variant="filled"
            >
                <span>{snackbar.msg}</span>

                <CounterWrapper onClick={() => closeSnackbar(true)}>
                    <Close className="close-icon" />
                    {isSnackbarOpened && <CircularCounterDown time={snackbar.hideAfter - 350} />}
                </CounterWrapper>
            </StyledAlert>
        </StyledSnackbar>
    );
};

export default Snackbar;
