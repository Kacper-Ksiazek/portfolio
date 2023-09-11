// Tools
import { DEFAULT_TASKS } from "../default_tasks";
// Types
import type { Task } from "landing_page/ToDoList/2023/@types/Tasks";

const SAMPLE_DATA: Task = DEFAULT_TASKS[0];

export function localStorageValidator(data: unknown): data is Task[] {
    try {
        const expectedKeys = Object.keys(SAMPLE_DATA);

        for (const element of data as unknown[]) {
            const actualKeys = Object.keys(element as any);

            if (actualKeys.length !== expectedKeys.length) throw new Error("The amount of keys of received object did not match the amount of keys of expected object.");
            expectedKeys.forEach((key) => {
                // Check if no key is missing
                if (!actualKeys.includes(key)) throw new Error(`Key ${key} is missing`);

                // Check if all keys are of the same type
                if (typeof (element as any)[key] !== typeof (SAMPLE_DATA as any)[key]) throw new Error(`Type of key ${key} is not the same as in expected object`);
            });
        }
        //
        return true;
    } catch (_) {
        // When validation fails
        return false;
    }
}
