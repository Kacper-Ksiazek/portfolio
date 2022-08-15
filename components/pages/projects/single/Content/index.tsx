// Tools
import dynamic from "next/dynamic";
import useWindowSizes from "@/hooks/useWindowSizes";
import fadeSimple from "@/components/_keyframes/intro/fadeSimple";
import formatTextViaBolding from "@/utils/client/formatTextViaBolding";
// Types
import type { FunctionComponent } from "react";
import type { Project } from "@/@types/pages/projects/SingleProject";
// Other components
import Redirects from "./Redirects";
import ImagesWrapper from "./Images";
import Duration from "../../../_shared/single-project/Duration";
import VisibilitySensor from "@/components/_utils/VisibilitySensor";
const MobileFeaturesList = dynamic(() => import("./MobileFeaturesList"));
import DisplayTechnologies from "@/components/_utils/DisplayTechnologies";
import { Paragraph, Header, ShortDescription } from "./styled_components/Text";
import ProjectDescriptionWrapper from "./styled_components/ProjectDescriptionWrapper";
import LightSectionWrapper from "@/components/_styled_components/content_placement/SectionWrapper/Light";
// Styled components

interface SingleProjectContentProps {
    project: Project;
}

const SingleProjectContent: FunctionComponent<SingleProjectContentProps> = ({ project }) => {
    const { width } = useWindowSizes();

    const renderMobileFeaturesList = width <= 1000;

    return (
        <LightSectionWrapper
            header={{
                label: "Project",
                main: project.title,
                additionalJSX: (
                    <>
                        <Duration
                            start={project.start} //
                            end={project.end}
                            sx={{
                                animation: `${fadeSimple} .2s .6s both linear`,
                                ["@media (max-width:1000px)"]: {
                                    marginBottom: "8px",
                                },
                            }}
                        />
                        <DisplayTechnologies
                            technologies={project.technologies} //
                            firstAnimationDelay={0.8}
                        />
                    </>
                ),
                estimatedHeight: "180px",
            }}
            round="left"
            unlimitedHeight
        >
            <ShortDescription>{formatTextViaBolding(project.shortDescription, true)}</ShortDescription>

            <ImagesWrapper
                features={project.features} //
                folder={project.folder}
                renderMobileFeaturesList={renderMobileFeaturesList}
            />

            <VisibilitySensor>
                <ProjectDescriptionWrapper>
                    <Header>Introduction and quick overview</Header>
                    <Paragraph>{formatTextViaBolding(project.description.introduction, true)}</Paragraph>

                    <Header>The purpose of the application</Header>
                    <Paragraph>{formatTextViaBolding(project.description.purpose, true)}</Paragraph>

                    <Header>Conclusion and finals thoughts</Header>
                    <Paragraph>{formatTextViaBolding(project.description.conclusion, true)}</Paragraph>

                    {renderMobileFeaturesList && (
                        <MobileFeaturesList
                            features={project.features} //
                            folder={project.folder}
                        />
                    )}

                    <Redirects githubURL={project.githubURL} liveDemoURL={project.liveDemoURL} />
                </ProjectDescriptionWrapper>
            </VisibilitySensor>
        </LightSectionWrapper>
    );
};

export default SingleProjectContent;
