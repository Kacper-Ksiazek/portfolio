// Tools
import { useState } from "react";
import { createContext } from "react";
// Types
import type { FunctionComponent, ReactNode } from "react";
import type { GlobalContext as GlobalContextInterface, Snackbar } from "@/@types/GlobalContext";

export const GlobalContext = createContext<GlobalContextInterface>({} as any);

interface GlobalContextProviderProps {
    children: ReactNode;
}

export const GlobalContextProvider: FunctionComponent<GlobalContextProviderProps> = (props) => {
    const [snackbar, setSnackbar] = useState<Snackbar | null>(null);

    return (
        <GlobalContext.Provider
            value={{
                snackbar,
                setSnackbar,
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    );
};
