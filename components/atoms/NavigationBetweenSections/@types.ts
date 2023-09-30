import { HTMLAttributes } from "react";

export type SectionElement<T> = {
    label: string;
    value: T;
    disabled?: boolean;
    props?: Omit<HTMLAttributes<HTMLDivElement>, "onClick" | "disabled" | "selected">;
};

/** Either some string or a object matching the SectionElement type */
export type UnparsedSectionElement<T> = T | SectionElement<T>;
