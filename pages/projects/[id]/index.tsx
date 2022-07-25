// Tools
import { getStaticPaths, getStaticProps } from "./nextjs_routing_methods";
// Types
import type { NextPage } from "next";
import type { Project } from "@/@types/pages/projects/SingleProject";
// Other components
import Head from "next/head";
import Duration from "@/components/pages/projects/single/Duration";
import ImagesWrapper from "@/components/pages/projects/single/Images";
import DisplayTechnologies from "@/components/_utils/DisplayTechnologies";
import { Paragraph, Header } from "@/components/pages/projects/single/TextStyledComponents";
import LightSectionWrapper from "@/components/_styled_components/content_placement/SectionWrapper/Light";

interface SingleProjectProps {
    project: Project;
}

const SingleProject: NextPage<SingleProjectProps> = ({ project }) => {
    return (
        <>
            <Head>
                <title>{project.title}</title>
            </Head>
            <LightSectionWrapper
                header={{
                    label: "Project",
                    main: project.title,
                    additionalJSX: (
                        <>
                            <Duration start={project.start} end={project.end} />
                            <DisplayTechnologies technologies={project.technologies} />
                        </>
                    ),
                }}
                round="left"
                unlimitedHeight
            >
                <Paragraph>{project.shortDescription}</Paragraph>

                <ImagesWrapper features={project.features} folder={project.folder} />

                <Header>Introduction and quick overview</Header>
                <Paragraph>{project.description.introduction}</Paragraph>

                <Header>The purpose of the application</Header>
                <Paragraph>{project.description.purpose}</Paragraph>

                <Header>Conclusion and finals thoughts</Header>
                <Paragraph>{project.description.conclusion}</Paragraph>
            </LightSectionWrapper>
        </>
    );
};

export default SingleProject;

export { getStaticPaths, getStaticProps };
