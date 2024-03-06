export namespace CV {
    /** Color variant of the CV */
    export type Variant = "dark" | "light";

    /** Language of the CV */
    export type Language = "en" | "pl";

    /** Supported file extensions of the CV */
    export type Format = "pdf" | "png";
}

export type CVPath = `${CV.Variant}/${CV.Language}.${CV.Format}`;
