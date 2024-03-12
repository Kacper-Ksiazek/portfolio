// Tools
import { useCVContext } from "@/hooks/pages/cv/useCVContext";
// Types
import type { FunctionComponent } from "react";
import type { CVFileID, CVParams } from "@/@types/pages/CV";

const PNG_SIZES: Record<CVFileID, string> = {
    // English
    // - A4
    "png-valid-a4_en_light": "200kb",
    "png-valid-a4_en_dark": "196kb",
    // - High Quality
    "png-high-res_en_light": "595kb",
    "png-high-res_en_dark": "581kb",
    // - PDF
    pdf_en_dark: "900kb",
    pdf_en_light: "898kb",

    // Polish
    // - A4
    "png-valid-a4_pl_light": "202kb",
    "png-valid-a4_pl_dark": "200kb",
    // - High Quality
    "png-high-res_pl_light": "613kb",
    "png-high-res_pl_dark": "564kb",
    // - PDF
    pdf_pl_light: "872kb",
    pdf_pl_dark: "872kb",
};

function getSizeOfPNG({ format, lang, variant }: CVParams) {
    return PNG_SIZES[`${format}_${lang}_${variant}`];
}

const CVPictureSize: FunctionComponent = () => {
    const { cvToDownload } = useCVContext();

    return (
        <span style={{ marginLeft: "4px" }}>
            {/*  */}
            {` (${getSizeOfPNG(cvToDownload)})`}
        </span>
    );
};

export default CVPictureSize;
