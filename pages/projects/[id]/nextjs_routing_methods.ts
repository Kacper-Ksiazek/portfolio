// Tools
import { prisma } from "@/prisma/db";
import { NotFound } from "@/utils/api/errors";
import { formatProjectDate } from "@/utils/api/date-formatter";
// Types
import type { Project, RecommendedProject, SingleProjectAPIHandlerResponse } from "@/@types/pages/projects/SingleProject";
import type { GetStaticPaths, GetStaticProps } from "next";

export const getStaticPaths: GetStaticPaths = async (context) => {
    const paths = (await prisma.project.findMany({ select: { id: true } })).map((el) => {
        return {
            params: { id: el.id },
        };
    });

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

/**
 * This class handles fetching certain project corresponding passed in constructor id and furthermore fetches
 * all remaining projects but in truncated version
 */
class SingleProjectAPIHandler {
    public constructor(private projectID: string) {}
    /**
     * Throwns `NotFound` error when project with given id is not found
     */
    public async getData(): Promise<SingleProjectAPIHandlerResponse> {
        return {
            project: await this.fetchCertainProject(),
            recommendedProjects: await this.fetchRecommendedProjects(),
        };
    }

    private async fetchCertainProject(): Promise<Project> {
        const project = await prisma.project.findUnique({
            where: { id: this.projectID },
        });
        if (!project) throw new NotFound();

        (project as any).start = formatProjectDate(project.start);
        (project as any).end = formatProjectDate(project.end);
        return project as any;
    }

    private async fetchRecommendedProjects(): Promise<RecommendedProject[]> {
        const recommendedProjects = await prisma.project.findMany({
            where: { id: { not: this.projectID } },
            select: {
                id: true,
                end: true,
                title: true,
                folder: true,
                start: true,
                shortDescription: true,
                releventTechnologies: true,
            },
        });

        return recommendedProjects.map((project) => {
            (project as any).start = formatProjectDate(project.start);
            (project as any).end = formatProjectDate(project.end);
            return project;
        }) as any;
    }
}
