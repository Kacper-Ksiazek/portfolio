// Tools
import dynamic from "next/dynamic";
// Types
import type { FunctionComponent } from "react";
// Other components
const Stage1 = dynamic(() => import("./stage_1"));
const Stage2 = dynamic(() => import("./stage_2"));
import BottomButtons from "./BottomButtons";
import NavigationBetweenStages from "./NavigationBetweenStages";
// Other components
import { FormWrapper, Header, StageWrapper } from "./_styled_components";

interface EmailFormProps {
    sendRequest: () => void;
    displayOutroAnimation: boolean;
}

const EmailForm: FunctionComponent<EmailFormProps> = (props) => {
    return (
        <FormWrapper className={props.displayOutroAnimation ? "outro-animation" : ""}>
            <Header>Send me an email</Header>
            <NavigationBetweenStages />

            <StageWrapper>
                {/* <Stage2 /> */}
                <Stage1 />
            </StageWrapper>
            <BottomButtons sendRequest={props.sendRequest} />
        </FormWrapper>
    );
};

export default EmailForm;
