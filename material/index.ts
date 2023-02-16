import { alpha } from "@mui/system";
import { createTheme } from "./createTheme";

declare module "@mui/material/styles/createPalette" {
    interface TypeBackground {
        lightAnimationBar: string;
        lightSectionBackground: string;
    }
}

const primary = "#DA4167";
const secondary = "#832161";
const error = "#D62246";
const success = "#388E3C";
const warning = "#F57C00";

export const COLORS = {
    primary,
    secondary,
    error,
    success,
    warning,
};

export const lightTheme = createTheme({
    mode: "light",
    ...COLORS,
    text: {
        primary: "#000",
        secondary: "#fff",
    },
    background: {
        default: "#F0EFF4",
        paper: "#3D2645",
        lightAnimationBar: "#F2E8EF",
        lightSectionBackground: "#fff",
    },
});

export const darkTheme = createTheme({
    mode: "dark",
    ...COLORS,
    text: {
        primary: "#fff",
        secondary: "#000",
    },
    background: {
        default: "#161619",
        paper: "#121212",
        lightAnimationBar: "#474748",
        lightSectionBackground: "#1D1D1F",
    },
});
