// Tools
import { useState } from "react";
import { styled } from "@mui/material";
import { requstDOMNode } from "@/components/pages/landing_page/PicturesMatchingGame/utils/getDOMNode";
// Types
import type { FunctionComponent } from "react";
// Material UI Components
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
// Styled components
import { StyledButton } from "./styled_components";

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
    disabled: boolean;
    exitCurrentGameplay: () => void;
}

const SurrenderButton: FunctionComponent<SurrenderButtonProps> = (props) => {
    const [openDialog, setOpenDialog] = useState<boolean>(false);

    const closeDialog = () => setOpenDialog(false);
    const exit = () => {
        const mainWrapper = requstDOMNode("MAIN_WRAPPER");
        mainWrapper.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });

        setOpenDialog(false);
        mainWrapper.classList.remove("gameplay-on");
        props.exitCurrentGameplay();
    };

    return (
        <>
            <StyledButton
                color="error" //
                onClick={(e) => {
                    (e.target as any).blur();
                    setOpenDialog(true);
                }}
                disabled={props.disabled}
                className="navigation"
            >
                Surrender
            </StyledButton>
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
