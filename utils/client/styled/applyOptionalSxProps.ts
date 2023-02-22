// Types
import type { Styles, SxProps, Theme } from "@/@types/MUI";

export function applySxProps(sx: SxProps | undefined, theme: Theme): Styles {
    return sx ? (typeof sx === "function" ? sx(theme) : sx) : {};
}
