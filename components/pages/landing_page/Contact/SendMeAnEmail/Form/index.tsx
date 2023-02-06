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
    const { formStage, setFormStage, formStageIsChanging } = useSendEmailContext();

    const onContinueButtonClick = () => {
        if (formStage === "GENERAL_PURPOSE") setFormStage("CONTACT_DETAILS");
        else if (formStage === "CONTACT_DETAILS") setFormStage("RECAPTCHA");
        else props.sendRequest();
    };

    return (
        <FormWrapper className={props.displayOutroAnimation ? "outro-animation" : ""}>
            <NavigationBetweenStages />
            <StageWrapper
                className={[
                    formStageIsChanging ? "form-stage-is-changing" : "", //
                    formStage,
                ].join(" ")}
            >
                {/*  */}
                {(() => {
                    switch (formStage) {
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
