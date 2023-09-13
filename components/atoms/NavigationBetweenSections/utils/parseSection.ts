// Types
import type { SectionElement, UnparsedSectionElement } from "../@types";

export function parseSection<T extends string>(section: UnparsedSectionElement<T>): SectionElement<T> {
    if (section instanceof Object) return section;

    const label = section.replaceAll
        ? section.replaceAll("_", " ")
        : section
              .split("")
              .map((char) => (char === "_" ? " " : char))
              .join("");

    return { label, value: section as T, disabled: false };
}
