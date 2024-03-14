// Types
import type { CV, CVParams } from "@/@types/pages/CV";

interface ProperValues_I {
    variant: CV.Variant[];
    lang: CV.Language[];
    format: CV.Format[];
}

const PROPER_VALUES: ProperValues_I = {
    variant: ["dark", "light"],
    lang: ["en", "pl"],
    format: ["pdf", "png-high-res", "png-valid-a4"],
};

function isProperVariant(value: string): value is CV.Variant {
    return PROPER_VALUES.variant.includes(value as CV.Variant);
}

function isProperLanguage(value: string): value is CV.Language {
    return PROPER_VALUES.lang.includes(value as CV.Language);
}

function isProperFormat(value: string): value is CV.Format {
    return PROPER_VALUES.format.includes(value as CV.Format);
}

/**
 * Ensures that the query object is valid by checking if its properties are correct
 *
 * @param query A query object to validate
 * @returns Whether the query object is valid
 */
export function validateQueryParams(query: CVParams): boolean {
    return (
        isProperVariant(query.variant) && //
        isProperLanguage(query.lang) &&
        isProperFormat(query.format)
    );
}
