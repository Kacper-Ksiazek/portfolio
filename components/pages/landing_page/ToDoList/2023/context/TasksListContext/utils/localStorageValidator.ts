// Tools
import { DEFAULT_TASKS } from "../default_tasks";
// Types
import type { Task } from "landing_page/ToDoList/2023/@types/Tasks";

const SAMPLE_DATA: Task = DEFAULT_TASKS[0];

type TypeOfTaskProperty = "string" | "boolean" | "number";

const PROPERTIES_TYPES: Record<keyof Task, { type: TypeOfTaskProperty; nullable?: boolean }> = {
    id: { type: "string" },
    title: { type: "string" },
    description: { type: "string", nullable: true },
    isCompleted: { type: "boolean" },
    urgent: { type: "boolean" },
    dueDate: { type: "string", nullable: true },
    localization: { type: "string", nullable: true },
    dueTime: { type: "string", nullable: true },
    createdAt: { type: "number" },
    labelID: { type: "string" },
};

export function localStorageValidator(data: unknown): data is Task[] {
    try {
        const expectedKeys = Object.keys(SAMPLE_DATA);

        for (const allegedTask of data as unknown[]) {
            const actualKeys = Object.keys(allegedTask as any);

            if (actualKeys.length !== expectedKeys.length) throw new Error("The amount of keys of received object did not match the amount of keys of expected object.");
            expectedKeys.forEach((key) => {
                // Check if no key is missing
                if (!actualKeys.includes(key)) throw new Error(`Key ${key} is missing`);

                // Check if the type of the key is correct
                if (key in PROPERTIES_TYPES) {
                    const { type, nullable } = PROPERTIES_TYPES[key as keyof typeof PROPERTIES_TYPES];
                    const value = (allegedTask as any)[key as keyof typeof allegedTask];
                    const actualType = typeof value;

                    if (actualType !== type) {
                        if (nullable && value === null) return;
                        throw new Error(`Key ${key} has type ${actualType} instead of ${type}`);
                    }
                }
            });
        }
        //
        return true;
    } catch (_) {
        // When validation fails
        return false;
    }
}
