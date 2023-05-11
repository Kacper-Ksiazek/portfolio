export interface Color {
    name: string;
    color: `#${string & { length: 6 }}`;
}

export interface ValidationResult {
    code: "UNAVAILABLE_LABEL_NAME" | "UNAVAILABLE_LABEL_COLOR" | "NAME_TOO_SHORT" | "NAME_TOO_LONG" | "NONE";
    field: "name_input" | "color_picker" | null;
}
