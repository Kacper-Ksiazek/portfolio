// Tools
import dynamic from "next/dynamic";
// Types
import type { FunctionComponent } from "react";
import type { Project } from "@/@types/pages/projects/SingleProject";
// Other components
import ProjectDescription from "./ProjectDescription";
const FeaturesList = dynamic(() => import("./FeaturesList"));
// Styled components
import LightSectionWrapper from "@/components/atoms/content_placement/SectionWrapper/Light";

interface SingleProjectContentProps {
    project: Project;
}

const SingleProjectContent: FunctionComponent<SingleProjectContentProps> = ({ project }) => {
    const amountOfFeatures: number = project.features.length;

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
            <ProjectDescription
                description={project.description} //
                amountOfFeatures={amountOfFeatures}
            />

            {(() => {
                if (amountOfFeatures > 0) {
                    return (
                        <FeaturesList
                            features={project.features} //
                            folder={project.folder}
                        />
                    );
                }
            })()}
        </LightSectionWrapper>
    );
};

export default SingleProjectContent;
