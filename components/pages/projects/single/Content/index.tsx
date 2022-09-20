// Types
import type { FunctionComponent } from "react";
import type { Project } from "@/@types/pages/projects/SingleProject";
// Other components
import ProjectDescription from "./ProjectDescription";
import FeaturesList from "./FeaturesList";
import LightSectionWrapper from "@/components/atoms/content_placement/SectionWrapper/Light";
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
            <ProjectDescription description={project.description} amountOfFeatures={project.features.length} />

            <FeaturesList
                features={project.features} //
                folder={project.folder}
            />
        </LightSectionWrapper>
    );
};

export default SingleProjectContent;
