export type FormFillingStage = "purpose" | "contact_details" | "recaptcha";
export type FieldName = "author" | "subject" | "message" | "country" | "email" | "github" | "website";
export type Status = "fillingForm" | "pending" | "success" | "error" | "success_but_feigned" | "error_but_feigned" | "pending_but_feigned" | "fillingForm_after_error" | "fillingForm_after_success";
