// Tools
import dynamic from "next/dynamic";
import formatTextViaBolding from "@/utils/client/formatTextViaBolding";
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
import Paragraph from "@/components/pages/landing_page/BreakTheIce/Content/_styled_components/Paragraph";

interface EmailFormProps {
    sendRequest: () => void;
    displayOutroAnimation: boolean;
}

const EmailForm: FunctionComponent<EmailFormProps> = (props) => {
    const { formStage, setFormStage } = useSendEmailContext();

    const onContinueButtonClick = () => {
        if (formStage === "GENERAL_PURPOSE") setFormStage("CONTACT_DETAILS");
        else if (formStage === "CONTACT_DETAILS") setFormStage("RECAPTCHA");
        else props.sendRequest();
    };

    return (
        <FormWrapper className={props.displayOutroAnimation ? "outro-animation" : ""}>
            <Paragraph animationDelay={0.3}>
                {formatTextViaBolding(
                    `I'm first year student of the *AGH University of Science and Technology* at the Faculty of *Engineering and Data Analysis* in Cracow, thus I'm looking forward to start either office job here or to work remotely.`
                )}
            </Paragraph>
            <NavigationBetweenStages />
            <StageWrapper>
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
