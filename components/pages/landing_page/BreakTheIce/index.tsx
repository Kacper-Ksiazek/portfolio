// Tools
import { useBackgroundLetter } from "./hooks/useBackgroundLetter";
import { useLazyLoadedImages } from "@/hooks/useLazyLoadedImages";
import { generateFadeSimpleAnimations } from "@/components/atoms/NavigationBetweenSections/helpers/generateFadeSimpleAnimations";
// Types
import type { FunctionComponent } from "react";
import type { Hobby, School } from "@prisma/client";
import type { PreviousJob } from "@/@types/pages/LandingPage";
import type { IceBreakingStage } from "@/components/pages/landing_page/BreakTheIce/@types";
// Other components
import Content from "./Content";
import Picture from "./Picture";
import NavigationBetweenStages from "./NavigationBetweenStages";
import RenderWhenVisible from "@/components/utils/RenderWhenVisible";
import { BreakTheIceContextProvider } from "./contexts/BreakTheIceContentContext";
// Styled Components
import BreakTheIceBase from "./Base";
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
                        ...generateFadeSimpleAnimations(5),
                    },
                },
            }}
            backgroundLetter={letter}
            id="about-me"
            contentWrapperSx={{ display: "flex" }}
        >
            <RenderWhenVisible
                sx={{
                    flexGrow: 1, //
                    display: "flex",
                    "@media (max-width:1000px)": {
                        minHeight: "1100px",
                    },
                }}
            >
                <BreakTheIceBase>
                    <Content />
                    <Picture />
                </BreakTheIceBase>
            </RenderWhenVisible>
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
