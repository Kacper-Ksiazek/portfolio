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
    height: "42px",
    boxSizing: "border-box",
    animation: `${fadeSimple} .2s .1s linear both`,
}));

interface ErrorMessageProps {
    validationResult: ValidationResult;
}

const MESSAGES: Record<ValidationResult["code"], string> = {
    NONE: "A new label can be created",
    UNAVAILABLE_LABEL_NAME: "This name is already in use",
    UNAVAILABLE_LABEL_COLOR: "This color is already in use",
    NAME_TOO_LONG: "Label name can be up to 16 characters long",
    NAME_TOO_SHORT: "Label name has to be at least 3 characters long",
};

const CODES: readonly ValidationResult["code"][] = Object.keys(MESSAGES) as any;

const ErrorMessage: FunctionComponent<ErrorMessageProps> = (props) => {
    return (
        <ErrorMessageWrapper>
            <MessagesSwitch
                messages={CODES.map((CODE: ValidationResult["code"]) => {
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
