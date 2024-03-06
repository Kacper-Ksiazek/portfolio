import type { CV, ResponseContentType } from "@/@types/pages/CV";

/** Returns the content type of the response based on the requested format */
export function getResponseContentType(format: CV.Format): ResponseContentType {
    return format === "pdf" ? "application/pdf" : "image/png";
}
