// Types
import type { Section } from "../@types";

export function parseSection<T extends string>(section: Section<T>): { value: T; label: string } {
    if (section instanceof Object) return section;

    const label = section.replaceAll
        ? section.replaceAll("_", " ")
        : section
              .split("")
              .map((char) => (char === "_" ? " " : char))
              .join("");

    return { label, value: section as T };
}
