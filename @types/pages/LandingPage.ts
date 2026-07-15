// Types
import type { Project as ContentProject } from "@/content/types";
import type { Hobby, School, PreviousJob as ContentPreviousJob } from "@/content/types";

export type ScrollableToSections = "about-me" | "projects" | "contact-me" | "contact-me-open-form-button";

export interface Project {
    id: ContentProject["id"];
    title: ContentProject["title"];
    folder: ContentProject["folder"];
    type: ContentProject["type"];
    end: string;
    start: string;
    shortDescription: ContentProject["shortDescription"];
    releventTechnologies: ContentProject["releventTechnologies"];
    yearToIndicate?: number;
    liveDemoURL: string | null;
    hasSubpage: boolean;
}

export interface PreviousJob extends Omit<ContentPreviousJob, "start" | "end"> {
    start: string;
    end: string;
}

export interface LandingPageServerSideProps {
    hobbies: Hobby[];
    projects: Project[];
    schools: School[];
    previousJobs: PreviousJob[];
}

export type { Hobby, School };
