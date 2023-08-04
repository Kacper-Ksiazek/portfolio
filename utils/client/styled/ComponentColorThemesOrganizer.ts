// Tools
import { alpha } from "@mui/material";
// Types
import type { Theme } from "@mui/material";

interface ComponentColorTheme {
    fontColor: string;
    background: string;

    borderColor?: string;
}

interface ComponentColorThemeWithFixedBorder extends Omit<ComponentColorTheme, "borderColor"> {
    borderColor: string;
}

export type AvailableThemes<T extends string> = Record<T, AvailableThemesObjectProperty>;
type AvailableThemesObjectProperty = ComponentColorTheme | ((theme: Theme) => ComponentColorTheme);

export class ComponentColorThemesOrganizer<T extends string> {
    public constructor(public availableThemes: AvailableThemes<T>) {}

    public getTheme(componentThemeID: T, MUITheme: Theme): ComponentColorThemeWithFixedBorder {
        const chosenTheme = this.availableThemes[componentThemeID];
        const { background, fontColor, borderColor }: ComponentColorTheme = typeof chosenTheme === "function" ? chosenTheme(MUITheme) : chosenTheme;

        return {
            fontColor: fontColor,
            background: background,
            borderColor: borderColor ?? this.createDefaultBorderColor(fontColor),
        };
    }

    private createDefaultBorderColor(fontColor: string): string {
        return alpha(fontColor, 0.23);
    }
}
