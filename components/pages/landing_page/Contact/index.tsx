// Tools
import { styled } from "@mui/system";
// Types
import type { FunctionComponent } from "react";
import type { MUIStyledCommonProps } from "@mui/system";
// Other components
import ContactBase from "./ContactBase";
import SendMeAnEmail from "./SendMeAnEmail";
import VisibilitySensor from "@/components/utils/VisibilitySensor";
// Styled Components
import LightSectionWrapper from "@/components/atoms/content_placement/SectionWrapper/Light";

const TextWrapper = styled("div")(({ theme }) => ({
    width: "calc(50% - 50px)",
    cursor: "default",
}));

const Contact: FunctionComponent<MUIStyledCommonProps> = (props) => {
    return (
        <LightSectionWrapper
            header={{
                main: "Contact",
                label: "How to reach me",
                estimatedHeight: "100px",
            }}
            backgroundLetter="R"
            round="left"
            id="contact"
        >
            <VisibilitySensor
                offsetBottom={400} //
                dontRenderNotVisableChildren
                childWrapperSx={{
                    height: "100%",
                    flexGrow: 1,
                    display: "flex",
                }}
            >
                <ContactBase>
                    <SendMeAnEmail />
                </ContactBase>
            </VisibilitySensor>
        </LightSectionWrapper>
    );
};

export default Contact;
