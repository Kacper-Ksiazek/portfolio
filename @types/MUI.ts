import type { Theme } from "@mui/material";
import type { SystemStyleObject } from "@mui/system";

export { Theme };

export type Styles = SystemStyleObject<Theme>;

export type SxProps = Styles | ((theme: Theme) => Styles);

export type MUI_Color = "primary" | "secondary" | "error" | "success" | "warning";

export type MUI_Mixin = "absolute_full" | "absolute_center" | "flex_center";
