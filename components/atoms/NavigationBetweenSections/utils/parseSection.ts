// Types
import type { Section } from "../@types";

export function parseSection(section: Section): { value: string; label: string } {
    if (section instanceof Object) return section;

    const label = section.replaceAll
        ? section.replaceAll("_", " ")
        : section
              .split("")
              .map((char) => (char === "_" ? " " : char))
              .join("");

    return { label, value: section };
}
