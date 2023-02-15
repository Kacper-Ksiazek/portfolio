// Tools
import { createContext } from "react";
import { darkTheme, lightTheme } from "@/material";
import { useLocalStorage } from "@/hooks/useLocalStorage";
// Types
import type { FunctionComponent, SetStateAction, Dispatch, ReactNode } from "react";
// Material UI Components
import { ThemeProvider } from "@mui/material";

type Theme = "light" | "dark";

interface I_MUIContext {
    theme: Theme;
    setTheme: Dispatch<SetStateAction<Theme>>;
}

export const MUIContext = createContext<I_MUIContext>({} as any);

const MUIThemeContextProvider: FunctionComponent<{ children: ReactNode }> = (props) => {
    const [theme, setTheme] = useLocalStorage<Theme>("color-theme", "light");

    return (
        <MUIContext.Provider
            value={{
                theme,
                setTheme,
            }}
        >
            <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
                {props.children}
                {/*  */}
            </ThemeProvider>
        </MUIContext.Provider>
    );
};

export default MUIThemeContextProvider;
