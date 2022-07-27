// Types
import type { FunctionComponent } from "react";
import type { Project } from "@/@types/pages/projects/SingleProject";
// Other components
import Duration from "./Duration";
import Redirects from "./Redirects";
import ImagesWrapper from "./Images";
import { Paragraph, Header } from "./TextStyledComponents";
import DisplayTechnologies from "@/components/_utils/DisplayTechnologies";
import LightSectionWrapper from "@/components/_styled_components/content_placement/SectionWrapper/Light";

interface SingleProjectContentProps {
    project: Project;
}

const SingleProjectContent: FunctionComponent<SingleProjectContentProps> = ({ project }) => {
    return (
        <LightSectionWrapper
            header={{
                label: "Project",
                main: project.title,
                additionalJSX: (
                    <>
                        <Duration start={project.start} end={project.end} />
                        <DisplayTechnologies technologies={project.technologies} />
                    </>
                ),
            }}
            round="left"
            unlimitedHeight
        >
            <Paragraph>{project.shortDescription}</Paragraph>

            <ImagesWrapper features={project.features} folder={project.folder} />

            <Header>Introduction and quick overview</Header>
            <Paragraph>{project.description.introduction}</Paragraph>

            <Header>The purpose of the application</Header>
            <Paragraph>{project.description.purpose}</Paragraph>

            <Header>Conclusion and finals thoughts</Header>
            <Paragraph>{project.description.conclusion}</Paragraph>

            <Redirects githubURL={project.githubURL} liveDemoURL={project.liveDemoURL} />
        </LightSectionWrapper>
    );
};

export default SingleProjectContent;
