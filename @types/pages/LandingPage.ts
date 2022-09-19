import type { Hobby, School, PreviousJob as _PreviousJob } from "@prisma/client";
import type { Project as _Project } from "@/@types/prisma/Project";

export interface Project {
    id: _Project["id"];
    title: _Project["title"];
    folder: _Project["folder"];
    end: string;
    start: string;
    shortDescription: _Project["shortDescription"];
    releventTechnologies: _Project["releventTechnologies"];
    yearToIndicate?: number;
    liveDemoURL: _Project["liveDemoURL"];
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
