// Tools
import { useMemo } from "react";
import { DEFAULT_LABELS } from "../../context/LabelsContext/default_labels";
// Types
import type { Label, Labels, LabelID } from "landing_page/ToDoList2/@types";

const PROPERTIES_TO_CHECK: (keyof Omit<Label, "id">)[] = ["name", "color"];

/**
 * Auxiliary function to find a label with a given id in the default labels
 * @param id Id of the label to find in the default labels
 * @returns Either the label with the given id in the default labels or null if it doesn't exist
 */
function _findLabelWithGivenIDInDefaults(id: LabelID): Label | null {
    return id in DEFAULT_LABELS ? DEFAULT_LABELS[id] : null;
}

export function useLabelsVaryFromDefault(labels: Labels) {
    return useMemo<boolean>(() => {
        // If the number of labels is different than the number of default labels, then the labels vary from default
        if (Object.keys(labels).length !== Object.keys(DEFAULT_LABELS).length) return true;

        for (const labelID in labels) {
            const correspondingDefaultLabel: Label | null = _findLabelWithGivenIDInDefaults(labelID);

            // If the label is not in the default labels, then the labels vary from default
            if (correspondingDefaultLabel === null) return true;

            // If any of the properties of the label is different than the corresponding default label, then the labels vary from default
            for (const property of PROPERTIES_TO_CHECK) {
                if (labels[labelID][property] !== correspondingDefaultLabel[property]) return true;
            }
        }
        return false;
    }, [labels]);
}
