// Tools
import { createContext } from "react";
import { darkTheme, lightTheme } from "@/material";
import { useThemeControl } from "./hooks/useThemeControl";
// Types
import type { I_MUIContext } from "./@types";
import type { FunctionComponent, ReactNode } from "react";
// Material UI Components
import GlobalStyles from "../GlobalStyles";
import { ThemeProvider } from "@mui/material";

export const MUIContext = createContext<I_MUIContext>({} as any);

const MUIThemeContextProvider: FunctionComponent<{ children: ReactNode }> = (props) => {
    const { setTheme, theme, themeToBeUsed } = useThemeControl();

    return (
        <MUIContext.Provider
            value={{
                theme,
                themeToBeUsed,
                setTheme,
            }}
        >
            <ThemeProvider theme={themeToBeUsed === "light" ? lightTheme : darkTheme}>
                <GlobalStyles />
                {props.children}
                {/*  */}
            </ThemeProvider>
        </MUIContext.Provider>
    );
};

export default MUIThemeContextProvider;
