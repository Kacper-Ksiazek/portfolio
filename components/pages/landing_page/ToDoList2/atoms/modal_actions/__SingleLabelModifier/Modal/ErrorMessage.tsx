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

const CODES: CODE_WITH_ASSOCIATED_MESSAGE[] = ["NAME_TOO_LONG", "NAME_TOO_SHORT", "NONE", "UNAVAILABLE_LABEL_COLOR", "UNAVAILABLE_LABEL_NAME"];

const MESSAGES: Record<CODE_WITH_ASSOCIATED_MESSAGE, string> = {
    NONE: "A new label can be created",
    UNAVAILABLE_LABEL_NAME: "This name is already in use",
    UNAVAILABLE_LABEL_COLOR: "This color is already in use",
    NAME_TOO_LONG: "Label name can be up to 16 characters long",
    NAME_TOO_SHORT: "Label name has to be at least 3 characters long",
};

interface ErrorMessageProps {
    validationResult: ValidationResult;
}

const ErrorMessage: FunctionComponent<ErrorMessageProps> = (props) => {
    return (
        <ErrorMessageWrapper>
            <MessagesSwitch
                messages={CODES.map((CODE: CODE_WITH_ASSOCIATED_MESSAGE) => {
                    return {
                        content: MESSAGES[CODE],
                        renderIf: props.validationResult.code === CODE,
                        color: CODE === "NONE" ? "default" : "error",
                    };
                })}
            />
        </ErrorMessageWrapper>
    );
};

export default ErrorMessage;
