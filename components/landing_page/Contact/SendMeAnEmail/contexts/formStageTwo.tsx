// Tools
import joi from "joi";
import intoJoi from "./tools/intoJoi";
import restrictions from "@/utils/restrictions/sendEmailForm";
import { useState, createContext, useMemo, useEffect } from "react";
// Types
import type { CountryType } from "@/data/countries";
import type { Dispatch, SetStateAction, FunctionComponent, ReactNode } from "react";

interface FormStageTwoContextInterface {
    country: CountryType | null;
    setCountry: Dispatch<SetStateAction<CountryType | null>>;
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
    //
    everythingIsValid: boolean;
}

export const FormStageTwoContext = createContext<FormStageTwoContextInterface>({} as any);

export const FormStageTwoContextProvider: FunctionComponent<{ children: ReactNode }> = (props) => {
    const [email, setEmail] = useState<string>("rozowa_kleopatra@gmail.com");
    const [github, setGithub] = useState<string>("https://github.com/Kacper-Ksiazek");
    const [website, setWebsite] = useState<string>("");
    const [country, setCountry] = useState<CountryType | null>({ label: "Poland", code: "pl" });

    const [invalidFields, setInvalidFields] = useState<string[]>([]);

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

    useEffect(() => {
        const { error } = validationScheme.validate(
            {
                email,
                ...(github.length ? { github } : null),
                ...(website.length ? { website } : null),
                country: country ? country.label : "",
            },
            { abortEarly: false }
        );
        setInvalidFields(error ? (error as any).details.map((el: any) => el.path[0]) : []);
    }, [validationScheme, email, github, website, country]);

    return (
        <FormStageTwoContext.Provider
            value={{
                country,
                setCountry,
                countryIsInvalid: invalidFields.includes("country"),
                //
                email,
                setEmail,
                emailIsInvalid: invalidFields.includes("email"),
                //
                github,
                setGithub,
                githubIsInvalid: invalidFields.includes("github"),
                //
                website,
                setWebsite,
                websiteIsInvalid: invalidFields.includes("website"),
                //
                everythingIsValid: invalidFields.length === 0,
            }}
        >
            {props.children}
        </FormStageTwoContext.Provider>
    );
};
