// Tools
import { styled } from "@mui/system";
import useManagementContext from "@/components/landing_page/Contact/SendMeAnEmail/hooks/useManagementContext";
// Types
import type { FunctionComponent } from "react";
// Material UI Icons
import CodeOff from "@mui/icons-material/CodeOff";
// Styled components
import SendMailButton from "../_styled_components/SendMailButton";
import ButtonWIthTooltip from "@/components/landing_page/Contact/SendMeAnEmail/_utils_components/ButtonWIthTooltip";

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
    const managementContext = useManagementContext();

    const feignSucceededRequest = () => {
        managementContext.setRequestStatus("pending");
        setTimeout(() => {
            managementContext.setRequestStatus("success_but_feigned");
        }, 750);
    };

    const feignInvalidRequest = () => {
        managementContext.setRequestStatus("pending");
        setTimeout(() => {
            managementContext.setRequestStatus("error_but_feigned");
        }, 750);
    };

    return (
        <ButtonsBottomWrapper>
            <SendMailButton disabled={managementContext.blockContinueButton} onClick={props.onContinueButtonClick}>
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
