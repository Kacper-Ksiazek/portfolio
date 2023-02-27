// Tools
import { styled } from "@mui/material";
import { fadeSimple } from "@/components/keyframes/intro";
import { useSendEmailContext } from "@/components/pages/landing_page/Contact/content/SendMeAnEmail/hooks/useSendEmailContext";
// Types
import type { FunctionComponent } from "react";
// Material UI Icons
import CodeOff from "@mui/icons-material/CodeOff";
// Styled components
import ContinueButton from "./ContinueButton";
import ButtonWithTooltip from "@/components/atoms/forms/ButtonWithTooltip";

const ButtonsBottomWrapper = styled("footer")(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "button.continue": {
        animation: `${fadeSimple} .3s 1.4s linear both`,
    },
    "div.flex": {
        display: "flex",
        animation: `${fadeSimple} .3s 1.7s linear both`,
    },
    "@media (max-width:500px)": {
        flexDirection: "column",
        "div.flex": {
            width: "100%",
            marginTop: "12px",
            justifyContent: "space-between",
            button: {
                width: "calc(50% - 6px)",
            },
        },
    },
}));

interface BottomButtonsProps {
    onContinueButtonClick: () => void;
}
const BottomButtons: FunctionComponent<BottomButtonsProps> = (props) => {
    const { updateRequest, invalidFormFields, emailFormSubsection } = useSendEmailContext();

    const feignSucceededRequest = () => {
        updateRequest({ status: "pending" });
        setTimeout(() => {
            updateRequest({ status: "staged_success" });
        }, 750);
    };

    const feignInvalidRequest = () => {
        updateRequest({ status: "pending" });
        setTimeout(() => {
            updateRequest({ status: "staged_error" });
        }, 750);
    };

    return (
        <ButtonsBottomWrapper>
            <ContinueButton
                disabled={invalidFormFields.length !== 0} //
                onClick={props.onContinueButtonClick}
                className="continue"
                color="primary"
            >
                <span className="text">Continue</span>
            </ContinueButton>

            {(() => {
                if (emailFormSubsection !== "RECAPTCHA") {
                    return (
                        <div className="flex">
                            <ButtonWithTooltip
                                color="error" //
                                tooltip="Fake invalid request"
                                onClick={feignInvalidRequest}
                                icon={<CodeOff />}
                                className="fake-invalid-request"
                            />
                            <ButtonWithTooltip
                                color="success" //
                                tooltip="Fake successful request"
                                onClick={feignSucceededRequest}
                                icon={<CodeOff />}
                                className="fake-valid-request"
                            />
                        </div>
                    );
                }
            })()}
        </ButtonsBottomWrapper>
    );
};

export default BottomButtons;
