// Tools
import { useTheme } from "@mui/system";
import { useLazyLoadedImages } from "@/hooks/useLazyLoadedImages";

export function useLazyLoadedMapImages() {
    const theme = useTheme();
    const { mode } = theme.palette;

    useLazyLoadedImages({
        id: "CONTACT_BACKGROUND_MAPS",
        srcsToLazyLoad: [
            `${mode}/blank`, //
            `${mode}/success`, //
            `${mode}/error`, //
            `poland/error`, //
            `poland/success`, //
            `poland/simple`, //
        ].map((path) => `/images/landing-page/europe_map/${path}.png`),
    });
}
