// Tools
import { useState, useEffect } from "react";
import { useLazyLoadedImages } from "@/hooks/useLazyLoadedImages";
import { useBreakTheIceContentContext } from "@/components/pages/landing_page/BreakTheIce/hooks/useBreakTheIceContentContext";
// Types
import type { FunctionComponent } from "react";
import type { Hobby, School } from "@prisma/client";
import type { PreviousJob } from "@/@types/pages/LandingPage";
import type { IceBreakingStage } from "@/components/pages/landing_page/BreakTheIce/@types";
// Other components
import Content from "./Content";
import Picture from "./Picture";
import NavigationBetweenStages from "./NavigationBetweenStages";
import VisibilitySensor from "@/components/utils/VisibilitySensor";
import { BreakTheIceContextProvider } from "./contexts/BreakTheIceContentContext";
// Styled Components
import BreakTheIceBase from "./styled_components/BreakTheIceBase";
import LightSectionWrapper from "@/components/atoms/content_placement/SectionWrapper/Light";

const BreakTheIce: FunctionComponent = () => {
    const { currentIceBreakingStage } = useBreakTheIceContentContext();

    useLazyLoadedImages({
        id: "ICE_BREAKING_STAGE",
        srcsToLazyLoad: (
            [
                "Competencies", //
                "Education",
                "General",
                "Hobbies",
                "Previous_Jobs",
            ] as IceBreakingStage[]
        ).map((stage) => `/images/landing-page/${stage}.jpg`),
    });

    const [letter, setLetter] = useState<string>("K");

    // Update letter after stage being change
    useEffect(() => {
        const letters: Record<IceBreakingStage, string> = {
            General: "K",
            Competencies: "A",
            Education: "C",
            Hobbies: "P",
            Previous_Jobs: "E",
        };
        setLetter(letters[currentIceBreakingStage]);
    }, [currentIceBreakingStage]);

    return (
        <LightSectionWrapper
            round="left"
            header={{
                label: `Let's break the ice`,
                main: "About me",
                additionalJSX: <NavigationBetweenStages />,
                estimatedHeight: "134px",
            }}
            backgroundLetter={letter}
            id="about-me"
            contentWrapperSx={{ display: "flex" }}
        >
            <VisibilitySensor
                offsetBottom={250} //
                dontRenderNotVisableChildren
                removeVisibleCSSClassIn={2300}
                childWrapperSx={{
                    height: "100%",
                    flexGrow: 1,
                    display: "flex",
                }}
            >
                <BreakTheIceBase>
                    <Content />
                    <Picture />
                </BreakTheIceBase>
            </VisibilitySensor>
        </LightSectionWrapper>
    );
};

interface BreakTheIceWithContextProps {
    hobbies: Hobby[];
    schools: School[];
    previousJobs: PreviousJob[];
}

const BreakTheIceWithContext: FunctionComponent<BreakTheIceWithContextProps> = (props) => {
    return (
        <BreakTheIceContextProvider
            hobbies={props.hobbies} //
            schools={props.schools}
            previousJobs={props.previousJobs}
        >
            <BreakTheIce />
        </BreakTheIceContextProvider>
    );
};

export default BreakTheIceWithContext;
