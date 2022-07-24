// See:
// https://github.com/Kacper-Ksiazek/nextjs-travel-agency-2022/blob/main/prisma/data/%40types.ts
//

import type { Project } from "@/@types/prisma/Project";

export { Project };
export type ModelName = "project";

export type SeederDataItem<T> = {
    _imagesDir: string;
} & T;
export type SeederDataList<T extends Project> = Partial<SeederDataItem<T>>[];
