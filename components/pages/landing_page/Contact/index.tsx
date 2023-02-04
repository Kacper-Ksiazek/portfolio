// Tools
import { useState } from "react";
import dynamic from "next/dynamic";
// Types
import type { FunctionComponent } from "react";
import type { MUIStyledCommonProps } from "@mui/system";
// Other components
import ContactBase from "./ContactBase";
const Map = dynamic(() => import("./Map"));
import SendMeAnEmail from "./SendMeAnEmail";
import VisibilitySensor from "@/components/utils/VisibilitySensor";
// Styled Components
import LightSectionWrapper from "@/components/atoms/content_placement/SectionWrapper/Light";

const Contact: FunctionComponent<MUIStyledCommonProps> = (props) => {
    const [renderMap, setRenderMap] = useState<boolean>(false);

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
            childrenOutsideContentWrapper={renderMap ? <Map /> : <></>}
        >
            <VisibilitySensor
                offsetBottom={400} //
                dontRenderNotVisableChildren
                childWrapperSx={{
                    height: "100%",
                    flexGrow: 1,
                    display: "flex",
                }}
                onVisible={() => {
                    console.log("Contact section is now visible!!!");
                    setRenderMap(true);
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
