// Tools
import { formatProjectDate } from "@/utils/api/date-formatter";
// Types
import type { PreviousJob as ContentPreviousJob } from "@/content/types";
import type { PreviousJob as FinalPreviousJob } from "@/@types/pages/LandingPage";

export function formatPreviousJob(raw: ContentPreviousJob): FinalPreviousJob {
    return {
        ...raw,
        start: formatProjectDate(raw.start),
        end: formatProjectDate(raw.end),
    };
}
