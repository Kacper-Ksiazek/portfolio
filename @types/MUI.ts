import type { Theme } from "@mui/material";
import type { SystemStyleObject } from "@mui/system";

export { Theme };

export type Styles = SystemStyleObject<Theme>;

export type SxPropsFn = (theme: Theme) => Styles;

export type SxProps = Styles | SxPropsFn;

export type MUI_Color = "primary" | "secondary" | "error" | "success" | "warning";

export type MUI_Mixin = "absolute_full" | "absolute_center" | "flex_center";

export type ThemeMode = "light" | "dark" | "system_preferred";
