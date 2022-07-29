// Tools
// Types
import type { FunctionComponent } from "react";
import type { Project } from "@/@types/pages/LandingPage";

interface ProjectsProps {
    projects: Project[];
}

const Projects: FunctionComponent<ProjectsProps> = ({ projects }) => {
    return (
        <>
            <span>{JSON.stringify(projects)}</span>
        </>
    );
};

export default Projects;
