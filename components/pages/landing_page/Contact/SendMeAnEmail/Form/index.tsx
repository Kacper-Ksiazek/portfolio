// Tools
import dynamic from "next/dynamic";
// Types
import type { FunctionComponent } from "react";
// Other components
const Stage1 = dynamic(() => import("./stage_1"));
const Stage2 = dynamic(() => import("./stage_2"));
const Stage3 = dynamic(() => import("./stage_3"));
import BottomButtons from "./BottomButtons";
import NavigationBetweenStages from "./navigation";
import { useSendEmailContext } from "@/components/pages/landing_page/Contact/SendMeAnEmail/hooks/useSendEmailContext";
// Other components
import { FormWrapper, StageWrapper } from "./_styled_components";
// Styled Components

interface EmailFormProps {
    sendRequest: () => void;
    displayOutroAnimation: boolean;
}

const EmailForm: FunctionComponent<EmailFormProps> = (props) => {
    const { sendEmailSubsection, setSendEmailSubsection, sendEmailSubsectionIsChanging } = useSendEmailContext();

    const onContinueButtonClick = () => {
        if (sendEmailSubsection === "GENERAL_PURPOSE") setSendEmailSubsection("CONTACT_DETAILS");
        else if (sendEmailSubsection === "CONTACT_DETAILS") setSendEmailSubsection("RECAPTCHA");
        else props.sendRequest();
    };

    return (
        <FormWrapper className={props.displayOutroAnimation ? "outro-animation" : ""}>
            <NavigationBetweenStages />
            <StageWrapper
                className={[
                    sendEmailSubsectionIsChanging ? "form-stage-is-changing" : "", //
                    sendEmailSubsection,
                ].join(" ")}
            >
                {/*  */}
                {(() => {
                    switch (sendEmailSubsection) {
                        case "GENERAL_PURPOSE":
                            return <Stage1 />;
                        case "CONTACT_DETAILS":
                            return <Stage2 />;
                        case "RECAPTCHA":
                            return <Stage3 />;
                    }
                })()}
                {/*  */}
            </StageWrapper>
            <BottomButtons onContinueButtonClick={onContinueButtonClick} />
        </FormWrapper>
    );
};

export default EmailForm;
