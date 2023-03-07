// Tools
import { isDarkThemePreferred } from "@/material/MuiThemeProvider/utils";
// Types
import type { ThemeMode } from "@/@types/MUI";

export default function determineWhetherDisplayModal({ choosen, current }: { current: ThemeMode; choosen: ThemeMode }): boolean {
    const darkThemeIsPreferred = isDarkThemePreferred();

    switch (choosen) {
        case "system_preferred":
            return darkThemeIsPreferred ? current !== "dark" : current !== "light";
        case "dark":
            return !(darkThemeIsPreferred && current === "system_preferred");
        case "light":
            return !(!darkThemeIsPreferred && current === "system_preferred");
        default:
            new Error(`Unexpected type of theme **${choosen as never}** has been provided to the function **determineWhetherDisplayModal** `);
            return false;
    }
}
