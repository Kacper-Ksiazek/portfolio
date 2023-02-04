// Tools
import theme from "@/material";
import dynamic from "next/dynamic";
import { alpha } from "@mui/system";
import { useState, useMemo } from "react";
import { useMapContext } from "./hooks/useMapContext";
// Types
import type { FunctionComponent } from "react";
// Other components
import ContactBase from "./ContactBase";
const Map = dynamic(() => import("./Map"));
import SendMeAnEmail from "./SendMeAnEmail";
import MapContextProvider from "./mapContext/Provider";
import VisibilitySensor from "@/components/utils/VisibilitySensor";
// Styled Components
import LightSectionWrapper from "@/components/atoms/content_placement/SectionWrapper/Light";

const Contact: FunctionComponent = () => {
    const [renderMap, setRenderMap] = useState<boolean>(false);
    const { status } = useMapContext();

    const alternativeBackgroundLetterColor = useMemo<string>(() => {
        switch (status) {
            case "success":
                return alpha(theme.palette.success.main, 0.1);
            case "error":
                return alpha(theme.palette.error.main, 0.1);
        }
        return "";
    }, [status]);

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
            alternativeBackgroundLetterColor={alternativeBackgroundLetterColor}
            childrenOutsideContentWrapper={renderMap ? <Map status={status} /> : <></>}
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

const ContactWithMapContext: FunctionComponent = () => {
    return (
        <MapContextProvider>
            <Contact />
        </MapContextProvider>
    );
};

export default ContactWithMapContext;
