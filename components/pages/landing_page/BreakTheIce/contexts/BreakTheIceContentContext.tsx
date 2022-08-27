// Tools
import { createContext } from "react";
// Types
import type { Hobby, School } from "@prisma/client";
import type { ReactNode, FunctionComponent } from "react";
import type { PreviousJob } from "@/@types/pages/LandingPage";

interface BreakTheIceContextInterface {
    hobbies: Hobby[];
    schools: School[];
    previousJobs: PreviousJob[];
}

interface BreakTheIceContextProviderProps extends BreakTheIceContextInterface {
    children: ReactNode;
}

export const BreakTheIceContext = createContext<BreakTheIceContextInterface>({} as any);

export const BreakTheIceContextProvider: FunctionComponent<BreakTheIceContextProviderProps> = (props) => {
    return (
        <BreakTheIceContext.Provider
            value={{
                hobbies: props.hobbies,
                schools: props.schools,
                previousJobs: props.previousJobs,
            }}
        >
            {props.children}
        </BreakTheIceContext.Provider>
    );
};
