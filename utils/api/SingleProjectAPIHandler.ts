// Tools
import { prisma } from "@/prisma/db";
import { NotFound } from "@/utils/api/errors";
import { formatProjectDate } from "@/utils/api/date-formatter";
// Types
import { Prisma } from "@prisma/client";
import type { Project, RecommendedProject, SingleProjectAPIHandlerResponse } from "@/@types/pages/projects/SingleProject";

interface RawRecommendedProject {
    id: Project["liveDemoURL"];
    end: Date;
    title: Project["title"];
    folder: Project["folder"];
    start: Date;
    shortDescription: Project["shortDescription"];
    releventTechnologies: string[];
    features: Prisma.JsonValue;
}

/**
 * This class handles fetching certain project corresponding passed in constructor id and furthermore fetches
 * all remaining projects but in truncated version
 */
export default class SingleProjectAPIHandler {
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
        await prisma.$connect();

        const recommendedProjects: RawRecommendedProject[] = await prisma.project.findMany({
            where: {
                id: {
                    not: this.projectID,
                },
                hasSubpage: true,
            },
            select: {
                id: true,
                end: true,
                title: true,
                folder: true,
                start: true,
                shortDescription: true,
                releventTechnologies: true,
                features: true,
            },
        });

        await prisma.$disconnect();

        return recommendedProjects.map((rawProject: RawRecommendedProject) => {
            return {
                id: rawProject.id,
                title: rawProject.title,
                start: formatProjectDate(rawProject.start),
                end: formatProjectDate(rawProject.end),
                folder: rawProject.folder,
                shortDescription: rawProject.shortDescription,
                releventTechnologies: rawProject.releventTechnologies,
                numberOfFeautres: (rawProject.features as any[]).length,
            } as RecommendedProject;
        }) as any;
    }
}
