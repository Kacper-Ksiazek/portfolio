// Tools
import theme from "@/material";
import dynamic from "next/dynamic";
import { alpha } from "@mui/system";
import { useState, useMemo } from "react";
import { useMapContext } from "./hooks/useMapContext";
// Types
import type { SxProps } from "@mui/system";
import type { FunctionComponent } from "react";
// Other components
const Map = dynamic(() => import("./Map"));
import WaysToReachMe from "./WaysToReachMe";
import SendMeAnEmail from "./SendMeAnEmail";
import MapContextProvider from "./mapContext/Provider";
import VisibilitySensor from "@/components/utils/VisibilitySensor";
import NavigationBetweenSections from "@/components/atoms/NavigationBetweenSections";
// Styled Components
import LightSectionWrapper from "@/components/atoms/content_placement/SectionWrapper/Light";

const Contact: FunctionComponent = () => {
    const [renderMap, setRenderMap] = useState<boolean>(false);
    const { status } = useMapContext();

    const [currentSection, setCurrentSection] = useState<"Send me an email" | "Ways to reach me">("Send me an email");

    const backgroundLetterSx = useMemo<SxProps>(() => {
        switch (status) {
            case "success":
                return {
                    color: alpha(theme.palette.success.main, 0.1),
                    transition: "color .5s .6s",
                };
            case "error":
                return {
                    color: alpha(theme.palette.error.main, 0.1),
                    transition: "color .5s .6s",
                };
        }
        return {
            transition: "color .5s",
        };
    }, [status]);

    return (
        <LightSectionWrapper
            header={{
                main: "Contact",
                label: "How to reach me",
                estimatedHeight: "170px",
                additionalJSX: (
                    <NavigationBetweenSections
                        sections={["Ways to reach me", "Send me an email"]} //
                        currentSection={currentSection}
                        onChoose={(val) => setCurrentSection(val as any)}
                    />
                ),
            }}
            backgroundLetter="R"
            round="left"
            id="contact"
            backgroundLetterSx={backgroundLetterSx}
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
                {currentSection === "Ways to reach me" && <WaysToReachMe writeToMe={() => setCurrentSection("Send me an email")} />}
                {currentSection === "Send me an email" && <SendMeAnEmail />}
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
