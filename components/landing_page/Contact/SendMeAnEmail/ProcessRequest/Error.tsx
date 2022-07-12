// Tools
import { styled, alpha } from "@mui/system";
// Types
import type { FunctionComponent } from "react";
// Material UI Icons
import Refresh from "@mui/icons-material/Refresh";
import ArrowBack from "@mui/icons-material/ArrowBack";
import ErrorOutline from "@mui/icons-material/ErrorOutline";
// Other components
import ButtonWIthTooltip from "../_utils_components/ButtonWIthTooltip";
// Styled components
import Divider from "../_styled_components/Divider";
import { BottomInformation, ProcessRequestStageWrapper } from "./_styled_components";

const ButtonsWrapper = styled("div")(({ theme }) => ({
    position: "absolute",
    top: "10px",
    right: "10px",
    display: "flex",
}));

interface ErrorStatusProps {
    code: number;
    outroAnimation: boolean;
    refresh: () => void;
    goBackToTheForm: () => void;
}

const ErrorStatus: FunctionComponent<ErrorStatusProps> = (props) => {
    return (
        <ProcessRequestStageWrapper
            className={[
                "error", //
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

            <ButtonsWrapper>
                <ButtonWIthTooltip
                    tooltip="Send request again" //
                    color="error"
                    onClick={props.refresh}
                    icon={<Refresh />}
                />

                <ButtonWIthTooltip
                    tooltip="Return to the form" //
                    color="error"
                    onClick={props.goBackToTheForm}
                    icon={<ArrowBack />}
                />
            </ButtonsWrapper>
        </ProcessRequestStageWrapper>
    );
};

export default ErrorStatus;
