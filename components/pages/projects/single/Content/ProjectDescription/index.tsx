// Types
import type { FunctionComponent } from "react";
import type { Project } from "@/@types/pages/projects/SingleProject";
// Other components
import ParagraphWrapper from "./ParagraphWrapper";
// Styled components
import ProjectDescriptionBase from "./Base";

interface ProjectDescriptionWrapperProps {
    description: Project["description"];
    amountOfFeatures: number;
}

const ProjectDescription: FunctionComponent<ProjectDescriptionWrapperProps> = ({ description, amountOfFeatures }) => {
    return (
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
            {(() => {
                if (amountOfFeatures > 0) {
                    return (
                        <ParagraphWrapper
                            header="Features gallery" //
                            body={`This particular project includes *${amountOfFeatures}* features in total.`}
                        />
                    );
                }
            })()}
        </ProjectDescriptionBase>
    );
};

export default ProjectDescription;
