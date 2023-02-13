// Types
import type { CountryType } from "@/data/countries";

export type Status = "fillingForm" | "pending" | "success" | "already_succeeded" | "error" | "staged_success" | "staged_error" | "staged_pending" | "form_after_error" | "form_after_success";

export type SendEmailSubsection = "GENERAL_PURPOSE" | "CONTACT_DETAILS" | "RECAPTCHA";

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
