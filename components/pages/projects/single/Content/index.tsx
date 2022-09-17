// Types
import type { FunctionComponent } from "react";
import type { Project } from "@/@types/pages/projects/SingleProject";
// Other components
import ProjectDescription from "./ProjectDescription";
import FeaturesList from "./FeaturesList";
import { Paragraph, Header, PrimaryStrong } from "./styled_components/Text";
import LightSectionWrapper from "@/components/_styled_components/content_placement/SectionWrapper/Light";
// Styled components

interface SingleProjectContentProps {
    project: Project;
}

const SingleProjectContent: FunctionComponent<SingleProjectContentProps> = ({ project }) => {
    return (
        <LightSectionWrapper
            header={{
                label: "Project",
                main: "Realization details",
                estimatedHeight: "84px",
            }}
            round="left"
            unlimitedHeight
        >
            <ProjectDescription description={project.description} />

            <Header>Features gallery</Header>
            <Paragraph sx={{ mb: "16px" }}>
                This particular project includes <PrimaryStrong>{project.features.length}</PrimaryStrong> features in total.
            </Paragraph>
            <FeaturesList
                features={project.features} //
                folder={project.folder}
            />
        </LightSectionWrapper>
    );
};

export default SingleProjectContent;
