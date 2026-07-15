// Tools
import { NotFound } from "@/utils/api/errors";
import { getAllProjects, getProjectById, getRecommendedProjects } from "@/lib/content";
// Types
import type { NextPage } from "next";
import type { GetStaticPaths, GetStaticProps } from "next";
import type { Project, RecommendedProject } from "@/@types/pages/projects/SingleProject";
// Other components
import SEO from "@/components/pages/_SEO";
import Content from "@/components/pages/projects/single/Content";
import LandingSection from "@/components/pages/projects/single/LandingSection";
import RecommendedProjects from "@/components/pages/projects/single/RecommendedProjects";
import ReleventTechnologies from "@/components/pages/projects/single/ReleventTechnologies";

const REVALIDATE_SECONDS = 86400;

interface SingleProjectProps {
    project: Project;
    recommendedProjects: RecommendedProject[];
}

const SingleProject: NextPage<SingleProjectProps> = ({ project, recommendedProjects }) => {
    return (
        <>
            <SEO
                title={`K_Książek | ${project.title}`} //
                description={project.shortDescription}
            />
            <>
                <LandingSection project={project} />
                <Content project={project} />
                <ReleventTechnologies techStack={project.releventTechnologies} />
                <RecommendedProjects recommendedProjects={recommendedProjects} />
            </>
        </>
    );
};

export default SingleProject;

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllProjects()
        .filter((project) => project.hasSubpage !== false)
        .map((project) => ({
            params: { id: project.id },
        }));

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async (context) => {
    const projectId = context.params?.id as string;

    try {
        const project = getProjectById(projectId);
        if (!project) throw new NotFound();

        return {
            props: {
                project,
                recommendedProjects: getRecommendedProjects(projectId),
            },
            revalidate: REVALIDATE_SECONDS,
        };
    } catch (e: unknown) {
        console.error(e);

        if (e instanceof NotFound) {
            return {
                redirect: {
                    destination: "/404",
                    permanent: false,
                },
            };
        }
        return {
            redirect: {
                destination: "/500",
                permanent: false,
            },
        };
    }
};
