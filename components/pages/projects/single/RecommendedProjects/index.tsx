// Tools
import { styled } from "@mui/system";
import fadeFromTop from "@/components/_keyframes/intro/fadeFromTop";
// Types
import type { FunctionComponent } from "react";
import type { RecommendedProject } from "@/@types/pages/projects/SingleProject";
// Other components
import Carousel from "@/components/_utils/Carousel";
import SingleRecommendedProject from "./SingleRecommendedProject";
import VisibilitySensor from "@/components/_utils/VisibilitySensor";
import LightSectionWrapper from "@/components/_styled_components/content_placement/SectionWrapper/Light";
// Styled components
const ContentWrapper = styled("div")(({ theme }) => ({
    width: "100%",
    ".carosuel-wrapper": {
        height: "540px",
    },
}));

const InformationAboutNumberOfProjects = styled("span")(({ theme }) => ({
    animation: `${fadeFromTop} .3s .5s both linear`,
}));

interface RecommendedProjectsProps {
    recommendedProjects: RecommendedProject[];
}

const RecommendedProjects: FunctionComponent<RecommendedProjectsProps> = ({ recommendedProjects }) => {
    return (
        <LightSectionWrapper
            header={{
                label: "See more",
                main: "Rest of my work",
                additionalJSX: (
                    <InformationAboutNumberOfProjects>
                        There are <strong>{recommendedProjects.length}</strong> more projects to see
                    </InformationAboutNumberOfProjects>
                ),
                estimatedHeight: "130px",
            }}
            round="right"
        >
            <VisibilitySensor dontRenderNotVisableChildren childWrapperSx={{ flexGrow: 1 }}>
                <ContentWrapper>
                    <Carousel
                        itemsInTotal={recommendedProjects.length} //
                        itemsPerSlide={3}
                        spacing={40}
                        navigationSx={{ mt: "20px" }}
                    >
                        {recommendedProjects.map((item, index) => {
                            return <SingleRecommendedProject key={item.id} data={item} />;
                        })}
                    </Carousel>
                </ContentWrapper>
            </VisibilitySensor>
        </LightSectionWrapper>
    );
};

export default RecommendedProjects;
