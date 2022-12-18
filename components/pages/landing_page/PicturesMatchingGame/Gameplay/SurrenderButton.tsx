// Tools
import { useState } from "react";
import { styled } from "@mui/system";
import fadeSimple from "@/components/keyframes/intro/fadeSimple";
// Types
import type { FunctionComponent } from "react";
// Material UI Components
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
// Styled components
import StyledButton from "@/components/atoms/forms/StyledButton";

const SurrenderButtonBase = styled(StyledButton)(({ theme }) => ({
    fontSize: "20px",
    padding: "6px 48px",
    animation: `${fadeSimple} .3s both`,
}));

const StyledDialog = styled(Dialog)(({ theme }) => ({
    ".MuiPaper-root": {
        background: "#fff",
        fontSize: "18px",
    },
}));
const DialogButton = styled(StyledButton)(({ theme }) => ({
    fontSize: "18px",
    padding: "8px 24px",
}));

interface SurrenderButtonProps {
    exitCurrentGameplay: () => void;
}

const SurrenderButton: FunctionComponent<SurrenderButtonProps> = (props) => {
    const [openDialog, setOpenDialog] = useState<boolean>(false);

    const closeDialog = () => setOpenDialog(false);
    const exit = () => {
        setOpenDialog(false);
        setTimeout(() => {
            props.exitCurrentGameplay();
        }, 100);
    };

    return (
        <>
            <div style={{ paddingBottom: "48px", paddingTop: "16px" }}>
                <SurrenderButtonBase
                    id="surrender-button"
                    color="error" //
                    onClick={(e) => {
                        (e.target as any).blur();
                        setOpenDialog(true);
                    }}
                >
                    Surrender
                </SurrenderButtonBase>
            </div>
            {/*  */}
            <StyledDialog
                open={openDialog} //
                onClose={closeDialog}
                fullWidth
                maxWidth="xs"
            >
                <DialogTitle>Are you sure?</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <i>
                            It does not matter how slowly you go as long as you do not stop -<strong>Confucius</strong>
                        </i>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <DialogButton onClick={exit} color="primary">
                        Yes
                    </DialogButton>
                    <DialogButton onClick={closeDialog}>No</DialogButton>
                </DialogActions>
            </StyledDialog>
        </>
    );
};

export default SurrenderButton;
