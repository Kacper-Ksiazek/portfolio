// Types
import type { FunctionComponent } from "react";
import type { Project } from "@/@types/pages/projects/SingleProject";
// Other components
import ParagraphWrapper from "../ParagraphWrapper";
import VisibilitySensor from "@/components/_utils/VisibilitySensor";
// Styled components
import ProjectDescriptionBase from "./Base";

interface ProjectDescriptionWrapperProps {
    description: Project["description"];
}

const ProjectDescription: FunctionComponent<ProjectDescriptionWrapperProps> = ({ description }) => {
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
            </ProjectDescriptionBase>
        </VisibilitySensor>
    );
};

export default ProjectDescription;
