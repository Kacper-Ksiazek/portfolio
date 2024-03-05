// Types
import type { Project as _Project } from "@/@types/prisma/Project";
import type { Hobby, School, PreviousJob as _PreviousJob } from "@prisma/client";

export type ScrollableToSections = "about-me" | "projects" | "contact-me" | "contact-me-open-form-button";

export interface Project {
    id: _Project["id"];
    title: _Project["title"];
    folder: _Project["folder"];
    type: _Project["type"];
    end: string;
    start: string;
    shortDescription: _Project["shortDescription"];
    releventTechnologies: _Project["releventTechnologies"];
    yearToIndicate?: number;
    liveDemoURL: _Project["liveDemoURL"];
    hasSubpage: _Project["hasSubpage"];
}

export interface PreviousJob extends Omit<_PreviousJob, "start" | "end"> {
    start: string;
    end: string;
}

export interface LandingPageServerSideProps {
    hobbies: Hobby[];
    projects: Project[];
    schools: School[];
    previousJobs: PreviousJob[];
}
