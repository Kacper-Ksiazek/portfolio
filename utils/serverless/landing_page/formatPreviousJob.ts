// Tools
import { formatProjectDate } from "@/utils/api/date-formatter";
// Types
import type { PreviousJob as PrismaPreviousJob } from "@prisma/client";
import type { PreviousJob as FinalPreviousJob } from "@/@types/pages/LandingPage";

export function formatPreviousJob(raw: PrismaPreviousJob): FinalPreviousJob {
    return {
        ...raw,
        start: formatProjectDate(raw.start),
        end: formatProjectDate(raw.end),
    };
}
