// Tools
import { styled } from "@mui/system";
import useBetterState from "@/hooks/useBetterState";
import useSendMeAnEmailContext from "./hooks/useSendMeAnEmailContext";
// Types
import type { FunctionComponent } from "react";
// Other components
import Form from "./Form";
// Styled Components
import SendMeAnEmailWrapper from "./_styled_components/SendMeAnEmailWrapper";

const Header = styled("h4")(({ theme }) => ({
    fontSize: "32px",
    margin: "0 0 20px 0",
    fontFamily: "Montserrat Alternates",
    fontWeight: 700,
    userSelect: "none",
}));

const SendMeAnEmailContextConsumer: FunctionComponent = (props) => {
    const { status } = useSendMeAnEmailContext();
    const extraCircumstancesOfRenderingForm = useBetterState<null | "displayOutroAnimation" | "hideIt">(null);

    const sendRequest = () => {
        status.setValue("pending");
        extraCircumstancesOfRenderingForm.setValue("displayOutroAnimation");
        setTimeout(() => {
            extraCircumstancesOfRenderingForm.setValue("hideIt");
        }, 800);
    };

    return (
        <SendMeAnEmailWrapper>
            <Header>Send me an email</Header>
            {(() => {
                if (extraCircumstancesOfRenderingForm.value !== "hideIt") {
                    return (
                        <Form
                            displayOutroAnimation={extraCircumstancesOfRenderingForm.value === "displayOutroAnimation"} //
                            sendRequest={sendRequest}
                        />
                    );
                }
            })()}
        </SendMeAnEmailWrapper>
    );
};

export default SendMeAnEmailContextConsumer;
