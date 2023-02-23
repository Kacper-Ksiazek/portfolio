// Tools
import dynamic from "next/dynamic";
import { useState, useMemo } from "react";
import { useMapContext } from "./hooks/useMapContext";
import fadeSimpleOUT from "@/components/keyframes/outro/fadeSimpleOUT";
// Types
import type { Styles } from "@/@types/MUI";
import type { FunctionComponent, ReactNode } from "react";
import type { GeneralContactSection, EmailFormSubsection } from "./@types";
// Other components
const Map = dynamic(() => import("./Map"));
import VisibilitySensor from "@/components/utils/VisibilitySensor";
import NavigationBetweenSections from "@/components/atoms/NavigationBetweenSections";
// Styled Components
import LightSectionWrapper from "@/components/atoms/content_placement/SectionWrapper/Light";

interface ContactWrapperProps {
    children: ReactNode;

    hideContent: boolean;
    emailFormSubsection: EmailFormSubsection;
    currentGeneralSection: GeneralContactSection;
    setCurrentGeneralSection: (val: GeneralContactSection) => void;
}

const ContactWrapper: FunctionComponent<ContactWrapperProps> = (props) => {
    const [renderMap, setRenderMap] = useState<boolean>(false);
    const { status } = useMapContext();

    const backgroundLetterSx = useMemo<Styles>(() => {
        switch (props.currentGeneralSection) {
            case "SEND_EMAIL_FORM":
                return {
                    opacity: 0,
                    transition: "opacity 1s",
                };
            case "WAYS_TO_REACH_ME":
                return {
                    opacity: 1,
                    transition: "opacity 1s .8s",
                };
        }
    }, [props.currentGeneralSection]);

    return (
        <LightSectionWrapper
            header={{
                main: "Contact",
                label: "How to reach me",
                additionalJSX: {
                    node: (
                        <NavigationBetweenSections
                            sections={
                                [
                                    {
                                        label: "Ways to reach me",
                                        value: "WAYS_TO_REACH_ME",
                                    },
                                    {
                                        label: "Send me an email",
                                        value: "SEND_EMAIL_FORM",
                                    },
                                ] as { label: string; value: GeneralContactSection }[]
                            } //
                            subtleBackground
                            currentSection={props.currentGeneralSection}
                            onChoose={(val) => props.setCurrentGeneralSection(val as any)}
                        />
                    ),
                    whenVisible: {},
                },
            }}
            backgroundLetter="R"
            round="left"
            id="contact"
            backgroundLetterSx={backgroundLetterSx}
            childrenOutsideContentWrapper={
                renderMap ? (
                    <Map
                        status={status} //
                        emailFormSubsection={props.emailFormSubsection}
                        currentGeneralSection={props.currentGeneralSection}
                    />
                ) : (
                    <></>
                )
            }
        >
            <VisibilitySensor
                offsetBottom={400} //
                dontRenderNotVisableChildren
                childWrapperSx={{
                    height: "100%",
                    flexGrow: 1,
                    display: "flex",
                    ...(props.hideContent ? { animation: `${fadeSimpleOUT} .3s both linear` } : {}),
                }}
                onVisible={() => {
                    setRenderMap(true);
                }}
            >
                {props.children}
            </VisibilitySensor>
        </LightSectionWrapper>
    );
};

export default ContactWrapper;
