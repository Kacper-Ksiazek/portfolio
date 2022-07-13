// Tools
import { createContext } from "react";
// Types
import type { StatedDataField } from "@/@types/StatedDataField";

export type FormFillingStage = "purpose" | "contact_details" | "recaptcha";
export type FieldName = "author" | "subject" | "message" | "country" | "email" | "github" | "website";
export type Status = "fillingForm" | "pending" | "success" | "error" | "success_but_feigned" | "error_but_feigned" | "pending_but_feigned" | "fillingForm_after_error" | "fillingForm_after_success";

interface SendMeAnEmailContext {
    author: StatedDataField<string>;
    subject: StatedDataField<string>;
    message: StatedDataField<string>;
    contact: {
        country: StatedDataField<string>;
        email: StatedDataField<string>;
        github: StatedDataField<string>;
        website: StatedDataField<string>;
    };
    disableContinueButton: boolean;
    formFillingStage: StatedDataField<FormFillingStage>;

    status: StatedDataField<Status>;
    checkWhetherAFieldIsValid: (field: FieldName) => boolean;
}

export default createContext<SendMeAnEmailContext>({} as any);
