// Tools
import { createContext } from "react";
import { useDelayedState } from "@/hooks/useDelayedState";
// Types
import type { EmailFormSubsection, GeneralContactSection } from "../@types";
import type { FunctionComponent, ReactNode, SetStateAction, Dispatch } from "react";

interface Stage<T> {
    current: T;
    isChanging: boolean;
}

interface ContactNavigationContext {
    stages: {
        generalSection: Stage<GeneralContactSection>;
        form: Stage<EmailFormSubsection>;
    };

    updaters: {
        setEmailFormSubsection: Dispatch<SetStateAction<EmailFormSubsection>>;
        setCurrentGeneralSection: Dispatch<SetStateAction<GeneralContactSection>>;
    };
}

export const contactNavigationContext = createContext<ContactNavigationContext>({} as any);

const ContactNavigationContextProvider: FunctionComponent<{ children: ReactNode }> = (props) => {
    const emailFormSubsection = useDelayedState<EmailFormSubsection>("GENERAL_PURPOSE", 1000);
    const generalContactSection = useDelayedState<GeneralContactSection>("WAYS_TO_REACH_ME", 400);

    return (
        <contactNavigationContext.Provider
            value={{
                stages: {
                    form: {
                        current: emailFormSubsection.value,
                        isChanging: emailFormSubsection.isChanging,
                    },
                    generalSection: {
                        current: generalContactSection.value,
                        isChanging: generalContactSection.isChanging,
                    },
                },
                updaters: {
                    setCurrentGeneralSection: generalContactSection.setValue,
                    setEmailFormSubsection: emailFormSubsection.setValue,
                },
            }}
        >
            {props.children}
        </contactNavigationContext.Provider>
    );
};

export default ContactNavigationContextProvider;
