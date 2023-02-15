// Types
import type { FunctionComponent } from "react";
// Material UI Icons
import Refresh from "@mui/icons-material/Refresh";
import ArrowBack from "@mui/icons-material/ArrowBack";
import ErrorOutline from "@mui/icons-material/ErrorOutline";
// Other components
import ButtonWithTooltip from "@/components/atoms/forms/ButtonWithTooltip";
// Styled components
import { BottomInformation, ProcessRequestStageWrapper, Divider, AbsoluteButtonsWrapper } from "./_styled_components";

interface FailureStatusProps {
    code: number;
    isStaged: boolean;
    outroAnimation: boolean;
    refresh: () => void;
    goBackToTheForm: () => void;
}

const FailureStatus: FunctionComponent<FailureStatusProps> = (props) => {
    return (
        <ProcessRequestStageWrapper
            className={[
                "failure", //
                props.outroAnimation ? "outro" : "",
            ].join(" ")}
        >
            <ErrorOutline className="main-icon" />

            <BottomInformation>
                Something went <strong>wrong</strong> while sending your message!
            </BottomInformation>

            <Divider />

            <span>
                Error: <strong>{props.code}</strong>
            </span>

            {props.isStaged && (
                <AbsoluteButtonsWrapper>
                    <ButtonWithTooltip
                        tooltip="Send request again" //
                        color="error"
                        onClick={props.refresh}
                        icon={<Refresh />}
                    />

                    <ButtonWithTooltip
                        tooltip="Return to the form" //
                        color="error"
                        onClick={props.goBackToTheForm}
                        icon={<ArrowBack />}
                    />
                </AbsoluteButtonsWrapper>
            )}
        </ProcessRequestStageWrapper>
    );
};

export default FailureStatus;
