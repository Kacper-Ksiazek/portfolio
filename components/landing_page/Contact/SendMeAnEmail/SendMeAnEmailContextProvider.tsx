// Tools
import context from "./context";
import useBetterState from "@/hooks/useBetterState";
import useFieldsWithValidation from "./hooks/useFieldsWithValidation";
// Types
import type { Status } from "./context";
import type { FunctionComponent, ReactNode } from "react";
// Styled Components
const SendMeAnEmail: FunctionComponent<{ children: ReactNode }> = (props) => {
    const { message, author, subject, disableContinueButton, checkWhetherAFieldIsValid } = useFieldsWithValidation();
    const status = useBetterState<Status>("fillingForm");

    return (
        <context.Provider
            value={{
                checkWhetherAFieldIsValid,
                message,
                author,
                subject,
                status,
                disableContinueButton,
            }}
        >
            {props.children}
        </context.Provider>
    );
};

export default SendMeAnEmail;
