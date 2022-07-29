import type { Project as _Project } from "@/@types/prisma/Project";

export interface Project {
    id: _Project["id"];
    title: _Project["title"];
    folder: _Project["folder"];
    end: string;
    start: string;
    shortDescription: _Project["shortDescription"];
    releventTechnologies: _Project["releventTechnologies"];
}

export interface LandingPageServerSideProps {
    projects: Project[];
}
