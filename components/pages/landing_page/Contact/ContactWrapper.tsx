// Tools
import theme from "@/material";
import dynamic from "next/dynamic";
import { alpha } from "@mui/system";
import { useState, useMemo } from "react";
import { useMapContext } from "./hooks/useMapContext";
import fadeSimpleOUT from "@/components/keyframes/outro/fadeSimpleOUT";
// Types
import type { SxProps } from "@mui/system";
import type { GeneralContactSection } from "./@types";
import type { FunctionComponent, ReactNode, Dispatch, SetStateAction } from "react";
// Other components
const Map = dynamic(() => import("./Map"));
import VisibilitySensor from "@/components/utils/VisibilitySensor";
import NavigationBetweenSections from "@/components/atoms/NavigationBetweenSections";
// Styled Components
import LightSectionWrapper from "@/components/atoms/content_placement/SectionWrapper/Light";

interface ContactWrapperProps {
    children: ReactNode;

    hideContent: boolean;
    currentGeneralSection: GeneralContactSection;
    setCurrentGeneralSection: (val: GeneralContactSection) => void;
}

const ContactWrapper: FunctionComponent<ContactWrapperProps> = (props) => {
    const [renderMap, setRenderMap] = useState<boolean>(false);
    const { status } = useMapContext();

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
                        currentSection={props.currentGeneralSection}
                        onChoose={(val) => props.setCurrentGeneralSection(val as any)}
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
