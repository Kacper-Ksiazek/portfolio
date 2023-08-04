// Tools
import { ComponentColorThemesOrganizer } from "@/utils/client/styled/ComponentColorThemesOrganizer";
import {_common_component_color_themes, type  ComponentThemeName as CommonComponentThemeName } from "../_common_component_color_themes";

export type StyledButtonThemeName = CommonComponentThemeName | "PRIMARY" | "ERROR" | "SUCCESS" | "SECONDARY" | "TEXT";

export const StyledButtonColorThemes = new ComponentColorThemesOrganizer<StyledButtonThemeName>({
    ..._common_component_color_themes,
    MUI: (theme) => ({
        fontColor: theme.palette.text.MUIFormElementText,
        borderColor: theme.palette.background.MUIFormElementsBorder,
        background: theme.palette.background.MUIFormElementsBackground,
    }),
    ERROR: (theme) => ({
        background: theme.palette.error.main,
        fontColor: "#fff",
    }),
    PRIMARY: (theme) => ({
        background: theme.palette.primary.main,
        fontColor: "#fff",
    }),
    SUCCESS: (theme) => ({
        background: theme.palette.success.main,
        fontColor: "#fff",
    }),
    SECONDARY: (theme) => ({
        background: theme.palette.secondary.main,
        fontColor: "#fff",
    }),
    TEXT: (theme) => ({
        background: theme.palette.mode == "light" ? theme.palette.text.primary : theme.palette.background.lightSectionBackground,
        fontColor: theme.palette.mode == "light" ? theme.palette.text.secondary : "#fff",
    }),
});
