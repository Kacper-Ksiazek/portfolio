// Tools
import { fadeFromTop } from "@/components/keyframes/intro";
import { useResponsiveAmounts } from "./hooks/useResponsiveAmounts";
import formatTextViaBolding from "@/utils/client/formatTextViaBolding";
// Types
import type { FunctionComponent } from "react";
import type { RecommendedProject } from "@/@types/pages/projects/SingleProject";
// Other components
import RecommendedProjectsBase from "./Base";
import Carousel from "@/components/utils/Carousel";
import SingleRecommendedProject from "./SingleRecommendedProject";
import LightSectionWrapper from "@/components/atoms/content_placement/SectionWrapper/Light";

interface RecommendedProjectsProps {
    recommendedProjects: RecommendedProject[];
}

const RecommendedProjects: FunctionComponent<RecommendedProjectsProps> = ({ recommendedProjects }) => {
    const { numberOfProjectsToDisplay, numberOfTechnologiesToDisplay, width } = useResponsiveAmounts();

    return (
        <LightSectionWrapper
            header={{
                label: "See more",
                main: "Rest of my work",
                additionalJSX: {
                    node: (
                        <span style={{ fontSize: "18px" }} className="information-about-the-number-of-projects">
                            {formatTextViaBolding(`There are *${recommendedProjects.length}* more projects to see`, true)}
                            {/*  */}
                        </span>
                    ),
                    whenVisible: {
                        ".information-about-the-number-of-projects": {
                            animation: `${fadeFromTop} .3s .5s both linear`,
                        },
                    },
                },
            }}
            round="right"
            unlimitedHeight
        >
            <RecommendedProjectsBase key={width}>
                <Carousel
                    itemsInTotal={recommendedProjects.length} //
                    itemsPerSlide={numberOfProjectsToDisplay}
                    spacing={40}
                    navigationSx={{ mt: "48px" }}
                    disableAutomaticHeight
                    navigationPosition="center"
                >
                    {recommendedProjects.map((item, index) => {
                        return (
                            <SingleRecommendedProject
                                key={item.id} //
                                index={index}
                                data={item}
                                numberOfTechnologiesToDisplay={numberOfTechnologiesToDisplay}
                            />
                        );
                    })}
                </Carousel>
            </RecommendedProjectsBase>
        </LightSectionWrapper>
    );
};

export default RecommendedProjects;
