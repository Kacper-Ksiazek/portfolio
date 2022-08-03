// Tools
import { styled } from "@mui/system";
import fadeSimple from "@/components/_keyframes/intro/fadeSimple";
import fadeFromLeft from "@/components/_keyframes/intro/fadeFromLeft";
import fadeFromBottom from "@/components/_keyframes/intro/fadeFromBottom";
import formatTextViaBolding from "@/utils/client/formatTextViaBolding";
// Types
import type { FunctionComponent } from "react";
import type { Project } from "@/@types/pages/projects/SingleProject";
// Other components
import Redirects from "./Redirects";
import ImagesWrapper from "./Images";
import { Paragraph, Header } from "./TextStyledComponents";
import Duration from "../../../_shared/single-project/Duration";
import VisibilitySensor from "@/components/_utils/VisibilitySensor";
import DisplayTechnologies from "@/components/_utils/DisplayTechnologies";
import LightSectionWrapper from "@/components/_styled_components/content_placement/SectionWrapper/Light";
// Styled components
const DescriptionWrapper = styled("div")(({ theme }) => ({
    "p, h3, a": {
        visibility: "hidden",
    },
    "&.visible": {
        "p, h3, a": {
            visibility: "visible",
        },
        h3: {
            "&:nth-of-type(1)": {
                animation: `${fadeFromLeft} .3s .2s both linear`,
            },
            "&:nth-of-type(2)": {
                animation: `${fadeFromLeft} .3s .3s both linear`,
            },
            "&:nth-of-type(3)": {
                animation: `${fadeFromLeft} .3s .4s both linear`,
            },
        },
        p: {
            "&:nth-of-type(1)": {
                animation: `${fadeFromLeft} .3s .25s both linear`,
            },
            "&:nth-of-type(2)": {
                animation: `${fadeFromLeft} .3s .35s both linear`,
            },
            "&:nth-of-type(3)": {
                animation: `${fadeFromLeft} .3s .45s both linear`,
            },
        },
        a: {
            animation: `${fadeFromBottom} .3s 1s both linear`,
        },
    },
}));

interface SingleProjectContentProps {
    project: Project;
}

const SingleProjectContent: FunctionComponent<SingleProjectContentProps> = ({ project }) => {
    return (
        <LightSectionWrapper
            header={{
                label: "Project",
                main: project.title,
                additionalJSX: (
                    <>
                        <Duration
                            start={project.start} //
                            end={project.end}
                            sx={{ animation: `${fadeSimple} .2s .6s both linear` }}
                        />
                        <DisplayTechnologies technologies={project.technologies} firstAnimationDelay={0.8} />
                    </>
                ),
                estimatedHeight: "180px",
            }}
            round="left"
            unlimitedHeight
        >
            <Paragraph sx={{ animation: `${fadeFromLeft} .3s 1s both linear` }}>{formatTextViaBolding(project.shortDescription, true)}</Paragraph>

            <ImagesWrapper features={project.features} folder={project.folder} />

            <VisibilitySensor>
                <DescriptionWrapper>
                    <Header>Introduction and quick overview</Header>
                    <Paragraph>{formatTextViaBolding(project.description.introduction, true)}</Paragraph>

                    <Header>The purpose of the application</Header>
                    <Paragraph>{formatTextViaBolding(project.description.purpose, true)}</Paragraph>

                    <Header>Conclusion and finals thoughts</Header>
                    <Paragraph>{formatTextViaBolding(project.description.conclusion, true)}</Paragraph>

                    <Redirects githubURL={project.githubURL} liveDemoURL={project.liveDemoURL} />
                </DescriptionWrapper>
            </VisibilitySensor>
        </LightSectionWrapper>
    );
};

export default SingleProjectContent;
