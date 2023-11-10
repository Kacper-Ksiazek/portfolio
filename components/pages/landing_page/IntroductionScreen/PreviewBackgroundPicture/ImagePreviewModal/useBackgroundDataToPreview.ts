// Tools
import { useTheme } from "@mui/material";
// Types
import type { Theme } from "@mui/material";

interface BackgroundData {
    title: string;
    url: string;
}

const BACKGROUND_TO_PREVIEW: Record<Theme["palette"]["mode"], BackgroundData> = {
    dark: {
        title: "USA / San Francisco / Golden Bridge",
        url: "/images/landing-page/introduction-screen/dark/fullsize.jpg",
    },
    light: {
        title: "Germany / Hamburg / Fiction Park",
        url: "/images/landing-page/introduction-screen/light/fullsize.jpg",
    },
};

export function useBackgroundDataToPreview(): BackgroundData {
    const theme = useTheme();
    const { title, url } = BACKGROUND_TO_PREVIEW[theme.palette.mode];

    return { title, url };
}
