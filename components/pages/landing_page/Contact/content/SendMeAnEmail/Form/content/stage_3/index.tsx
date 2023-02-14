// Tools
import { useState } from "react";
import fadeSimple from "@/components/keyframes/intro/fadeSimple";
import { styled } from "@mui/system";
import fadeFromLeft from "@/components/keyframes/intro/fadeFromLeft";
import { useSendEmailContext } from "@/components/pages/landing_page/Contact/content/SendMeAnEmail/hooks/useSendEmailContext";
// Types
import type { FunctionComponent } from "react";
// Other components
import GoogleReCAPTCHA from "./GoogleReCAPTCHA";
// Styled Components
const Paragraph = styled("p")(({ theme }) => ({
    fontSize: "18px",
    userSelect: "none",
    animation: `${fadeFromLeft} .2s linear .2s both`,
}));

const PreventFromNavigating = styled("span")(({ theme }) => ({
    position: "absolute",
    top: "-50px",
    width: "100%",
    height: "100px",
    zIndex: 20,
}));

const EmailFormSubsection1: FunctionComponent = (props) => {
    const { updateForm, form } = useSendEmailContext();
    const [identityReminder, setIdentityReminder] = useState<boolean>(false);

    function setReCAPTCHAIsApproved(val: boolean) {
        updateForm({ ReCAPTCHAIsApproved: val });
    }

    return (
        <>
            {!form.ReCAPTCHAIsApproved && <PreventFromNavigating onMouseEnter={() => setIdentityReminder(true)} />}

            <Paragraph>One last step before sending a message.</Paragraph>
            <GoogleReCAPTCHA setReCAPTCHAIsApproved={setReCAPTCHAIsApproved} />

            {identityReminder && <Paragraph sx={{ animation: `${fadeSimple} .3s both` }}>In order to go back, you have to confirm that you are not a robot!</Paragraph>}
        </>
    );
};

export default EmailFormSubsection1;
