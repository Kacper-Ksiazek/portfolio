// Tools
import { styled } from "@mui/material";
import { fadeFromLeft } from "@/components/keyframes/intro";
// Types
import type { FunctionComponent } from "react";
import type { Project } from "@/@types/pages/LandingPage";
// Other components
import SingleProjectRow from "./SingleProjectRow";
import { ProjectsContextProvider } from "./context";
import LightSectionWrapper from "@/components/atoms/content_placement/SectionWrapper/Light";
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
                additionalJSX: {
                    node: (
                        <ParagraphForHeader className="project-header-paragraph">
                            I have always found building more complex and bigger projects the best way to thoroughly learn new technologies, thus in 3 years I managed to amass a nice collection of
                            them.
                        </ParagraphForHeader>
                    ),
                    whenVisible: {
                        ".project-header-paragraph": {
                            animation: `${fadeFromLeft} .3s .7s both linear`,
                        },
                    },
                },
            }}
            round="right"
            unlimitedHeight
            id="projects"
        >
            <ProjectsContextProvider>
                <ProjectsWrapper>
                    {projects.map((item, index) => {
                        return (
                            <SingleProjectRow
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
            </ProjectsContextProvider>
        </LightSectionWrapper>
    );
};

export default Projects;
