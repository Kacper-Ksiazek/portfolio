// Tools
import { styled } from "@mui/material";
import { fadeSimple } from "@/components/keyframes/intro";
// Types
import type { FunctionComponent } from "react";
import type { ValidationResult } from "./@types";
// Other components
import MessagesSwitch from "@/components/atoms/MessagesSwitch";
// Styled components
const ErrorMessageWrapper = styled("div")(({ theme }) => ({
    position: "relative",
    paddingTop: "4px",
    height: "32px",
    boxSizing: "border-box",
    animation: `${fadeSimple} .2s .1s linear both`,
}));

type EXCLUDED_CODE = Extract<ValidationResult["code"], "NAME_IS_EMPTY">;
type CODE_WITH_ASSOCIATED_MESSAGE = Exclude<ValidationResult["code"], EXCLUDED_CODE>;

const CODES: CODE_WITH_ASSOCIATED_MESSAGE[] = ["NAME_TOO_LONG", "NAME_TOO_SHORT", "NONE", "UNAVAILABLE_LABEL_COLOR", "UNAVAILABLE_LABEL_NAME", "NOTHNIG_TO_UPDATE"];

const MESSAGES: Record<CODE_WITH_ASSOCIATED_MESSAGE, string> = {
    NONE: "___", // message comes from props.noErrorsMessage
    UNAVAILABLE_LABEL_NAME: "This name is already in use",
    UNAVAILABLE_LABEL_COLOR: "This color is already in use",
    NAME_TOO_LONG: "Label name can be up to 16 characters long",
    NAME_TOO_SHORT: "Label name has to be at least 3 characters long",
    NOTHNIG_TO_UPDATE: "There are no changes to implement",
};

interface ErrorMessageProps {
    noErrorsMessage: string;
    validationResult: ValidationResult;
}

const ErrorMessage: FunctionComponent<ErrorMessageProps> = (props) => {
    function getMessageContent(code: CODE_WITH_ASSOCIATED_MESSAGE): string {
        return code === "NONE" ? props.noErrorsMessage : MESSAGES[code];
    }

    return (
        <ErrorMessageWrapper>
            <MessagesSwitch
                messages={CODES.map((CODE: CODE_WITH_ASSOCIATED_MESSAGE) => {
                    return {
                        content: getMessageContent(CODE),
                        renderIf: props.validationResult.code === CODE,
                        color: CODE === "NONE" ? "default" : "error",
                    };
                })}
            />
        </ErrorMessageWrapper>
    );
};

export default ErrorMessage;
