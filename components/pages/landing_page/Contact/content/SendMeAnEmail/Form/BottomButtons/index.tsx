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
import ButtonWIthTooltip from "@/components/pages/landing_page/Contact/content/SendMeAnEmail/_utils_components/ButtonWithTooltip";

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
            updateRequest({ status: "success_but_feigned" });
        }, 750);
    };

    const feignInvalidRequest = () => {
        updateRequest({ status: "pending" });
        setTimeout(() => {
            updateRequest({ status: "error_but_feigned" });
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
                <ButtonWIthTooltip
                    color="error" //
                    tooltip="Fake invalid request"
                    onClick={feignInvalidRequest}
                    icon={<CodeOff />}
                    className="fake-invalid-request"
                />
                <ButtonWIthTooltip
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
