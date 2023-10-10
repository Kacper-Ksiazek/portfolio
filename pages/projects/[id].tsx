// Tools
import { prisma } from "@/prisma/db";
import { NotFound } from "@/utils/api/errors";
import SingleProjectAPIHandler from "@/utils/api/SingleProjectAPIHandler";
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

export const getStaticPaths: GetStaticPaths = async (context) => {
    await prisma.$connect();

    const paths = (await prisma.project.findMany({ select: { id: true } })).map((el) => {
        return {
            params: { id: el.id },
        };
    });

    await prisma.$disconnect();

    return {
        paths,
        fallback: "blocking",
    };
};

export const getStaticProps: GetStaticProps = async (context) => {
    try {
        const API = new SingleProjectAPIHandler(context.params?.id as string);
        return {
            props: await API.getData(),
        };
    } catch (e: unknown) {
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
