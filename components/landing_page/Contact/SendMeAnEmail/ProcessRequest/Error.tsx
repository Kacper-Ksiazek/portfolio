// Tools
import { styled, alpha } from "@mui/system";
// Types
import type { FunctionComponent } from "react";
// Material UI Components
import Tooltip from "@mui/material/Tooltip";
// Material UI Icons
import Refresh from "@mui/icons-material/Refresh";
import ArrowBack from "@mui/icons-material/ArrowBack";
import ErrorOutline from "@mui/icons-material/ErrorOutline";
// Styled components
import { BottomInformation, ProcessRequestStageWrapper } from "./_styled_components";
import StyledButton from "@/components/_styled_components/StyledButton";

const ErrorCode = styled("span")(({ theme }) => ({
    marginTop: "14px",
    position: "relative",
    "&::after": {
        content: "''",
        position: "absolute",
        top: "-5px",
        left: "50%",
        width: "140px",
        height: "1px",
        background: alpha(theme.palette.text.primary, 0.1),
        transform: "translateX(-50%)",
    },
}));

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
            <ErrorCode>
                Error: <strong>{props.code}</strong>
            </ErrorCode>

            <ButtonsWrapper>
                <Tooltip title="Return to the form" placement="top" onClick={props.goBackToTheForm}>
                    <StyledButton color="error">
                        <ArrowBack />
                    </StyledButton>
                </Tooltip>

                <Tooltip title="Send request again" placement="top" onClick={props.refresh}>
                    <StyledButton color="error">
                        <Refresh />
                    </StyledButton>
                </Tooltip>
            </ButtonsWrapper>
        </ProcessRequestStageWrapper>
    );
};

export default ErrorStatus;
