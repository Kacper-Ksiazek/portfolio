import type { Project as _Project } from "@/@types/prisma/Project";

export interface Project extends Omit<_Project, "start" | "end"> {
    start: string;
    end: string;
}
