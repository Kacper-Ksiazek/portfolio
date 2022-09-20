// Types
import type { FunctionComponent } from "react";
import type { Project } from "@/@types/pages/projects/SingleProject";
// Other components
import ParagraphWrapper from "./ParagraphWrapper";
import VisibilitySensor from "@/components/utils/VisibilitySensor";
// Styled components
import ProjectDescriptionBase from "./Base";

interface ProjectDescriptionWrapperProps {
    description: Project["description"];
    amountOfFeatures: number;
}

const ProjectDescription: FunctionComponent<ProjectDescriptionWrapperProps> = ({ description, amountOfFeatures }) => {
    return (
        <VisibilitySensor>
            <ProjectDescriptionBase>
                <ParagraphWrapper
                    header="Introduction and quick overview" //
                    body={description.introduction}
                />
                <ParagraphWrapper
                    header="The purpose of the application" //
                    body={description.purpose}
                />
                <ParagraphWrapper
                    header="Conclusion and finals thoughts" //
                    body={description.conclusion}
                />
                <ParagraphWrapper
                    header="Features gallery" //
                    body={`This particular project includes *${amountOfFeatures}* features in total.`}
                />
            </ProjectDescriptionBase>
        </VisibilitySensor>
    );
};

export default ProjectDescription;
