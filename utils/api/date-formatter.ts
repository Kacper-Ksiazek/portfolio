// Tools
import moment from "moment";
/**
 * Converts **PostgreSQL** `DataTime` format into something like `"March 2022"`
 */
export function formatProjectDate(date: Date, isHackathon?: boolean, type?: "end" | "start"): string {
    // For non-hackathon projects
    if (isHackathon === undefined) return moment(date).format(`MMMM YYYY`);

    // For hackathon projects
    return moment(date).format(type === "end" ? `DD MMMM YYYY` : `DD`);
}
