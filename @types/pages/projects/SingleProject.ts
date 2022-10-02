import type { Project as _Project } from "@/@types/prisma/Project";

export interface SingleProjectAPIHandlerResponse {
    project: Project;
    recommendedProjects: RecommendedProject[];
}

export interface Project extends Omit<_Project, "start" | "end"> {
    start: string;
    end: string;
}

export interface RecommendedProject {
    id: Project["id"];
    title: Project["title"];
    folder: Project["folder"];
    end: string;
    start: string;
    numberOfFeautres: number;
    shortDescription: Project["shortDescription"];
    releventTechnologies: Project["releventTechnologies"];
}
