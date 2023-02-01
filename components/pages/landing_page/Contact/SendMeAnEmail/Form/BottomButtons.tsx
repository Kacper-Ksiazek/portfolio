// Tools
import { styled } from "@mui/system";
import { useSendEmailContext } from "@/components/pages/landing_page/Contact/SendMeAnEmail/hooks/useSendEmailContext";
// Types
import type { FunctionComponent } from "react";
// Material UI Icons
import CodeOff from "@mui/icons-material/CodeOff";
// Styled components
import SendMailButton from "../_styled_components/SendMailButton";
import ButtonWIthTooltip from "@/components/pages/landing_page/Contact/SendMeAnEmail/_utils_components/ButtonWIthTooltip";

const SimpleFlexBox = styled("div")(({ theme }) => ({
    display: "flex",
}));

const ButtonsBottomWrapper = styled("footer")(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
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
            <SendMailButton disabled={invalidFormFields.length !== 0} onClick={props.onContinueButtonClick} className="continue">
                <span className="text">Continue</span>
            </SendMailButton>

            <SimpleFlexBox>
                <ButtonWIthTooltip
                    color="error" //
                    tooltip="Feign an invalid request"
                    onClick={feignInvalidRequest}
                    icon={<CodeOff />}
                    className="fake-invalid-request"
                />
                <ButtonWIthTooltip
                    color="success" //
                    tooltip="Feign a succeeded request"
                    onClick={feignSucceededRequest}
                    icon={<CodeOff />}
                    className="fake-valid-request"
                />
            </SimpleFlexBox>
        </ButtonsBottomWrapper>
    );
};

export default BottomButtons;
