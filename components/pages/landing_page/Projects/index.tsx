// Tools
import { styled } from "@mui/system";
// Types
import type { FunctionComponent } from "react";
import type { Project } from "@/@types/pages/LandingPage";
// Other components
import SingleProject from "./SingleProject";
import LightSectionWrapper from "@/components/atoms/content_placement/SectionWrapper/Light";
import fadeFromLeft from "@/components/_keyframes/intro/fadeFromLeft";
// Styled components
const ProjectsWrapper = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    margin: "24px 0 50px 0",
    ["@media (max-width:750px)"]: {
        alignItems: "center",
    },
}));

const ParagraphForHeader = styled("p")(({ theme }) => ({
    margin: "4px 0 0 0",
    fontSize: "18px",
    animation: `${fadeFromLeft} .3s .7s both linear`,
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
                    <ParagraphForHeader>
                        I have always found building more complex and bigger projects the best way to thoroughly learn new technologies, thus in 3 years I managed to amass a nice collection of them.
                    </ParagraphForHeader>
                ),
                estimatedHeight: "134px",
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
                            index={index}
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
