// Tools
import { alpha } from "@mui/material";
import { ComponentColorThemesOrganizer ,type AvailableThemes} from "@/utils/client/styled/ComponentColorThemesOrganizer";

export type ComponentThemeName = "MUI" | "TRANSPARENT_WHITE" | "TRANSPARENT_BLACK" | "TEXT_PRIMARY" | "TEXT_SECONDARY";

export function shouldForwardProp(propName: string): boolean {
    return propName !== "componentThemeID";
}

export const _common_component_color_themes: AvailableThemes<ComponentThemeName> = {
    MUI: (theme) => ({
        background: theme.palette.background.MUIFormElementsBackground,
        borderColor: theme.palette.background.MUIFormElementsBorder,
        fontColor: theme.palette.text.MUIFormElementText,
    }),
    TRANSPARENT_WHITE: {
        background: "transparent",
        fontColor: "#fff",
    },
    TRANSPARENT_BLACK: {
        background: "transparent",
        fontColor: "#000",
    },
    TEXT_PRIMARY: (theme) => ({
        background: alpha(theme.palette.text.secondary, 0.2),
        fontColor: theme.palette.text.primary,
    }),
    TEXT_SECONDARY: (theme) => ({
        background: alpha(theme.palette.text.secondary, 0.2),
        fontColor: theme.palette.text.secondary,
    }),
}

export const ComponentThemes = new ComponentColorThemesOrganizer<ComponentThemeName>(_common_component_color_themes);
