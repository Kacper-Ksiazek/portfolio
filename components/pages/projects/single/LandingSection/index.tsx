// Tools
import formatTextViaBolding from "@/utils/client/formatTextViaBolding";
// Types
import type { FunctionComponent } from "react";
import type { Project } from "@/@types/pages/projects/SingleProject";
// Other components
import Redirect from "./Redirect";
import ThumbnailPreview from "./ThumbnailPreview";
import LandingPageBase from "./LandingSectionBase";
import TechnologiesList from "@/components/atoms/TechnologiesList";
import Duration from "@/components/atoms/single_project/Duration";
import { LandingScreenContextProvider } from "./contexts/LandingScreenContext";
// Styled components
import TextWrapper from "./styled_components/TextWrapper";
import BottomControlsWrapper from "./styled_components/BottomControlsWrapper";
import { MainHeader, Description } from "./styled_components/textStyledComponents";

interface ProjectLandingPageProps {
    project: Project;
}

const ProjectLandingPage: FunctionComponent<ProjectLandingPageProps> = ({ project }) => {
    return (
        <LandingPageBase folder={project.folder}>
            <TextWrapper id="project-landing-screen-text-wrapper">
                <Duration
                    start={project.start} //
                    end={project.end}
                    color="#fff"
                />
                <MainHeader id="project-title">
                    <span>{project.title}</span>
                </MainHeader>
                <TechnologiesList technologies={project.technologies} />
                <Description id="project-description">
                    <span>{formatTextViaBolding(project.shortDescription, true)}</span>
                </Description>
            </TextWrapper>
            {/*  */}
            <BottomControlsWrapper id="landing-screen-bottom-controls">
                <div className="simple-flex">
                    <Redirect
                        url={project.githubURL} //
                        title="Github repo"
                    />

                    {(() => {
                        if (project.liveDemoURL) {
                            return <Redirect url={project.liveDemoURL} title="Live demo" />;
                        }
                    })()}
                </div>

                <ThumbnailPreview />
            </BottomControlsWrapper>
        </LandingPageBase>
    );
};

interface ProjectLandingPageWithContextProps {
    project: Project;
}

const ProjectLandingPageWithContext: FunctionComponent<ProjectLandingPageWithContextProps> = (props) => {
    return (
        <LandingScreenContextProvider>
            <ProjectLandingPage project={props.project} />
        </LandingScreenContextProvider>
    );
};

export default ProjectLandingPageWithContext;
