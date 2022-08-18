// See:
// https://github.com/Kacper-Ksiazek/nextjs-travel-agency-2022/blob/main/prisma/data/%40types.ts
//

import type { Project } from "@/@types/prisma/Project";
import type { Hobby } from "@prisma/client";

export { Project, Hobby };
export type ModelName = "project" | "hobby";

export type SeederDataItem<T> = {
    _imagesDir: string;
} & T;
export type SeederDataList<T extends Project> = Partial<SeederDataItem<T>>[];
