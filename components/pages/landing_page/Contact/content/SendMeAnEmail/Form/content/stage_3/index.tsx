// Tools
import { useState, useEffect } from "react";
import { fadeSimple } from "@/components/keyframes/intro";
import { styled } from "@mui/material";
import { fadeFromLeft } from "@/components/keyframes/intro";
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
    top: "0px",
    width: "100%",
    height: "120px",
    transform: "translateY(-50%)",
    zIndex: 20,
    "@media (max-width:770px)": {
        height: "160px",
    },
}));

const EmailFormSubsection1: FunctionComponent = (props) => {
    const { updateForm, form } = useSendEmailContext();
    const [identityReminder, setIdentityReminder] = useState<boolean>(false);

    function setReCAPTCHAIsApproved(val: boolean) {
        updateForm({ ReCAPTCHAIsApproved: val });
    }

    function remindAboutCaptcha() {
        setIdentityReminder(true);
    }

    // On dismout
    useEffect(() => {
        return () => {
            console.log("objecdismoutingt", form.ReCAPTCHAIsApproved);
        };
    }, [form.ReCAPTCHAIsApproved]);

    return (
        <>
            {!form.ReCAPTCHAIsApproved && <PreventFromNavigating onMouseEnter={remindAboutCaptcha} onClick={remindAboutCaptcha} />}

            <Paragraph>One last step before sending a message.</Paragraph>
            <GoogleReCAPTCHA setReCAPTCHAIsApproved={setReCAPTCHAIsApproved} />

            {identityReminder && <Paragraph sx={{ animation: `${fadeSimple} .3s both` }}>In order to go back, you have to confirm that you are not a robot!</Paragraph>}
        </>
    );
};

export default EmailFormSubsection1;
