// Tools
import path from "path";
// Types
import type { CV } from "@/@types/pages/CV";

/** The root directory of uploaded files */
export const uploadDir = path.resolve(path.join("public", "upload"));

/* The root directory of public assets */
export const assetsDir = path.resolve(path.join("public", "assets"));

/* The root directory of my CV's */
export const cvDir = path.resolve(path.join(assetsDir, "cv"));

interface GetParticularCVPathOptions {
    lang: CV.Language;
    variant: CV.Variant;
    format: CV.Format;
    /** If true, the path will be relative to the client-side, meaning there will be NO leading public directory */
    clientSide?: boolean;
}

type CvDirectory = "A4" | "pdf" | "high-res";

const CVFormatsData: Record<CV.Format, { directory: CvDirectory; extension: "pdf" | "png" }> = {
    pdf: { directory: "pdf", extension: "pdf" },
    "png-valid-a4": { directory: "A4", extension: "png" },
    "png-high-res": { directory: "high-res", extension: "png" },
};

export function getParticularCVPath(params: GetParticularCVPathOptions) {
    const { directory, extension } = CVFormatsData[params.format];

    const variant: string = params.variant === "dark" ? "_DARK" : "";
    const suffix: string = params.format === "png-high-res" ? "_high_quality" : "";

    const lang = params.lang.toUpperCase();

    const cvFileName: string = `Kacper_Ksiazek_CV_${lang}${variant}${suffix}.${extension}`;
    const result: string = path.join(cvDir, lang, directory, cvFileName);

    return params.clientSide ? result.replace("public/", "/") : result;
}
