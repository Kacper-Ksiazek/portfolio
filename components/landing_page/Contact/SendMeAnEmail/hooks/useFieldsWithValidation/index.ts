// Tools
import stated from "@/utils/client/stated";
import { useState } from "react";
import useValidator from "./useValidator";
// Types
import type { FieldName, FormFillingStage } from "../../context";
import type { StatedDataField } from "@/@types/StatedDataField";

interface UseFieldsWithValidationResult {
    author: StatedDataField<string>;
    subject: StatedDataField<string>;
    message: StatedDataField<string>;
    contact: {
        country: StatedDataField<string>;
        email: StatedDataField<string>;
        github: StatedDataField<string>;
        website: StatedDataField<string>;
    };
    //
    disableContinueButton: boolean;
    //
    checkWhetherAFieldIsValid: (fieldName: FieldName) => boolean;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (): UseFieldsWithValidationResult => {
    const [stage, setStage] = useState<FormFillingStage>("purpose");
    // Stage 1- Purpose
    const [author, setAuthor] = useState<string>("dasd asdasd asd");
    const [subject, setSubject] = useState<string>("asd asdasd asdas");
    const [message, setMessage] = useState<string>("d asd asdasd asdasdasd asd");
    // Stage 2- Contact details
    const [country, setCountry] = useState<string>("d asd asdasd asdasdasd asd");
    const [email, setEmail] = useState<string>("d asd asdasd asdasdasd asd");
    const [github, setGithub] = useState<string>("d asd asdasd asdasdasd asd");
    const [website, setWebsite] = useState<string>("d asd asdasd asdasdasd asd");
    // Stage 3- ReCAPTCHA
    const [ReCAPTCHAHasBeenVerified, setReCAPTCHAHasBeenVerified] = useState<boolean>(false);

    const { checkWhetherAFieldIsValid, disableContinueButton } = useValidator({ stage, author, subject, message, country, email, github, website, ReCAPTCHAHasBeenVerified });

    return {
        author: stated(author, setAuthor),
        subject: stated(subject, setSubject),
        message: stated(message, setMessage),
        contact: {
            country: stated(country, setCountry),
            email: stated(email, setEmail),
            github: stated(github, setGithub),
            website: stated(website, setWebsite),
        },
        //
        disableContinueButton,
        checkWhetherAFieldIsValid,
    };
};
