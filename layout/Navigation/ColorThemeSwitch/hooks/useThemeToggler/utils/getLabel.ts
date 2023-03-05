// Types
import type { ThemeMode } from "@/@types/MUI";

export default function getLabel(theme: ThemeMode): string {
    return (
        {
            dark: "Dark",
            light: "Light",
            system_preferred: "System preferred",
        } as Record<ThemeMode, string>
    )[theme];
}
