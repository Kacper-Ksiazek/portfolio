// Tools
import { getParticularCV } from "@/utils/serverless/cv/getParticularCV";
// Types
import type { CV } from "@/@types/pages/CV";

interface DataToVisualizeCV {
    language: CV.Language;
    variant: CV.Variant;
}

export function generateBackgroundImagePropertyValue(params: DataToVisualizeCV): string {
    const { path: url } = getParticularCV({
        clientSide: true, //
        format: "png-high-res",
        lang: params.language,
        variant: params.variant,
    });

    return `url(${url})`;
}
