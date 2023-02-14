// Tools
import dynamic from "next/dynamic";
// Types
import type { FunctionComponent } from "react";
import type { EmailFormSubsection } from "@/components/pages/landing_page/Contact/@types";
// Other components
const Stage1 = dynamic(() => import("./stage_1"));
const Stage2 = dynamic(() => import("./stage_2"));
const Stage3 = dynamic(() => import("./stage_3"));
// Styled components
import ContentWrapper from "./ContentWrapper";

interface FormContentProps {
    emailFormSubsection: EmailFormSubsection;
    emailFormSubsectionIsChanging: boolean;
}

const FormContent: FunctionComponent<FormContentProps> = (props) => {
    const { emailFormSubsection, emailFormSubsectionIsChanging } = props;

    return (
        <ContentWrapper
            className={[
                emailFormSubsectionIsChanging ? "form-stage-is-changing" : "", //
                emailFormSubsection,
            ].join(" ")}
        >
            {(() => {
                switch (props.emailFormSubsection) {
                    case "GENERAL_PURPOSE":
                        return <Stage1 />;
                    case "CONTACT_DETAILS":
                        return <Stage2 />;
                    case "RECAPTCHA":
                        return <Stage3 />;
                }
            })()}
        </ContentWrapper>
    );
};

export default FormContent;
