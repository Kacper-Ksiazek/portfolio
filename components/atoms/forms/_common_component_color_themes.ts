// Tools
import { ComponentColorThemesOrganizer } from "@/utils/client/styled/ComponentColorThemesOrganizer";

export type ComponentThemeName = "MUI" | "TRANSPARENT_LIGHT_THEME_WHITE_FONT" | "TRANSPARENT_LIGHT_THEME_BLACK_FONT";

export function shouldForwardProp(propName: string): boolean {
    return propName !== "componentThemeID";
}

export const ComponentThemes = new ComponentColorThemesOrganizer<ComponentThemeName>({
    MUI: (theme) => ({
        background: theme.palette.background.MUIFormElementsBackground,
        borderColor: theme.palette.background.MUIFormElementsBorder,
        fontColor: theme.palette.text.MUIFormElementText,
    }),
    TRANSPARENT_LIGHT_THEME_WHITE_FONT: {
        background: "transparent",
        fontColor: "#fff",
    },
    TRANSPARENT_LIGHT_THEME_BLACK_FONT: {
        background: "transparent",
        fontColor: "#000",
    },
});
