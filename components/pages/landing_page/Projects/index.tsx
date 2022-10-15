// Tools
import { styled } from "@mui/system";
import { useEffect, useState } from "react";
import useWindowSizes from "@/hooks/useWindowSizes";
import fadeFromLeft from "@/components/keyframes/intro/fadeFromLeft";
// Types
import type { FunctionComponent } from "react";
import type { Project } from "@/@types/pages/LandingPage";
// Other components
import SingleProjectRow from "./SingleProjectRow";
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
    animation: `${fadeFromLeft} .3s .7s both linear`,
}));

interface ProjectsProps {
    projects: Project[];
}

const Projects: FunctionComponent<ProjectsProps> = ({ projects }) => {
    const { width } = useWindowSizes();
    const [numberOfTechnologiesToDisplay, setNumberOfTechnologiesToDisplay] = useState<number>(5);

    useEffect(() => {
        if (width > 1600) setNumberOfTechnologiesToDisplay(5);
        else if (width <= 1600 && width > 1480) setNumberOfTechnologiesToDisplay(4);
        else if (width <= 1480 && width > 1350) setNumberOfTechnologiesToDisplay(3);
        else if (width <= 1350 && width > 1200) setNumberOfTechnologiesToDisplay(4);
        else if (width <= 1200 && width > 1000) setNumberOfTechnologiesToDisplay(3);
        else setNumberOfTechnologiesToDisplay(5);
    }, [width]);

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
                        <SingleProjectRow
                            key={item.id} //
                            data={item}
                            index={index}
                            isFirst={index === 0}
                            isLast={index === projects.length - 1}
                            order={index % 2 === 0 ? "even" : "odd"}
                            numberOfTechnologiesToDisplay={numberOfTechnologiesToDisplay}
                        />
                    );
                })}
            </ProjectsWrapper>
        </LightSectionWrapper>
    );
};

export default Projects;
