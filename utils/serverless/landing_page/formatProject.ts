// Tools
import { formatProjectDate } from "@/utils/api/date-formatter";
// Types
import type { Project as PrismaProject } from "@prisma/client";
import type { ReleventTechnology } from "@/@types/prisma/Project";
import type { Project as FinalProject } from "@/@types/pages/LandingPage";

type RawProject = Pick<
    PrismaProject,
    | "id" //
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

/** Formats the date of a project depending on whether formatting project is a hackathon or not. */
function _formatDate<T extends "start" | "end">(date: RawProject[T], isHackathon: boolean, type: T): string {
    return isHackathon ? formatProjectDate(date, true, type) : formatProjectDate(date);
}

// The latest year that was formatted
let latestYear: number | null;

function _detectWhetherIsAYearIndicatingProject(endDate: RawProject["end"]): FinalProject["yearToIndicate"] | null {
    const formattingProjectYear: number = new Date(endDate).getFullYear();

    // If the year is different from the latest year, then it's a new year
    if (latestYear === null || latestYear !== formattingProjectYear) {
        latestYear = formattingProjectYear;
        return formattingProjectYear;
    }

    // Otherwise, it's not a new year
    return null;
}

export function formatProject(raw: RawProject): FinalProject {
    const isHackathon: boolean = raw.type === "HACKATHON";
    const yearToIndicate = _detectWhetherIsAYearIndicatingProject(raw.end);

    return {
        id: raw.id,
        title: raw.title,
        folder: raw.folder,
        type: raw.type,
        end: _formatDate(raw.end, isHackathon, "end"),
        start: _formatDate(raw.start, isHackathon, "start"),
        shortDescription: raw.shortDescription,
        releventTechnologies: raw.releventTechnologies as ReleventTechnology[],
        liveDemoURL: raw.liveDemoURL,
        hasSubpage: Boolean(raw.hasSubpage),

        // If yearToIndicate is null, it won't be included in the object
        ...(yearToIndicate && { yearToIndicate }),
    };
}
