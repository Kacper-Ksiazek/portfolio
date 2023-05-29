export type ValidationResultCode = "UNAVAILABLE_LABEL_NAME" | "UNAVAILABLE_LABEL_COLOR" | "NAME_IS_EMPTY" | "NOTHNIG_TO_UPDATE" | "NAME_TOO_SHORT" | "NAME_TOO_LONG" | "NONE";

export interface ValidationResult {
    code: ValidationResultCode;
    field: "name_input" | "color_picker" | "general" | null;
}
