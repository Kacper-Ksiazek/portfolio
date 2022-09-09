// Tools
import { useState } from "react";
import formatTextViaBolding from "@/utils/client/formatTextViaBolding";
// Types
import type { FunctionComponent } from "react";
import type { Project } from "@/@types/pages/projects/SingleProject";
// Other components
import OutlinedRedirect from "./OutlinedRedirect";
import ThumbnailPreview from "./ThumbnailPreview";
import LandingPageBase from "./LandingSectionBase";
import Technologies from "@/components/_utils/DisplayTechnologies";
import Duration from "@/components/pages/_shared/single-project/Duration";
// Styled components
import BottomControlsWrapper from "./styled_components/BottomControlsWrapper";
import { MainHeader, Description } from "./styled_components/textStyledComponents";

interface ProjectLandingPageProps {
    project: Project;
}

const ProjectLandingPage: FunctionComponent<ProjectLandingPageProps> = (props) => {
    return (
        <LandingPageBase folder={props.project.folder}>
            <Duration start={props.project.start} end={props.project.end} />
            <MainHeader>{props.project.title}</MainHeader>
            <Technologies technologies={props.project.technologies} />
            <Description>{formatTextViaBolding(props.project.shortDescription, true)}</Description>
            {/*  */}
            <BottomControlsWrapper>
                <div className="simple-flex">
                    <OutlinedRedirect url={props.project.githubURL} title="Github repo" />
                    <OutlinedRedirect url={props.project.githubURL} title="Live demo" />
                </div>
                <ThumbnailPreview />
            </BottomControlsWrapper>
        </LandingPageBase>
    );
};

export default ProjectLandingPage;
