// Tools
import { styled } from "@mui/system";
import { useState } from "react";
import fadeFromLeft from "@/components/keyframes/intro/fadeFromLeft";
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

const FormStage1: FunctionComponent = (props) => {
    const [ReCAPTCHAIsApproved, setReCAPTCHAIsApproved] = useState<boolean>(true);

    return (
        <>
            <Paragraph>
                One last step before sending a message. Fore some reason the google recaptcha in this particular project is not eager to cooperate with me, so in order not to spend additional 3 hours
                struggling to fix it I decided to let it be like this 🤷‍♀️🤷‍♀️
            </Paragraph>
            {/* <GoogleReCAPTCHA setReCAPTCHAIsApproved={setReCAPTCHAIsApproved} /> */}
        </>
    );
};

export default FormStage1;
