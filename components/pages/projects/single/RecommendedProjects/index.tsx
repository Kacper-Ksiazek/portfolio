// Tools
import { useMemo } from "react";
import { styled } from "@mui/system";
import useWindowSizes from "@/hooks/useWindowSizes";
import fadeFromTop from "@/components/keyframes/intro/fadeFromTop";
import formatTextViaBolding from "@/utils/client/formatTextViaBolding";
// Types
import type { FunctionComponent } from "react";
import type { RecommendedProject } from "@/@types/pages/projects/SingleProject";
// Other components
import Carousel from "@/components/utils/Carousel";
import SingleRecommendedProject from "./SingleRecommendedProject";
import VisibilitySensor from "@/components/utils/VisibilitySensor";
import LightSectionWrapper from "@/components/atoms/content_placement/SectionWrapper/Light";
// Styled components
const ContentWrapper = styled("div")(({ theme }) => ({
    width: "100%",
    marginTop: "16px",
    display: "flex",
    flexGrow: 1,
    flexDirection: "column",
    minHeight: "540px",
}));

const InformationAboutNumberOfProjects = styled("span")(({ theme }) => ({
    animation: `${fadeFromTop} .3s .5s both linear`,
    fontSize: "18px",
}));

interface RecommendedProjectsProps {
    recommendedProjects: RecommendedProject[];
}

const RecommendedProjects: FunctionComponent<RecommendedProjectsProps> = ({ recommendedProjects }) => {
    const { width } = useWindowSizes();

    const getNumberOfProjectsToDisplay = (): number => {
        if (width > 1300) return 3;
        if (width > 680) return 2;
        return 1;
    };

    const numberOfTechnologiesToDisplay = useMemo<number>(() => {
        if (width > 680 && width < 750) return 4;
        if (width <= 680 && width >= 480) return 6;
        if (width > 400) return 5;
        return 4;
    }, [width]);

    return (
        <LightSectionWrapper
            header={{
                label: "See more",
                main: "Rest of my work",
                additionalJSX: (
                    <InformationAboutNumberOfProjects>
                        {formatTextViaBolding(`There are *${recommendedProjects.length}* more projects to see`, true)}
                        {/*  */}
                    </InformationAboutNumberOfProjects>
                ),
                estimatedHeight: "130px",
            }}
            round="right"
        >
            <VisibilitySensor dontRenderNotVisableChildren childWrapperSx={{ flexGrow: 1, display: "flex" }}>
                <ContentWrapper key={width}>
                    <Carousel
                        itemsInTotal={recommendedProjects.length} //
                        itemsPerSlide={getNumberOfProjectsToDisplay()}
                        spacing={40}
                        navigationSx={{ mt: "20px" }}
                        disableAutomaticHeight
                    >
                        {recommendedProjects.map((item, index) => {
                            return (
                                <SingleRecommendedProject
                                    key={item.id} //
                                    data={item}
                                    numberOfTechnologiesToDisplay={numberOfTechnologiesToDisplay}
                                />
                            );
                        })}
                    </Carousel>
                </ContentWrapper>
            </VisibilitySensor>
        </LightSectionWrapper>
    );
};

export default RecommendedProjects;
