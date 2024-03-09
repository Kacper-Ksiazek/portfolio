export namespace CV {
    /** Color variant of the CV */
    export type Variant = "dark" | "light";

    /** Language of the CV */
    export type Language = "en" | "pl";

    /** Supported file extensions of the CV */
    export type Format = "pdf" | "png-valid-a4" | "png-high-res";
}

export type CVPath = `${CV.Language}/${CV.Variant}.${CV.Format}`;

export interface CVParams {
    format: CV.Format;
    lang: CV.Language;
    variant: CV.Variant;
}

export type ResponseContentType = "application/pdf" | "image/png";

export type PNGResolution = Exclude<CV.Format, "pdf">;
