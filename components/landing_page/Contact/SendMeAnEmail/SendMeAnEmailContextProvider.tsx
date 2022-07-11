// Tools
import context from "./context";
import useBetterState from "@/hooks/useBetterState";
import useFieldsWithValidation from "./hooks/useFieldsWithValidation";
// Types
import type { FunctionComponent, ReactNode } from "react";
// Styled Components
const SendMeAnEmail: FunctionComponent<{ children: ReactNode }> = (props) => {
    const { message, name, topic, disableContinueButton, checkWhetherAFieldIsValid } = useFieldsWithValidation();
    const status = useBetterState<"fillingForm" | "pending" | "success" | "error">("fillingForm");

    return (
        <context.Provider
            value={{
                checkWhetherAFieldIsValid,
                message,
                name,
                topic,
                status,
                disableContinueButton,
            }}
        >
            {props.children}
        </context.Provider>
    );
};

export default SendMeAnEmail;
