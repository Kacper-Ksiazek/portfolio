import type { DownloadCVQueryParams } from "@/@types/pages/CV";

/** Returns the name of the file that will be sent in the response */
export function getResponseFileName(query: DownloadCVQueryParams): string {
    // If the query object has a name property, return it
    if (query.name) return `${query.name}.${query.format}`;

    // Otherwise, return an automatically generated name
    return `Kacper_Ksiazek_CV_${query.lang}${query.variant === "dark" ? "_dark" : ""}.${query.format}`;
}
