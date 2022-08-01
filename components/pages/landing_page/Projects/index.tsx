// Tools
import { styled } from "@mui/system";
// Types
import type { FunctionComponent } from "react";
import type { Project } from "@/@types/pages/LandingPage";
// Other components
import SingleProject from "./SingleProject";
import LightSectionWrapper from "@/components/_styled_components/content_placement/SectionWrapper/Light";
// Styled components
const ProjectsWrapper = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    marginBottom: "50px",
}));

interface ProjectsProps {
    projects: Project[];
}

const Projects: FunctionComponent<ProjectsProps> = ({ projects }) => {
    return (
        <LightSectionWrapper
            header={{
                label: "Insight into my work",
                main: "Projects",
                additionalJSX: (
                    <span>I have always found building larger scale projects the best way to learn thouroughly new technologies, thus in 3 years I managed to create a nice collection</span>
                ),
            }}
            round="right"
            unlimitedHeight
            id="projects"
        >
            <ProjectsWrapper>
                {projects.map((item, index) => {
                    return (
                        <SingleProject
                            key={item.id} //
                            data={item}
                            isFirst={index === 0}
                            isLast={index === projects.length - 1}
                            order={index % 2 === 0 ? "even" : "odd"}
                        />
                    );
                })}
            </ProjectsWrapper>
        </LightSectionWrapper>
    );
};

export default Projects;
