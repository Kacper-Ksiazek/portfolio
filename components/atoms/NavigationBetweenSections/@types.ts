export type SectionElement<T> = {
    label: string;
    value: T;
    disabled?: boolean;
};

/** Either some string or a object matching the SectionElement type */
export type UnparsedSectionElement<T> = T | SectionElement<T>;
