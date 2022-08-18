// Tools
import { createContext } from "react";
// Types
import type { Hobby } from "@prisma/client";
import type { ReactNode, FunctionComponent } from "react";

interface BreakTheIceContextInterface {
    hobbies: Hobby[];
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
            }}
        >
            {props.children}
        </BreakTheIceContext.Provider>
    );
};
