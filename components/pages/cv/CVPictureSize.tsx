// Types
import type { FunctionComponent } from "react";
import type { CV, PNGResolution } from "@/@types/pages/CV";

type PNG_ID = `${PNGResolution}_${CV.Language}_${CV.Variant}`;

const PNG_SIZES: Record<PNG_ID, string> = {
    "png-valid-a4_en_light": "200kb",
    "png-valid-a4_en_dark": "196kb",
    //
    "png-valid-a4_pl_light": "202kb",
    "png-valid-a4_pl_dark": "200kb",
    //
    "png-high-res_en_light": "595kb",
    "png-high-res_en_dark": "581kb",
    //
    "png-high-res_pl_light": "613kb",
    "png-high-res_pl_dark": "564kb",
};

function getSizeOfPNG(resolution: PNGResolution, lang: CV.Language, variant: CV.Variant) {
    return PNG_SIZES[`${resolution}_${lang}_${variant}`];
}

interface CVPictureSizeProps {
    lang: CV.Language;
    variant: CV.Variant;
    resolution: PNGResolution;
}

const CVPictureSize: FunctionComponent<CVPictureSizeProps> = (props) => {
    const { lang, resolution, variant } = props;

    return <span style={{ marginLeft: "4px" }}>{` (${getSizeOfPNG(resolution, lang, variant)})`}</span>;
};

export default CVPictureSize;
