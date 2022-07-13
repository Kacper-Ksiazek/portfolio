// Tools
import { styled } from "@mui/system";
import useRequestFaker from "./hooks/useRequestFaker";
import useSendMeAnEmailContext from "../hooks/useSendMeAnEmailContext";
// Types
import type { FunctionComponent } from "react";
// Material UI Icons
import CodeOff from "@mui/icons-material/CodeOff";
// Styled components
import SendMailButton from "../_styled_components/SendMailButton";
import ButtonWIthTooltip from "@/components/landing_page/Contact/SendMeAnEmail/_utils_components/ButtonWIthTooltip";

const SimpleFlexBox = styled("footer")(({ theme }) => ({
    display: "flex",
}));

const ButtonsBottomWrapper = styled("footer")(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
}));

interface BottomButtonsProps {
    sendRequest: () => void;
}
const BottomButtons: FunctionComponent<BottomButtonsProps> = (props) => {
    const { disableContinueButton } = useSendMeAnEmailContext();
    const { feignSucceededRequest, feignInvalidRequest } = useRequestFaker();

    return (
        <ButtonsBottomWrapper>
            <SendMailButton disabled={disableContinueButton} onClick={props.sendRequest}>
                <span className="text">Continue</span>
            </SendMailButton>

            <SimpleFlexBox>
                <ButtonWIthTooltip
                    color="error" //
                    tooltip="Feign an invalid request"
                    onClick={feignInvalidRequest}
                    icon={<CodeOff />}
                />
                <ButtonWIthTooltip
                    color="success" //
                    tooltip="Feign a succeeded request"
                    onClick={feignSucceededRequest}
                    icon={<CodeOff />}
                />
            </SimpleFlexBox>
        </ButtonsBottomWrapper>
    );
};

export default BottomButtons;
