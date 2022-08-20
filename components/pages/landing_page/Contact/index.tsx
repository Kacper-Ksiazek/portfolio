// Tools
import { styled } from "@mui/system";
import formatTextViaBolding from "@/utils/client/formatTextViaBolding";
// Types
import type { FunctionComponent } from "react";
import type { MUIStyledCommonProps } from "@mui/system";
// Other components
import ContactBase from "./ContactBase";
import SendMeAnEmail from "./SendMeAnEmail";
import CommunicatorsIcons from "./CommunicatorsIcons";
import VisibilitySensor from "@/components/_utils/VisibilitySensor";
// Styled Components
import LightSectionWrapper from "@/components/_styled_components/content_placement/SectionWrapper/Light";
import Paragraph from "@/components/pages/landing_page/BreakTheIce/Content/_styled_components/Paragraph";

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
                    <TextWrapper id="contact-details-wrapper">
                        <Paragraph animationDelay={0.4}>
                            {formatTextViaBolding(
                                `I'm first year student of the *AGH University of Science and Technology* at the Faculty of *Engineering and Data Analysis* in Cracow, thus I'm looking forward to start either office job here or to work remotely.`
                            )}
                        </Paragraph>
                        <Paragraph animationDelay={0.5}>
                            {formatTextViaBolding(
                                `Undoubtedly the fastest and the most reliable way to reach me is via *messenger*, because it is my primary communicator and can expect almost *immediately response*. Nevertheless, You can be certain, that I will appreciate every effort put into sending me a message and therefore each message will be read, analyzed and eventually *responded* as soon as I will be able to do so.`
                            )}
                        </Paragraph>
                        <CommunicatorsIcons />
                    </TextWrapper>

                    <SendMeAnEmail />
                </ContactBase>
            </VisibilitySensor>
        </LightSectionWrapper>
    );
};

export default Contact;
