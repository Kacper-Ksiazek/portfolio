// Types
import type { CountryType } from "@/data/countries";

export type Status =
    | "fillingForm"
    | "pending"
    | "success"
    | "already_succeeded"
    | "error"
    | "success_but_feigned"
    | "error_but_feigned"
    | "pending_but_feigned"
    | "fillingForm_after_error"
    | "fillingForm_after_success";

export type FormStage = "GENERAL_PURPOSE" | "CONTACT_DETAILS" | "RECAPTCHA";

export interface EmailForm {
    author: string;
    subject: string;
    message: string;
    country: CountryType | null;
    email: string;
    github: string;
    website: string;
}

export interface Request {
    status: Status;
    errorCode: number | null;
}
