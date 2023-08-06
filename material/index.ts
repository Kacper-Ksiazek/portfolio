// Tools
import { alpha } from "@mui/material";
import { createTheme } from "./createTheme";

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
        MUIFormElementText: "#fff",
        //
        disabled: alpha("#000", 0.8),
    },
    background: {
        default: "#F0EFF4",
        paper: "#3D2645",

        lightAnimationBar: "#F2E8EF",
        lightSectionBackground: "#fff",
        darkSectionBackground: "#34203B",

        MUIFormElementsBackground: "#2C1B33",
        MUIFormElementsBorder: alpha("#fff", 0.6),

        disabledElementBackground: "#999999",
    },
});

export const darkTheme = createTheme({
    mode: "dark",
    ...COLORS,
    text: {
        primary: "#fff",
        secondary: "#000",
        MUIFormElementText: "#fff",

        disabled: alpha("#000", 0.8),
    },
    background: {
        default: "#161619",
        paper: "#121212",

        lightAnimationBar: "#474748",
        lightSectionBackground: "#1D1D1F",
        darkSectionBackground: "#161619",

        MUIFormElementsBorder: alpha("#fff", 0.23),
        MUIFormElementsBackground: alpha("#000", 0.2),

        disabledElementBackground: "#3B3B3C",
    },
});
