// Tools
import { getParticularCV } from "@/utils/serverless/cv/getParticularCV";
// Types
import type { CV } from "@/@types/pages/CV";
import type { SxProps } from "@mui/material";

interface ApplyCVAsBackgroundParams {
    language: CV.Language;
    variant: CV.Variant;
}

export function applyCVAsBackground(params: ApplyCVAsBackgroundParams): SxProps {
    return {
        backgroundImage: `url(${
            getParticularCV({
                clientSide: true, //
                format: "png-high-res",
                lang: params.language,
                variant: params.variant,
            }).path
        })`,
    };
}
