// Tools
import { styled, alpha } from "@mui/material";
import { fadeFromLeft } from "@/components/keyframes/intro";
import { CSS_REFERENCES } from "landing_page/css_references";
// Types
import type { FunctionComponent } from "react";
import type { Project } from "@/@types/pages/LandingPage";
// Other components
import SingleProjectRow from "./SingleProjectRow";
import { ProjectsContextProvider } from "./context";
import LightSectionWrapper from "@/components/atoms/content_placement/SectionWrapper/Light";
import formatTextViaBolding from "@/utils/client/formatTextViaBolding";
// Styled components
const ProjectsWrapper = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    margin: "24px 0 50px 0",
    // background: "red",
    ["@media (max-width:750px)"]: {
        alignItems: "center",
    },
}));

const ParagraphForHeader = styled("p")(({ theme }) => ({
    margin: "4px 0 0 0",
    fontSize: "18px",
    color: alpha(theme.palette.text.primary, 0.8),
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
                            {formatTextViaBolding(
                                `I've always believed that tackling more complex and larger projects is the most effective way to thoroughly learn new technologies. In the *span of 4 years*, I've accumulated a substantial collection of such projects. Here are *some* of my favorites:`
                            )}
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
            id={CSS_REFERENCES.PROJECTS}
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
