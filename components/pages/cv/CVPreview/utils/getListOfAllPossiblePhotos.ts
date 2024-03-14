// Tools
import { getParticularCV } from "@/utils/serverless/cv/getParticularCV";
// Types
import type { CV } from "@/@types/pages/CV";

function getPDFURL(lang: CV.Language, variant: CV.Variant): string {
    return getParticularCV({
        format: "png-high-res",
        clientSide: true,
        lang,
        variant,
    }).path;
}

export function getListOfAllPossiblePhotos(): string[] {
    return [
        getPDFURL("en", "light"), //
        getPDFURL("en", "dark"),
        getPDFURL("pl", "light"),
        getPDFURL("pl", "dark"),
    ];
}
