// Types
import type { ReactNode } from "react";
import type { ThemeMode } from "@/@types/MUI";
// Material UI Icons
import DarkMode from "@mui/icons-material/DarkMode";
import LightMode from "@mui/icons-material/LightMode";
import SettingsBrightness from "@mui/icons-material/SettingsBrightness";

export interface Option {
    label: string;
    value: ThemeMode;
    icon: ReactNode;
}

export const OPTIONS: Option[] = [
    {
        icon: <DarkMode />,
        label: "Dark",
        value: "dark",
    },
    {
        icon: <LightMode />,
        label: "Light",
        value: "light",
    },
    {
        icon: <SettingsBrightness />,
        label: "System",
        value: "system_preferred",
    },
];
