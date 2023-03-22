// Tools
import dynamic from "next/dynamic";
import { useTheme } from "@mui/material";
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
    const theme = useTheme();
    const contactNavigationContext = useContactNavigation();

    const emailFormSubsection = contactNavigationContext.stages.form.current;

    const color: "primary" | "secondary" = theme.palette.mode === "dark" ? "primary" : "secondary";

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
                        return <Stage1 color={color} />;
                    case "CONTACT_DETAILS":
                        return <Stage2 color={color} />;
                    case "RECAPTCHA":
                        return <Stage3 />;
                }
            })()}
        </ContentWrapper>
    );
};

export default FormContent;
