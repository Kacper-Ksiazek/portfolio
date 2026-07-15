import type { Description, Feature, Project as ContentProject, ReleventTechnology, Technology } from "@/content/types";

export type { Description, Feature, ReleventTechnology, Technology };

export interface Project extends Omit<ContentProject, "features" | "description" | "technologies" | "releventTechnologies" | "hasSubpage" | "start" | "end"> {
    features: Feature[];
    description: Description;
    technologies: (Technology | string)[];
    hasSubpage?: boolean;
    releventTechnologies: (ReleventTechnology | string)[];
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
