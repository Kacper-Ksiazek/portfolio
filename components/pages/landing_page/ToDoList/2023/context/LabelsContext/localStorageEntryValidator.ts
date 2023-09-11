// Types
import type { LocalStorageValidator } from "@/hooks/useLocalStorage";
import type { Label, LabelsCollection } from "landing_page/ToDoList/2023/@types/Labels";

function validateSingleLabel(data: unknown): data is Label {
    if (typeof data !== "object") return false;

    // Check if amount of keys is correct
    const actualKeys: string[] = Object.keys(data as Record<any, any>);
    if (actualKeys.length !== 2) return false;

    // Check if keys are correct
    for (const [key, value] of Object.entries(data as Label)) {
        // Check name
        if (key !== "name" && key !== "color") return false;
        // Check value
        if (typeof value !== "string") return false;
    }

    // In addition, check if color is valid
    const { color } = data as Label;
    if (color[0] !== "#" || color.length !== 7) return false;

    return true;
}

export const validator: LocalStorageValidator<LabelsCollection> = function (value: unknown): value is LabelsCollection {
    if (typeof value !== "object") return false;

    // Check every record in the collection
    for (const key in value) {
        if (!validateSingleLabel(value[key as keyof typeof value])) {
            return false;
        }
    }

    return true;
};
