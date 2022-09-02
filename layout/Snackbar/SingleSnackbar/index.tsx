// Tools
import { useEffect, useState } from "react";
// Types
import type { FunctionComponent } from "react";
import type { Snackbar } from "@/@types/SnackbarContext";
// Other components
import StyledAlert from "./styled_components/StyledAlert";
import CounterWrapper, { CounterWrapperPlaceholder } from "./styled_components/CounterWrapper";
import SingleSnackbarBase from "./styled_components/SingleSnackbarBase";
import CircularCounterDown from "@/components/_utils/CircularCounterDown";
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
    const INTRO_ANIMATION_DURATION: number = 800;

    const [displayCircularCounterDown, setDisplayCircularCounterDown] = useState<boolean>(false);

    useEffect(() => {
        let isMounted = true;
        setTimeout(() => {
            if (isMounted) setDisplayCircularCounterDown(true);
        }, INTRO_ANIMATION_DURATION);
        return () => {
            isMounted = false;
        };
    }, []);

    return (
        <SingleSnackbarBase className={[props.displayHidingAnimation ? "outro" : "", props.severity].join(" ")}>
            <StyledAlert
                severity={props.severity} //
                variant="filled"
            >
                <span className="snackbar-msg">{props.msg}</span>

                {(() => {
                    if (displayCircularCounterDown) {
                        return (
                            <CounterWrapper onClick={props.close} className="snackbar-counter-down-wrapper">
                                <Close className="close-icon" />
                                {props.hideAfter && <CircularCounterDown time={props.hideAfter - 350 - INTRO_ANIMATION_DURATION} />}
                            </CounterWrapper>
                        );
                    } else {
                        return <CounterWrapperPlaceholder />;
                    }
                })()}
            </StyledAlert>
        </SingleSnackbarBase>
    );
};

export default SingleSnackbar;
