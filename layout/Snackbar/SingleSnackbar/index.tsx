// Tools
// Types
import type { FunctionComponent } from "react";
import type { Snackbar } from "@/@types/SnackbarContext";
// Other components
import CircularCounterDown from "@/components/_utils/CircularCounterDown";
import { CounterWrapper, StyledAlert, StyledSnackbar } from "./_styled_components";
// Material UI Icons
import Close from "@mui/icons-material/Close";

interface SingleSnackbarProps {
    hideAfter: number;
    msg: Snackbar["msg"];
    severity: Snackbar["severity"];
    displayHidingAnimation: boolean;

    close: () => void;
}

const SingleSnackbar: FunctionComponent<SingleSnackbarProps> = (props) => {
    return (
        <StyledSnackbar className={props.displayHidingAnimation ? "outro" : ""}>
            <StyledAlert
                severity={props.severity} //
                variant="filled"
            >
                <span>{props.msg}</span>

                <CounterWrapper onClick={props.close}>
                    <Close className="close-icon" />
                    {props.hideAfter && <CircularCounterDown time={props.hideAfter - 350} />}
                </CounterWrapper>
            </StyledAlert>
        </StyledSnackbar>
    );
};

export default SingleSnackbar;
