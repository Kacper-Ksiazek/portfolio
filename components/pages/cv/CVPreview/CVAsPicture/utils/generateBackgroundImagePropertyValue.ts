// Tools
import { getParticularCV } from "@/utils/serverless/cv/getParticularCV";
// Types
import type { DataToVisualizeCV } from "../../@types";

export function generateBackgroundImagePropertyValue(params: DataToVisualizeCV): string {
    const { path: url } = getParticularCV({
        clientSide: true, //
        format: "png-high-res",
        lang: params.language,
        variant: params.variant,
    });

    return `url(${url})`;
}
