// Tools
import joi from "joi";
import intoJoi from "./tools/intoJoi";
import { useState, createContext, useMemo } from "react";
import restrictions from "@/utils/restrictions/sendEmailForm";
import distinguishInvalidProperties from "./tools/distinguishInvalidProperties";
// Types
import type { Dispatch, SetStateAction, FunctionComponent, ReactNode } from "react";

interface FormStageTwoContextInterface {
    country: string;
    setCountry: Dispatch<SetStateAction<string>>;
    countryIsInvalid: boolean;
    //
    email: string;
    setEmail: Dispatch<SetStateAction<string>>;
    emailIsInvalid: boolean;
    //
    github: string;
    setGithub: Dispatch<SetStateAction<string>>;
    githubIsInvalid: boolean;
    //
    website: string;
    setWebsite: Dispatch<SetStateAction<string>>;
    websiteIsInvalid: boolean;
}

export const FormStageTwoContext = createContext<FormStageTwoContextInterface>({} as any);

export const FormStageTwoContextProvider: FunctionComponent<{ children: ReactNode }> = (props) => {
    const [email, setEmail] = useState<string>("");
    const [github, setGithub] = useState<string>("");
    const [country, setCountry] = useState<string>("");
    const [website, setWebsite] = useState<string>("");

    const validationScheme = useMemo(() => {
        return joi.object({
            country: intoJoi(restrictions.contact.country),
            email: intoJoi(restrictions.contact.country).email({ tlds: false }),
            github: intoJoi(restrictions.contact.github, false).custom((val, helper) => {
                if (val.slice(0, 19) === restrictions.contact.github.startWith) return val;
                else {
                    return helper.error("github.invalid");
                }
            }),
            website: intoJoi(restrictions.contact.website, false),
        });
    }, []);

    const { checkWhetherAFieldIsValid } = distinguishInvalidProperties({
        body: { email, github, country, website },
        schema: validationScheme,
    });

    return (
        <FormStageTwoContext.Provider
            value={{
                country,
                setCountry,
                countryIsInvalid: checkWhetherAFieldIsValid("country"),
                //
                email,
                setEmail,
                emailIsInvalid: checkWhetherAFieldIsValid("email"),
                //
                github,
                setGithub,
                githubIsInvalid: checkWhetherAFieldIsValid("github"),
                //
                website,
                setWebsite,
                websiteIsInvalid: checkWhetherAFieldIsValid("website"),
            }}
        >
            {props.children}
        </FormStageTwoContext.Provider>
    );
};
