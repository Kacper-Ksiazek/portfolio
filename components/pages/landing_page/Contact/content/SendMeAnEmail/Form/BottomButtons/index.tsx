// Tools
import { styled } from "@mui/system";
import fadeSimple from "@/components/keyframes/intro/fadeSimple";
import { useSendEmailContext } from "@/components/pages/landing_page/Contact/content/SendMeAnEmail/hooks/useSendEmailContext";
// Types
import type { FunctionComponent } from "react";
// Material UI Icons
import CodeOff from "@mui/icons-material/CodeOff";
// Styled components
import ContinueButton from "./ContinueButton";
import ButtonWithTooltip from "@/components/pages/landing_page/Contact/content/SendMeAnEmail/_utils_components/ButtonWithTooltip";

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
}));

interface BottomButtonsProps {
    onContinueButtonClick: () => void;
}
const BottomButtons: FunctionComponent<BottomButtonsProps> = (props) => {
    const { updateRequest, invalidFormFields } = useSendEmailContext();

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
            >
                <span className="text">Continue</span>
            </ContinueButton>

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
        </ButtonsBottomWrapper>
    );
};

export default BottomButtons;
