// Tools
import dynamic from "next/dynamic";
import { useContactNavigation } from "@/components/pages/landing_page/Contact/hooks/useContactNavigation";
// Types
import type { FunctionComponent } from "react";
// Other components
const Stage1 = dynamic(() => import("./stage_1"));
const Stage2 = dynamic(() => import("./stage_2"));
const Stage3 = dynamic(() => import("./stage_3"));
// Styled components
import ContentWrapper from "./ContentWrapper";

const FormContent: FunctionComponent = (props) => {
    const contactNavigationContext = useContactNavigation();

    const emailFormSubsection = contactNavigationContext.stages.form.current;

    return (
        <ContentWrapper
            className={[
                contactNavigationContext.stages.form.isChanging ? "form-stage-is-changing" : "", //
                emailFormSubsection,
            ].join(" ")}
        >
            {(() => {
                switch (emailFormSubsection) {
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
