// Tools
import dynamic from "next/dynamic";
import { useState, useMemo } from "react";
import { useMapContext } from "./hooks/useMapContext";
import { fadeSimpleOUT } from "@/components/keyframes/outro";
import { CSS_REFERENCES } from "landing_page/css_references";
import { useContactNavigation } from "./hooks/useContactNavigation";
import { generateFadeSimpleAnimations } from "@/components/atoms/NavigationBetweenSections/helpers/generateFadeSimpleAnimations";
// Types
import type { Styles } from "@/@types/MUI";
import type { GeneralContactSection } from "./@types";
import type { FunctionComponent, ReactNode } from "react";
import type { SectionElement } from "@/components/atoms/NavigationBetweenSections/@types";
// Other components
const Map = dynamic(() => import("./Map"));
import RenderWhenVisible from "@/components/utils/RenderWhenVisible";
import NavigationBetweenSections from "@/components/atoms/NavigationBetweenSections";
// Styled Components
import LightSectionWrapper from "@/components/atoms/content_placement/SectionWrapper/Light";

interface ContactWrapperProps {
    children: ReactNode;
}

const ContactWrapper: FunctionComponent<ContactWrapperProps> = (props) => {
    const [renderMap, setRenderMap] = useState<boolean>(false);
    const { status } = useMapContext();
    const navigationContext = useContactNavigation();

    const generalSection = navigationContext.stages.generalSection.current;

    const backgroundLetterSx = useMemo<Styles>(() => {
        switch (generalSection) {
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
    }, [generalSection]);

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
                                        props: {
                                            id: CSS_REFERENCES.CONTACT_ME_OPEN_EMAIL_FORM_BUTTON,
                                        },
                                    },
                                ] as SectionElement<GeneralContactSection>[]
                            } //
                            currentSection={generalSection}
                            onChoose={(val: string) => navigationContext.updaters.setCurrentGeneralSection(val as any)}
                        />
                    ),
                    whenVisible: {
                        ...generateFadeSimpleAnimations(2),
                    },
                },
            }}
            backgroundLetter="R"
            round="left"
            id={CSS_REFERENCES.CONTACT_ME}
            backgroundLetterSx={backgroundLetterSx}
            childrenOutsideContentWrapper={
                renderMap ? (
                    <Map
                        status={status} //
                        emailFormSubsection={navigationContext.stages.form.current}
                        currentGeneralSection={generalSection}
                    />
                ) : (
                    <></>
                )
            }
        >
            <RenderWhenVisible
                onVisible={() => setRenderMap(true)} //
                sx={{
                    flexGrow: 1,
                    ...(navigationContext.stages.generalSection.isChanging ? { animation: `${fadeSimpleOUT} .3s both linear` } : {}),
                    minHeight: "600px",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                {props.children}
            </RenderWhenVisible>
        </LightSectionWrapper>
    );
};

export default ContactWrapper;
