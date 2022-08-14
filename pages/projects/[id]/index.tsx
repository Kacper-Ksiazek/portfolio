// Tools
import { getStaticPaths, getStaticProps } from "./nextjs_routing_methods";
// Types
import type { NextPage } from "next";
import type { Project, RecommendedProject } from "@/@types/pages/projects/SingleProject";
// Other components
import Head from "next/head";
import Content from "@/components/pages/projects/single/Content";
import RecommendedProjects from "@/components/pages/projects/single/RecommendedProjects";
import ReleventTechnologies from "@/components/pages/projects/single/ReleventTechnologies";

interface SingleProjectProps {
    project: Project;
    recommendedProjects: RecommendedProject[];
}

const SingleProject: NextPage<SingleProjectProps> = ({ project, recommendedProjects }) => {
    return (
        <>
            <Head>
                <title>{project.title}</title>
            </Head>
            <Content project={project} />
            {/* <ReleventTechnologies techStack={project.releventTechnologies} /> */}
            {/* <RecommendedProjects recommendedProjects={recommendedProjects} /> */}
        </>
    );
};

export default SingleProject;

export { getStaticPaths, getStaticProps };
