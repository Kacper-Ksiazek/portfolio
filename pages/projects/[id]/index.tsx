// Tools
import { getStaticPaths, getStaticProps } from "./nextjs_routing_methods";
// Types
import type { NextPage } from "next";
import type { Project } from "@/@types/pages/projects/SingleProject";
// Other components
import Head from "next/head";
import Content from "@/components/pages/projects/single/Content";
import ReleventTechnologies from "@/components/pages/projects/single/ReleventTechnologies";

interface SingleProjectProps {
    project: Project;
}

const SingleProject: NextPage<SingleProjectProps> = ({ project }) => {
    return (
        <>
            <Head>
                <title>{project.title}</title>
            </Head>
            <Content project={project} />
            <ReleventTechnologies techStack={project.releventTechnologies} />
        </>
    );
};

export default SingleProject;

export { getStaticPaths, getStaticProps };
