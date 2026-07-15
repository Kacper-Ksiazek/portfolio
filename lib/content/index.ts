// Tools
import { formatProjectDate } from "@/utils/api/date-formatter";
// Data
import projectsData from "@/content/projects";
import hobbiesData from "@/content/hobbies";
import schoolsData from "@/content/schools";
import previousJobsData from "@/content/previous_jobs";
// Types
import type { Project, Hobby, School, PreviousJob } from "@/content/types";
import type { RecommendedProject } from "@/@types/pages/projects/SingleProject";
import type { Project as FormattedProject } from "@/@types/pages/projects/SingleProject";

export type LandingProject = Pick<
    Project,
    | "id"
    | "title"
    | "folder"
    | "type"
    | "end"
    | "start"
    | "shortDescription"
    | "releventTechnologies"
    | "liveDemoURL"
    | "hasSubpage"
>;

export function getAllProjects(): Project[] {
    return projectsData;
}

export function getLandingProjects(): LandingProject[] {
    return [...projectsData]
        .sort((a, b) => b.end.getTime() - a.end.getTime())
        .map(({ id, title, folder, type, end, start, shortDescription, releventTechnologies, liveDemoURL, hasSubpage }) => ({
            id,
            title,
            folder,
            type,
            end,
            start,
            shortDescription,
            releventTechnologies,
            liveDemoURL,
            hasSubpage,
        }));
}

export function getProjectById(id: string): FormattedProject | null {
    const project = projectsData.find((p) => p.id === id);
    if (!project) return null;

    return {
        ...project,
        start: formatProjectDate(project.start),
        end: formatProjectDate(project.end),
        features: project.features ?? [],
        description: project.description ?? { introduction: "", purpose: "", conclusion: "" },
        technologies: project.technologies ?? [],
        hasSubpage: Boolean(project.hasSubpage),
        releventTechnologies: project.releventTechnologies as Project["releventTechnologies"],
    };
}

export function getRecommendedProjects(excludeId: string): RecommendedProject[] {
    return projectsData
        .filter((p) => p.id !== excludeId && p.hasSubpage !== false)
        .map((rawProject) => ({
            id: rawProject.id,
            title: rawProject.title,
            start: formatProjectDate(rawProject.start),
            end: formatProjectDate(rawProject.end),
            folder: rawProject.folder,
            shortDescription: rawProject.shortDescription,
            releventTechnologies: rawProject.releventTechnologies,
            numberOfFeautres: (rawProject.features ?? []).length,
        }));
}

export function getHobbies(): Hobby[] {
    return hobbiesData;
}

export function getSchools(): School[] {
    return schoolsData;
}

export function getPreviousJobs(): PreviousJob[] {
    return previousJobsData;
}
