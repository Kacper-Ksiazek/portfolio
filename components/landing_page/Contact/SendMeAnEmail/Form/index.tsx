// Tools
import dynamic from "next/dynamic";
// Types
import type { FunctionComponent } from "react";
// Other components
const Stage1 = dynamic(() => import("./stage_1"));
const Stage2 = dynamic(() => import("./stage_2"));
const Stage3 = dynamic(() => import("./stage_3"));
import BottomButtons from "./BottomButtons";
import NavigationBetweenStages from "./NavigationBetweenStages";
import useManagementContext from "@/components/landing_page/Contact/SendMeAnEmail/hooks/useManagementContext";
// Other components
import { FormWrapper, Header, StageWrapper } from "./_styled_components";

interface EmailFormProps {
    sendRequest: () => void;
    displayOutroAnimation: boolean;
}

const EmailForm: FunctionComponent<EmailFormProps> = (props) => {
    const { formFillingStage, setFormFillingStage } = useManagementContext();

    const onContinueButtonClick = () => {
        if (formFillingStage === "purpose") setFormFillingStage("contact_details");
        else if (formFillingStage === "contact_details") setFormFillingStage("recaptcha");
        else props.sendRequest();
    };

    return (
        <FormWrapper className={props.displayOutroAnimation ? "outro-animation" : ""}>
            <Header>Send me an email</Header>
            <NavigationBetweenStages />

            <StageWrapper>
                {/*  */}
                {(() => {
                    switch (formFillingStage) {
                        case "purpose":
                            return <Stage1 />;
                        case "contact_details":
                            return <Stage2 />;
                        case "recaptcha":
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
