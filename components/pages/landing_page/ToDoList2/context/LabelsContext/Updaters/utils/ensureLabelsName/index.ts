// Tools
import { LabelEnsuranceError } from "./LabelEnsuranceError";
// Types
import type { EnsureLabelsNameProps } from "./@types";

/** Does the given label appear in the collection of labels */
export function ensureLabelsName(params: EnsureLabelsNameProps) {
    let existance: boolean;

    if ("label" in params) {
        existance = Object.values(params.dataset)
            .map(({ name }) => name)
            .includes(params.label);
    } else {
        existance = params.id in params.dataset;
    }

    if ((!existance && params.expect === "PRESENCE") || (existance && params.expect === "NON_PRESENCE")) {
        throw new LabelEnsuranceError(params.expect, {
            id: (params as any).id,
            label: (params as any).label,
        });
    }
}
