// Tools
import { createContext } from "react";
// Types
import type { StatedDataField } from "@/@types/StatedDataField";

interface SendMeAnEmailContext {
    name: StatedDataField<string>;
    topic: StatedDataField<string>;
    message: StatedDataField<string>;
    disableContinueButton: boolean;

    status: StatedDataField<"fillingForm" | "pending" | "success" | "error">;
    checkWhetherAFieldIsValid: (field: "name" | "topic" | "message") => boolean;
}

export default createContext<SendMeAnEmailContext>({} as any);
