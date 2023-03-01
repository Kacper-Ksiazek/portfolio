// Tools
import { createContext } from "react";
import { darkTheme, lightTheme } from "@/material";
import { useLocalStorage } from "@/hooks/useLocalStorage";
// Types
import type { ThemeMode } from "@/@types/MUI";
import type { FunctionComponent, SetStateAction, Dispatch, ReactNode } from "react";
// Material UI Components
import GlobalStyles from "./GlobalStyles";
import { ThemeProvider } from "@mui/material";

interface I_MUIContext {
    theme: ThemeMode;
    setTheme: Dispatch<SetStateAction<ThemeMode>>;
}

export const MUIContext = createContext<I_MUIContext>({} as any);

const MUIThemeContextProvider: FunctionComponent<{ children: ReactNode }> = (props) => {
    const [theme, setTheme] = useLocalStorage<ThemeMode>("color-theme", "light");

    return (
        <MUIContext.Provider
            value={{
                theme,
                setTheme,
            }}
        >
            <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
                <GlobalStyles />
                {props.children}
                {/*  */}
            </ThemeProvider>
        </MUIContext.Provider>
    );
};

export default MUIThemeContextProvider;
