// Tools
import { createContext } from "react";
// Types
import type { StatedDataField } from "@/@types/StatedDataField";

export type Status = "fillingForm" | "pending" | "success" | "error" | "success_but_feigned" | "error_but_feigned" | "pending_but_feigned" | "fillingForm_after_error" | "fillingForm_after_success";

interface SendMeAnEmailContext {
    name: StatedDataField<string>;
    topic: StatedDataField<string>;
    message: StatedDataField<string>;
    disableContinueButton: boolean;

    status: StatedDataField<Status>;
    checkWhetherAFieldIsValid: (field: "name" | "topic" | "message") => boolean;
}

export default createContext<SendMeAnEmailContext>({} as any);
