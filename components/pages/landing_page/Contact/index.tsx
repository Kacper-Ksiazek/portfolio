// Tools
import { styled } from "@mui/system";
// Types
import type { FunctionComponent } from "react";
import type { MUIStyledCommonProps } from "@mui/system";
// Other components
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

const ContentWrapper = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    flexGrow: 1,
    "&.visible": {
        // background: "yellow",
    },
    ["@media (max-width:1400px)"]: {
        "#contact-details-wrapper, #send-me-en-email-wrapper": {
            width: "calc(50% - 20px)",
        },
    },
    ["@media (max-width:1150px)"]: {
        "#send-me-en-email-wrapper": {
            width: "calc(60% - 20px)",
        },
        "#contact-details-wrapper": {
            width: "calc(40% - 20px)",
        },
    },
    ["@media (max-width:1000px)"]: {
        flexDirection: "column",
        "#contact-details-wrapper": {
            marginBottom: "64px",
        },
        "#send-me-en-email-wrapper": {
            height: "560px",
        },
        "#contact-details-wrapper, #send-me-en-email-wrapper": {
            width: "100%",
        },
    },
    ["@media (max-width:600px)"]: {
        marginTop: "12px",
        "#send-me-en-email-wrapper": {
            height: "570px",
            padding: "5px",
        },
    },
    ["@media (max-width:400px)"]: {
        "#send-me-en-email-wrapper": {
            h4: {
                fontSize: "28px",
            },
        },
    },
    ["@media (max-width:340px)"]: {
        "#send-me-en-email-wrapper": {
            h4: {
                fontSize: "24px",
            },
        },
    },
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
                <ContentWrapper>
                    <TextWrapper id="contact-details-wrapper">
                        <Paragraph animationDelay={0.4}>
                            I currently live and study in the <strong>Kraków</strong> (Cracow, Poland) thus I am ready start either office or hybrid job here.
                        </Paragraph>
                        <Paragraph animationDelay={0.5}>
                            Undoubtedly the fastest and the most reliable way to reach me is via <strong>messenger</strong>. Because it is my primary communicator, You can expect almost{" "}
                            <strong>immediately response</strong>. Nevertheless, You can be certain, that I will appreciate entire effort put into sending me a message and therefore each message will
                            be read, analyzed and eventually <strong>I will respond</strong> as soon as I will be able to do so.
                        </Paragraph>
                        <CommunicatorsIcons />
                    </TextWrapper>
                    <SendMeAnEmail />
                </ContentWrapper>
            </VisibilitySensor>
        </LightSectionWrapper>
    );
};

export default Contact;
