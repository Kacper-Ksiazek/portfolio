// Tools
import path from "path";
import { cvDir } from "@/utils/paths";
// Types
import type { CV, CVParams } from "@/@types/pages/CV";

type CvDirectory = "A4" | "pdf" | "high-res";

interface GetParticularCVOptions extends CVParams {
    /** If true, the path will be relative to the client-side, meaning there will be NO leading public directory */
    clientSide?: boolean;
}

interface GetParticularCVResult {
    /** The path to the particular CV */
    path: string;

    fileName: string;
}

const CVFormatsData: Record<CV.Format, { directory: CvDirectory; extension: "pdf" | "png" }> = {
    pdf: { directory: "pdf", extension: "pdf" },
    "png-valid-a4": { directory: "A4", extension: "png" },
    "png-high-res": { directory: "high-res", extension: "png" },
};

export function getParticularCV(params: GetParticularCVOptions): GetParticularCVResult {
    const { directory, extension } = CVFormatsData[params.format];

    const variant: string = params.variant === "dark" ? "_DARK" : "";
    const suffix: string = params.format === "png-high-res" ? "_high_quality" : "";

    const lang = params.lang.toUpperCase();

    const fileName: string = `Kacper_Ksiazek_CV_${lang}${variant}${suffix}.${extension}`;
    const result: string = path.join(cvDir, lang, directory, fileName);

    return {
        path: params.clientSide ? result.replace("public/", "/") : result,
        fileName,
    };
}
