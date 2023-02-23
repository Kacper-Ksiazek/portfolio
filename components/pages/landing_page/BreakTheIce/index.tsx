// Tools
import { repeat } from "@/utils/client/styled/repeat";
import { fadeSimple } from "@/components/keyframes/intro";
import { useBackgroundLetter } from "./hooks/useBackgroundLetter";
import { useLazyLoadedImages } from "@/hooks/useLazyLoadedImages";
import * as NavigationBetweenSectionsCSSClasses from "@/components/atoms/NavigationBetweenSections/CSSClasses";
// Types
import type { FunctionComponent } from "react";
import type { Hobby, School } from "@prisma/client";
import type { PreviousJob } from "@/@types/pages/LandingPage";
import type { IceBreakingStage } from "@/components/pages/landing_page/BreakTheIce/@types";
// Other components
import Content from "./Content";
import Picture from "./Picture";
import NavigationBetweenStages from "./NavigationBetweenStages";
import { BreakTheIceContextProvider } from "./contexts/BreakTheIceContentContext";
// Styled Components
import BreakTheIceBase from "./styled_components/BreakTheIceBase";
import LightSectionWrapper from "@/components/atoms/content_placement/SectionWrapper/Light";

const BreakTheIce: FunctionComponent = () => {
    const letter = useBackgroundLetter();

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

    return (
        <LightSectionWrapper
            round="left"
            header={{
                label: `Let's break the ice`,
                main: "About me",
                additionalJSX: {
                    node: <NavigationBetweenStages />,
                    whenVisible: {
                        [`.${NavigationBetweenSectionsCSSClasses.STEP_WRAPPER}`]: repeat(5, (index) => ({
                            animation: `${fadeSimple} .2s ${0.6 + index * 0.1}s both linear`,
                        })),
                    },
                },
            }}
            backgroundLetter={letter}
            id="about-me"
            contentWrapperSx={{ display: "flex" }}
        >
            <BreakTheIceBase>
                <Content />
                <Picture />
            </BreakTheIceBase>
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
